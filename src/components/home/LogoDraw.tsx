// The hero logo, drawn in on first paint: circuit, stem, leaves, bud, then the
// ring closes and the gradient fills in behind. About a second, CSS only.
// Paths are inlined from public/logo-line.svg (keep the two in sync); every
// path has pathLength="1" so one dash rule draws them all.

const ringNodes = [
  [182, 112],
  [538, 112],
  [156, 222],
  [564, 222],
];

const circuitNodes = [
  [198, 626],
  [316, 642],
  [398, 624],
  [492, 572],
  [262, 584],
  [466, 596],
  [510, 548],
  [212, 566],
  [334, 636],
];

// Each group's strokes draw from offset 1 to 0 after its delay.
const draw = "animate-draw [stroke-dasharray:1]";
const node = "animate-pop origin-center [transform-box:fill-box]";

const LogoDraw = () => (
  <svg
    // Cropped to the ring so it fills the box like logo.webp did.
    viewBox="53 57 614 614"
    width={120}
    height={120}
    fill="none"
    stroke="currentColor"
    strokeWidth={13}
    strokeLinecap="round"
    strokeLinejoin="round"
    role="img"
    aria-label="RoseHack logo"
  >
    <defs>
      <linearGradient id="rose-logo-fill" x1="0" y1="0" x2="1" y2="1">
        <stop
          offset="0.1"
          style={{ stopColor: "var(--color-rosehack-purple)" }}
        />
        <stop
          offset="0.4"
          style={{ stopColor: "var(--color-rosehack-pink)" }}
        />
        <stop
          offset="0.65"
          style={{ stopColor: "var(--color-rosehack-lightgreen)" }}
        />
        <stop
          offset="0.9"
          style={{ stopColor: "var(--color-rosehack-yellow)" }}
        />
      </linearGradient>
    </defs>

    <circle
      cx={360}
      cy={364}
      r={300}
      fill="url(#rose-logo-fill)"
      stroke="none"
      className="animate-fade-in [animation-delay:700ms]"
    />

    <g className={`rose-circuit ${draw}`}>
      <path pathLength={1} d="M348 548 L286 548 L286 596" />
      <path pathLength={1} d="M286 596 L232 596 L232 626" />
      <path pathLength={1} d="M372 528 L438 528 L438 572" />
      <path pathLength={1} d="M438 572 L492 572" />
      <path pathLength={1} d="M348 600 L316 600 L316 642" />
      <path pathLength={1} d="M372 592 L398 592 L398 624" />
      <path pathLength={1} d="M232 626 L198 626" />
      <path pathLength={1} d="M262 644 L262 584" />
      <path pathLength={1} d="M466 638 L466 596" />
      <path pathLength={1} d="M510 592 L510 548" />
      <path pathLength={1} d="M212 612 L212 566" />
      <path pathLength={1} d="M348 636 L334 636" />
    </g>

    <g className={`rose-stem ${draw} [animation-delay:150ms]`}>
      <path pathLength={1} d="M348 296 L348 656" />
      <path pathLength={1} d="M372 296 L372 656" />
      <path pathLength={1} d="M374 376 L406 396 L374 416 Z" />
      <path pathLength={1} d="M346 496 L314 516 L346 536 Z" />
    </g>

    <g className={`rose-leaf ${draw} [animation-delay:300ms]`}>
      <path
        pathLength={1}
        d="M203 430 C215 384 262 362 310 370 C300 414 252 440 203 430 Z"
      />
      <path pathLength={1} d="M228 420 L294 382" />
      <path pathLength={1} d="M241 428 L299 395" />
      <path
        pathLength={1}
        d="M398 512 C410 466 457 444 505 452 C495 496 447 522 398 512 Z"
      />
      <path pathLength={1} d="M423 502 L489 464" />
      <path pathLength={1} d="M436 510 L494 477" />
    </g>

    <g className={`rose-bud ${draw} [animation-delay:450ms]`}>
      <path
        pathLength={1}
        d="M266 120 L302 170 L332 152 C336 108 384 108 388 152 L416 170 L454 120 L454 236 C454 276 416 298 360 298 C304 298 266 276 266 236 Z"
      />
      <path pathLength={1} d="M278 154 L442 200" />
    </g>

    <g className={`rose-ring ${draw} [animation-delay:600ms]`}>
      <path pathLength={1} d="M360 64 A300 300 0 1 1 359.6 64" />
      <path pathLength={1} d="M100 250 A288 288 0 0 1 182 112" />
      <path pathLength={1} d="M620 250 A288 288 0 0 0 538 112" />
      <path pathLength={1} d="M80 222 L148 222" />
      <path pathLength={1} d="M640 222 L572 222" />
    </g>

    {/* Dots have no length to draw, so they pop in after their group. */}
    <g className="rose-nodes" fill="currentColor" stroke="none">
      {circuitNodes.map(([cx, cy]) => (
        <circle
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r={11}
          className={`${node} [animation-delay:250ms]`}
        />
      ))}
      {ringNodes.map(([cx, cy]) => (
        <circle
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r={11}
          className={`${node} [animation-delay:850ms]`}
        />
      ))}
    </g>
  </svg>
);

export default LogoDraw;
