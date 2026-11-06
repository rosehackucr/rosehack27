"use client";

import { useEffect, useState, type CSSProperties } from "react";

// A thin scatter of petals drifting down the viewport. Decorative only:
// click-through, hidden from screen readers, below the navbar (z-50).

const COUNT = 18;
const colors = [
  "text-rosehack-pink",
  "text-rosehack-pink",
  "text-rosehack-cream",
  "text-rosehack-purple",
];

type Petal = {
  left: number; // vw
  size: number; // px
  duration: number; // s
  delay: number; // s, negative so the first screen isn't empty
  drift: number; // px of sideways travel over one fall
  spinFrom: number; // deg
  spinTo: number; // deg
  opacity: number;
  color: string;
};

const between = (min: number, max: number) => min + Math.random() * (max - min);

const makePetal = (): Petal => {
  const duration = between(14, 24);
  const spinFrom = between(0, 360);
  return {
    left: between(0, 100),
    size: between(10, 24),
    duration,
    delay: -between(0, duration),
    drift: between(-120, 120),
    spinFrom,
    spinTo: spinFrom + between(180, 540) * (Math.random() < 0.5 ? -1 : 1),
    opacity: between(0.4, 0.6),
    color: colors[Math.floor(Math.random() * colors.length)],
  };
};

const Petals = () => {
  // Empty on the server and on first client render; the random values are
  // only rolled after mount, so the static export can't hit a hydration
  // mismatch.
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    if (
      window.innerWidth < 768 ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    setPetals(Array.from({ length: COUNT }, makePetal));
  }, []);

  if (petals.length === 0) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-40 hidden overflow-hidden md:block"
    >
      {petals.map((p, i) => (
        <svg
          key={i}
          viewBox="0 0 100 130"
          className={`animate-fall absolute top-0 ${p.color}`}
          style={
            {
              left: `${p.left}vw`,
              width: p.size,
              opacity: p.opacity,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              "--petal-drift": `${p.drift}px`,
              "--petal-spin-from": `${p.spinFrom}deg`,
              "--petal-spin-to": `${p.spinTo}deg`,
            } as CSSProperties
          }
        >
          {/* Same shape as public/petal.svg. */}
          <path
            fill="currentColor"
            d="M50 127 C21 105 4 74 10 46 C15 19 34 3 53 3 C71 3 89 20 92 47 C95 77 79 107 50 127 Z"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeOpacity={0.26}
            strokeWidth={3}
            strokeLinecap="round"
            d="M50 120 C47 88 47 48 53 17"
          />
        </svg>
      ))}
    </div>
  );
};

export default Petals;
