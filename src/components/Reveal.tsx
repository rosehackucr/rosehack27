"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  // Position in a list, for staggering. Capped so the last card isn't late.
  index?: number;
  // Turn the slight rotation off for full-width sections.
  tilt?: boolean;
  as?: "div" | "li";
  className?: string;
};

// "static": never hidden. Server render, reduced motion, or already on screen
//           at mount, so nothing ever flashes invisible.
// "hidden": below the fold, waiting for the observer.
// "shown":  transitioning to its resting place.
type State = "static" | "hidden" | "shown";

// Fades a card up into place the first time it scrolls into view. The motion
// is on this wrapper, never the child, so a child's resting rotate-* survives.
const Reveal = ({
  children,
  index = 0,
  tilt = true,
  as: Tag = "div",
  className,
}: Props) => {
  const ref = useRef<HTMLDivElement & HTMLLIElement>(null);
  const [state, setState] = useState<State>("static");

  useEffect(() => {
    const el = ref.current;
    if (
      !el ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      // Already on screen (or scrolled past): leave it visible.
      el.getBoundingClientRect().top < window.innerHeight
    ) {
      return;
    }

    setState("hidden");
    const observer = new IntersectionObserver(
      ([entry]) => {
        const tallerThanView =
          entry.boundingClientRect.height > (entry.rootBounds?.height ?? 0);
        if (
          entry.isIntersecting &&
          (entry.intersectionRatio >= 0.15 || tallerThanView)
        ) {
          setState("shown");
          observer.disconnect();
        }
      },
      { threshold: [0, 0.15], rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const motion = {
    static: "",
    hidden: tilt
      ? "opacity-0 [transform:translateY(10px)_rotate(-1deg)]"
      : "opacity-0 [transform:translateY(10px)]",
    shown:
      "transition-[opacity,transform] duration-600 ease-[cubic-bezier(0.22,1,0.36,1)]",
  }[state];

  return (
    <Tag
      ref={ref}
      data-reveal={state === "static" ? undefined : state}
      className={[className, motion].filter(Boolean).join(" ") || undefined}
      style={
        state === "shown"
          ? { transitionDelay: `${Math.min(index * 60, 240)}ms` }
          : undefined
      }
    >
      {children}
    </Tag>
  );
};

export default Reveal;
