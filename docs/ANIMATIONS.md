# RoseHack '27 — website animation guide

For Charles, Yuval, Benito and Quinton.

This is a brief, not a patch. It tells you what each animation should feel like,
which technique gets you there, and the specific things in _this_ repo that will
trip you up — then leaves the implementation to you. Where the repo already
contains a working example of a technique, I point at it instead of restating
it, because the version in our codebase is more useful to you than anything I
could paste here.

Checked against `main` at `a588cd7`: Next 15.5.27, React 19, Tailwind 4.0.17,
static export to GitHub Pages. No new dependency is needed for any of this.

---

## The assets

Four files ship with this guide. Everything below assumes they're in `public/`.

| File                    | Goes to                                 | Used by                             |
| ----------------------- | --------------------------------------- | ----------------------------------- |
| `logo-line.svg`         | inline in JSX, **not** `public/`        | The logo draw-in                    |
| `petal.svg`             | `public/petal.svg`                      | Falling petals                      |
| `leaf-sprout.svg`       | `public/leaf-sprout.svg`                | Apply button hover                  |
| `grass-dense-1440.webp` | `public/grass-dense-1440.webp`          | The meadow's third layer            |
| `make_grass.py`         | nowhere — keep it with the design files | Regenerating the grass denser later |

`logo-line.svg` is the one that needs explaining. `public/logo.webp` is a 267×266
raster image, so it cannot be drawn, morphed or animated in parts — only moved
and faded as a whole. The line-art version exists so the draw-in is possible at
all. It is organised for exactly that: five groups (`rose-circuit`, `rose-stem`,
`rose-leaf`, `rose-bud`, `rose-ring`) that are the animation's stages, every
stroked path carrying `pathLength="1"`, and the filled dots separated into
`rose-nodes` because a dot has no length to draw.

It is stroked in `currentColor`, so set its colour with the `color` property
rather than editing the file. Two consequences worth knowing: it has to be
**inlined into your JSX** — `next/image` renders it as an opaque image and you
can't reach the paths — and the `images` CI check ignores `.svg` entirely, so it
passes through untouched.

`grass-dense-1440.webp` is 113KB, noticeably heavier than the grass already in
`public/`. The fine blade detail plus transparency just doesn't compress well.
It's only visible at the very bottom of the page, so lazy-load it rather than
trying to shrink it further. `make_grass.py` regenerates it — the three band
definitions near the top control count, height and opacity, so when we step the
meadow up for January you change numbers rather than redraw anything.

---

## Ground rules

**Nothing in the site respects `prefers-reduced-motion` today.** There are zero
matches for it, `motion-safe` or `motion-reduce` anywhere in `src/`, and the
grass is swaying forever with no way to stop it. That is an accessibility bug we
already have, before any new animation, and for a women-in-tech event it's the
kind of detail people notice.

Fix it once, globally, as the first PR, before anyone starts on the animations
below. A single `@media (prefers-reduced-motion: reduce)` block at the bottom of
`globals.css` that zeroes animation and transition durations, forces
iteration count to 1, and marks each declaration `!important` will cover the
existing sway and everything in this document. Two things make that work: write
your entrance animations with `animation-fill-mode: both` so a zeroed duration
lands on the final frame rather than the first, and remember that a CSS
_transition_ driven by a class change needs its own rule in that block, because
zeroing the duration isn't enough if the starting state is `opacity: 0`.

JavaScript needs its own check — a scroll listener that never runs beats one
that runs and does nothing. `window.matchMedia` read once at mount is enough for
everything here.

**Tailwind v4 splits `transform` into separate properties, and this will bite
you.** There is no `tailwind.config.js` in this repo; v4 is configured in CSS,
in the `@theme` block of `globals.css`. `--animate-sway` in that file is a
complete worked example of adding a keyframe animation — read it before you
write your first one, and follow its shape.

The trap is that v4 compiles `rotate-1` and `-translate-x-1/2` to the individual
`rotate` and `translate` CSS properties, not to a `transform` shorthand. A
keyframe animating `transform` _composes_ on top of a resting `rotate-*` class;
a keyframe animating `rotate`, `translate` or `scale` _replaces_ it, and the
resting pose vanishes for the duration. Three places in the current code are
affected: the countdown tiles carry `rotate-1` / `-rotate-1`, the decorative
flowers carry `rotate-*`, and the back grass band is already running a
`transform: skewX()` through `sway`. Animate `transform` and `opacity` unless
you mean to override a resting pose. Never animate `width`, `height`, `top`,
`left` or `margin` — those force layout every frame and visibly stutter on a
mid-range Android.

**There is no shared wrapper anywhere.** `src/app/layout.tsx` puts `{children}`
directly inside the React Query provider with no wrapping element, and there is
no `Section`, `Card` or `Container` component. Every page hand-writes its own
top-level element, and the paper-card look is implemented four different ways.
That is the single biggest constraint here: anything "global" is either mounted
in `layout.tsx` or applied by hand in six files.

**Three sections clip their contents.** `Hero`, `judges/page.tsx` and
`sponsors/page.tsx` are all `overflow-hidden`. Anything that should travel in
from outside the viewport has to be mounted in `layout.tsx`, not inside a
section.

**Do the de-duplication before the ambient work.** The flowers and grass are
copy-pasted into three files, four once PR #16 lands. Extracting them is a pure
refactor with no visual change, and it turns the meadow from four edits into
one. The scroll reveal doesn't depend on it; the meadow effectively does.

**`output: "export"` means pages render at build time.** Random values generated
at module or render scope roll differently in the build and in the browser, and
Next throws a hydration error. Generate them after mount. This bites the petals
specifically.

**Two gates will fail your PR for reasons unrelated to your animation.** The
`formatting` check runs Prettier, and `.prettierrc` loads
`prettier-plugin-tailwindcss`, which re-sorts class names — hand-ordered classes
will fail, so run `npm run format` before every push. And the pre-push hook runs
`npm run check && npm run eslint`, which on a machine that has run `next dev`
currently errors on the generated `next-env.d.ts`. That file is gitignored and
doesn't exist in CI, so the fix is to add it to the `ignores` array in
`eslint.config.mjs` — worth doing as its own one-line PR so nobody else loses
twenty minutes to it.

Also note there's no `eslint-plugin-react-hooks` in the config, so **nothing
will warn you about a wrong dependency array.** Check those by hand.

---

## 1. Scroll reveal

**Build this first.** Biggest perceived polish for the least work, independent of
everything else here, and it needs no new assets.

**What it should feel like:** each paper card arrives — fades up a few pixels
with a slight rotation that resolves to straight as it enters view. Once only;
it must not replay when you scroll back up. Think "settling into place", not
"flying in". If you can tell it's an animation, it's too much.

**The approach:** `IntersectionObserver` on a wrapper element, flipping a class
when it fires, with the actual movement done by a CSS transition. Disconnect the
observer inside the callback the first time it fires — that's what makes it
once-only, and it's cheaper than leaving observers alive on every card. A
threshold around 0.15 with a negative bottom `rootMargin` makes cards trigger
slightly before they're fully on screen, which reads better than waiting.

There is no existing client component to copy from and no IntersectionObserver
anywhere in `src/`, so this is a new `'use client'` component. Every page is a
server component; only the wrapper needs to be a client one.

**Traps in this repo:**

Because it renders a wrapper element, the rotation lands on the wrapper and not
on the child — which is what makes it safe to wrap a countdown tile or a flower
that already carries `rotate-1`. This is the one case where a `transform`
animation and a resting `rotate-*` coexist cleanly. Keep it that way; don't be
tempted to put the class on the child.

Applying it is six files by hand: `about` (two cards), `faq` (title card, the
accordion card, the footnote card), `judges` (heading, intro, six cards),
`sponsors` (heading, intro, four slots), `TracksSection` once PR #16 lands, and
`page.tsx` for `Theme` and `Footer`. Not `Hero` — that's above the fold, use the
entrance in section 2 instead. Inside a `.map()`, drive the delay off the index
and cap it; past about 240ms total the last card feels late rather than
staggered.

**Done when:** reveals fire once; a card that is already in view on load appears
without a flash of nothing; nothing animates with reduced motion set; no card
sits invisible if its observer never fires.

---

## 2. The logo draws itself

**What it should feel like:** on first paint the mark builds — the circuit traces
root in, the stem rises, the leaves unfurl, the bud opens, and the ring closes
around it last. About a second end to end, then it sits still forever. The
sequence tells the Root Access story in one gesture, which is the reason to do
it in this order rather than any other.

**The asset:** `logo-line.svg`, inlined into the hero.

**The approach:** SVG strokes animate with `stroke-dasharray` and
`stroke-dashoffset`. Normally you'd have to measure each path's length in
JavaScript to know what values to use; `pathLength="1"` normalises every path's
length to 1 regardless of its real geometry, so one CSS rule covers all of them
and there's no measuring at all. Those attributes are already in the file. Set
both dash properties to 1, animate the offset to 0, and stagger the five groups
with `animation-delay`. No JavaScript.

The dots in `rose-nodes` have no length to draw — fade or scale those in instead,
timed to land just after the group they belong to.

**Traps in this repo:**

Inline the SVG. Loading it through `next/image` renders it as an opaque image and
the paths become unreachable. Leave `logo.webp` where it is in the navbar — this
is a hero-only treatment.

The hero currently shows `logo.webp` at 120px; whichever one you render, don't
show both. The line-art version is a different weight from the filled logo, so
look at them side by side at the real size before committing to it.

Keep the whole sequence under about a second. The Apply button is the thing that
matters on that screen, and if the logo is still assembling when someone reaches
for it, cut the delays.

**Done when:** the mark is fully drawn and static after roughly one second; it
renders complete and immediately with reduced motion set; it doesn't shift
layout as it draws; the Apply button is reachable throughout.

---

## 3. The meadow deepens as you scroll

**Do the extraction first.** This one is close to unworkable until the grass
lives in one place.

**What it should feel like:** the grass pinned to the bottom of the viewport
starts thin and fills in as you scroll, so by the time you reach the bottom of
the page you're standing in a full meadow. It should be slow enough that nobody
consciously notices it happening.

**The assets:** `grass-band-1440.webp` (back, already swaying),
`grass-meadow-border-1440.webp` (front) and the new `grass-dense-1440.webp` on
top, each fading in at a different point in the scroll.

**The approach:** one scroll listener writes a 0→1 progress value into a CSS
custom property on `:root`; the three layers then derive their own opacity from
it in pure CSS, each with a different offset and multiplier. No per-frame React
re-render — the handler touches one variable and nothing else. Register the
listener as passive, and throttle it with `requestAnimationFrame` rather than
running on every scroll event.

The trick that staggers the layers for free: browsers clamp `opacity` to 0–1, so
a layer whose computed value is negative early in the scroll is simply not
visible yet. Subtract a different amount per layer and they come in one after
another with no thresholds in JavaScript.

**Traps in this repo:**

Mount it in `layout.tsx` — that's the only shared insertion point, and two of
the three current grass parents are `overflow-hidden`.

The back band is already running `animate-sway`, which uses `transform`. Animate
its **opacity only**; a second transform animation on that element replaces the
sway.

Lazy-load the dense layer. It's 113KB and invisible until the bottom of the page.

**One thing to decide as a group before building it:** a fixed meadow is a
different design from per-section scenery. On the FAQ page it means grass across
the bottom of the accordion. Mock it and look before committing to the refactor —
sections 1, 2 and 4 don't depend on this one, so it's safe to drop if it reads
badly.

**Done when:** scrolling top to bottom visibly thickens the meadow; scrolling
fast doesn't stutter; the sway still runs; with reduced motion the meadow sits
at a sensible fixed density rather than empty.

---

## 4. Falling petals

**What it should feel like:** a thin scatter drifting down behind the content.
Slow, sparse, low opacity — barely there.

**The asset:** `petal.svg`.

**Get the numbers right or it reads as snow.** Around 18 petals on screen, not 200. Fall times in the 14–24 second range, not 3. Opacity around 0.5. Each petal
needs its own duration, horizontal drift and rotation, or they move as a sheet
and the effect dies. Negative animation delays are the trick for starting
mid-flight, so the first screen isn't empty for ten seconds.

**The approach:** generate the per-petal randomness once after mount, hand each
petal its values as CSS custom properties, and let a single keyframe animation do
the work. Give the container `aria-hidden` — screen readers should never
announce decoration.

**Traps in this repo:**

Mount it in `layout.tsx`. Inside `Hero`, `judges` or `sponsors` it gets clipped
by `overflow-hidden`.

Generate the random values inside an effect, not at render scope. With
`output: "export"` the build and the browser roll different numbers and you get a
hydration error on every page.

Skip it below 768px — on a phone it burns battery and competes with a small
screen.

Check the stacking: the navbar is sticky, and the petal overlay must sit behind
it. If the navbar has no explicit z-index, give it one rather than fighting the
overlay.

**Done when:** it reads as "a few petals" not "weather"; no hydration warnings in
the console on any route; nothing below 768px; no petals over the navbar;
nothing at all with reduced motion set.

---

## 5. Small ones, genuinely small

**Countdown digit pulse.** `Countdown.tsx` shows `--` until mount, then swaps in
with no transition. A quick scale pulse on change reads better than a flip and is
a tenth of the work. The tiles carry `rotate-1` / `-rotate-1`, so animate
**`scale` only** — in v4 that's a separate property from `rotate`, so the tilt
survives. This is the one place where animating an individual property is the
right call rather than the trap.

**FAQ accordion.** `question-answer-card.tsx` conditionally mounts the answer, so
there is nothing to animate out and no height to transition. The fix without a
library is the `grid-template-rows` trick: wrap the answer in a grid that
transitions between `0fr` and `1fr`, with `overflow-hidden` on the child. It
animates to content height with no measuring and no JavaScript. Keep the
paragraph mounted and mark it `aria-hidden` while collapsed. Needs Chrome 107+,
Safari 17.4+ or Firefox 120+; older browsers snap open, which is exactly what
happens today, so there's no regression to guard against.

**Mobile menu.** Same conditional-mount shape in `Navbar.tsx`, same fix — or keep
it mounted and transition opacity and translate, with `pointer-events-none` while
closed.

**Hover states that currently snap.** Four places have hover classes with no
`transition`: `hover:brightness-95`, `hover:text-rosehack-yellow`,
`hover:bg-rosehack-cream/10`, `hover:opacity-80`. Adding a transition to each is
a five-minute PR and makes the whole site feel less brittle.

**Apply button sprouts.** `leaf-sprout.svg` scaling in at the corner on hover.
Set `transform-origin` to the stem base so it unfurls from where it's attached
rather than growing out of its own middle. Keep it under 250ms.

**Track cards.** Once PR #16 is in: a small scale and a 2px lift, under 200ms.

**404 and error pages.** Both are stubs today. The Figma design for the 404
exists — a terminal cursor typing `sudo bloom`, then a flower opening. That's a
page build rather than an animation task, but it's the only place Root Access and
In Bloom meet directly, and shipping a bare div there would be a shame.

---

## Who does what

Assigned by the files you're already in, so these don't collide.

| Area                    | Work                                                                                                                                                                                                            |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| First, somebody         | The reduced-motion block and the `next-env.d.ts` ESLint fix. Twelve lines, unblocks everyone.                                                                                                                   |
| Yuval (owns PR #16)     | Merge #16, then the logo draw-in and the track-card hover. Also please swap the hard-coded `#a98bc4` for `text-rosehack-purple` and `font-serif` for `font-cormorant` in `TracksSection` while you're in there. |
| FAQ / about owner       | The reveal component, applying it in both pages, and the accordion.                                                                                                                                             |
| Judges / sponsors owner | Applying the reveal in both, and the mobile menu.                                                                                                                                                               |
| Open                    | The grass extraction and the meadow (decide as a group first), petals, countdown pulse, hover transitions, the 404.                                                                                             |

Ask me for a denser grass layer or a different petal shape — those are a
regenerate, not a redraw.

---

## Definition of done, for all of it

Nothing animates with `prefers-reduced-motion: reduce` set, the existing grass
sway included. Test it: macOS System Settings → Accessibility → Display → Reduce
motion.

No animation touches `width`, `height`, `top`, `left` or `margin`. No keyframe
animates `rotate`, `translate` or `scale` on an element carrying a resting
`rotate-*` / `translate-*` / `scale-*` class, except the countdown pulse, which
does it deliberately.

Scroll reveals fire once. Zero hydration warnings on `/`, `/about`, `/faq`,
`/judges`, `/sponsors`, `/tracks`. Ambient animation off below 768px.

`npm run format && npm run check && npm run eslint` clean before you push, and
`npm run build` succeeds — it's a static export, so a build failure is a deploy
failure.

No new hard-coded hex colours. Six tokens exist in `globals.css`; use them.

And nothing delays, covers or moves the Apply button. If an animation and the
conversion ever fight, the conversion wins.
