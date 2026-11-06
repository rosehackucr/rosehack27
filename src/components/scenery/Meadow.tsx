"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// The meadow pinned to the bottom of the viewport. It starts thin and fills in
// as you scroll: one passive scroll listener writes a 0-1 progress value to
// --meadow on :root, and each layer derives its own opacity from it in CSS.
// Browsers clamp opacity to 0-1, so subtracting a different amount per layer
// staggers them with no thresholds in JS.

// Density used with reduced motion (also pinned in globals.css).
const STILL = 0.6;
// The dense layer is 113KB and invisible early on, so it isn't mounted until
// the page is this far scrolled.
const DENSE_FROM = 0.5;

const Meadow = () => {
  const [dense, setDense] = useState(false);

  useEffect(() => {
    const root = document.documentElement;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      root.style.setProperty("--meadow", String(STILL));
      setDense(STILL >= DENSE_FROM);
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const max = root.scrollHeight - window.innerHeight;
      // A page too short to scroll is already "at the bottom".
      const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 1;
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
      className="pointer-events-none fixed inset-x-0 bottom-0 z-30"
    >
      {/* Back: already swaying (a transform), so only its opacity is driven
          here. Visible from the start, full by halfway. */}
      <Image
        src="/grass-band-1440.webp"
        alt=""
        width={1440}
        height={120}
        className="animate-sway absolute bottom-0 h-28 w-full origin-bottom object-cover object-bottom opacity-[calc(0.35_+_var(--meadow,0)_*_1.3)] md:h-48"
      />
      {/* Front: comes in from about 15% down, full by 75%. */}
      <Image
        src="/grass-meadow-border-1440.webp"
        alt=""
        width={1440}
        height={150}
        className="absolute bottom-0 h-36 w-full object-cover object-bottom opacity-[calc(var(--meadow,0)_*_1.65_-_0.25)] md:h-52"
      />
      {/* Dense: comes in from 60% down, full at the bottom. */}
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
