"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";

// Click an empty spot in the hero and a flower sprouts there, then fades.
// Desktop with a mouse only, and never with reduced motion.

const FLOWERS = ["cream", "pink-lg", "pink-md", "pink-sm", "6petal"];
// Never more than this many on screen; the oldest goes first.
const MAX = 12;

type Planted = {
  id: number;
  x: number;
  y: number;
  flower: string;
  size: number;
  rotate: number;
};

const between = (min: number, max: number) => min + Math.random() * (max - min);

const PlantFlowers = () => {
  const layer = useRef<HTMLDivElement>(null);
  const nextId = useRef(0);
  const [flowers, setFlowers] = useState<Planted[]>([]);

  useEffect(() => {
    const hero = layer.current?.parentElement;
    if (!hero || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;

    const onClick = (e: MouseEvent) => {
      // Mouse on a wide screen only, and never on a link, button or control.
      if (!window.matchMedia("(hover: hover) and (min-width: 768px)").matches)
        return;
      if (
        (e.target as Element).closest(
          "a, button, input, summary, details, label",
        )
      )
        return;
      const rect = hero.getBoundingClientRect();
      // Random values are rolled here, in the event handler, never at render.
      const flower: Planted = {
        id: nextId.current++,
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        flower: FLOWERS[Math.floor(Math.random() * FLOWERS.length)],
        size: between(36, 60),
        rotate: between(-25, 25),
      };
      setFlowers((prev) => [...prev, flower].slice(-MAX));
    };

    hero.addEventListener("click", onClick);
    return () => hero.removeEventListener("click", onClick);
  }, []);

  return (
    <div
      ref={layer}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {flowers.map((f) => (
        <Image
          key={f.id}
          src={`/flower-blossom-${f.flower}.webp`}
          alt=""
          width={120}
          height={120}
          onAnimationEnd={() =>
            setFlowers((prev) => prev.filter((p) => p.id !== f.id))
          }
          className="animate-plant absolute"
          style={
            {
              left: f.x,
              top: f.y,
              width: f.size,
              "--plant-rotate": `${f.rotate}deg`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
};

export default PlantFlowers;
