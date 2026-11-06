"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// An extra meadow at the very bottom of every page (the sections keep their
// own grass), inside the footer's bottom padding so it never covers text.
// It grows as the footer scrolls into view:
// one passive scroll listener writes a 0-1 progress value to --meadow on
// :root, and each layer derives its own opacity from it in CSS. Browsers clamp
// opacity to 0-1, so subtracting a different amount per layer staggers them
// with no thresholds in JS.

// With reduced motion the meadow is simply full and still (also pinned in
// globals.css).
const STILL = 1;
// The dense layer is 113KB and invisible early on, so it isn't mounted until
// the footer is this far into view.
const DENSE_FROM = 0.4;

const Meadow = () => {
  const [dense, setDense] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const footer = document.querySelector("footer");
    if (!footer) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      root.style.setProperty("--meadow", String(STILL));
      setDense(STILL >= DENSE_FROM);
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      // How much of the footer has scrolled into view: 0 until it appears,
      // 1 once its bottom edge (the end of the page) is on screen.
      const { top, height } = footer.getBoundingClientRect();
      const progress = Math.min(
        Math.max((window.innerHeight - top) / height, 0),
        1,
      );
      root.style.setProperty("--meadow", progress.toFixed(3));
      if (progress >= DENSE_FROM) setDense(true);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
      root.style.removeProperty("--meadow");
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0"
    >
      {/* Back: already swaying (a transform), so only its opacity is driven
          here. First in, full by two thirds. */}
      <Image
        src="/grass-band-1440.webp"
        alt=""
        width={1440}
        height={120}
        className="animate-sway absolute bottom-0 h-28 w-full origin-bottom object-cover object-bottom opacity-[calc(var(--meadow,0)_*_1.5)] md:h-48"
      />
      {/* Front: comes in from 30%, full by 80%. */}
      <Image
        src="/grass-meadow-border-1440.webp"
        alt=""
        width={1440}
        height={150}
        className="absolute bottom-0 h-36 w-full object-cover object-bottom opacity-[calc(var(--meadow,0)_*_2_-_0.6)] md:h-52"
      />
      {/* Dense: last in, from 67%, full at the very end of the page. */}
      {dense && (
        <Image
          src="/grass-dense-1440.webp"
          alt=""
          width={1440}
          height={240}
          loading="lazy"
          className="absolute bottom-0 h-40 w-full object-cover object-bottom opacity-[calc(var(--meadow,0)_*_2.5_-_1.5)] md:h-60"
        />
      )}
    </div>
  );
};

export default Meadow;
