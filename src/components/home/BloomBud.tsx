import type { CSSProperties } from "react";

// A rosebud beside the countdown that opens as the event gets closer:
// closed 120 days out, in full bloom on January 30. `open` is 0-1, or null
// before the countdown has mounted (rendered closed, so the server and the
// first client render match).

type Props = { open: number | null };

// Petal base, where every petal pivots.
const BASE = "32px 54px";

// Each petal's tilt when fully open; outer petals open furthest. The cream
// inner petal is drawn first, so a closed bud shows pink.
const petals = [
  { angle: 0, fill: "fill-rosehack-cream", scale: 0.9 },
  { angle: -62, fill: "fill-rosehack-pink", scale: 1 },
  { angle: 62, fill: "fill-rosehack-pink", scale: 1 },
  { angle: -30, fill: "fill-rosehack-pink", scale: 1.08 },
  { angle: 30, fill: "fill-rosehack-pink", scale: 1.08 },
];

const BloomBud = ({ open }: Props) => {
  const amount = open ?? 0;
  const pct = Math.round(amount * 100);
  const label =
    open === null
      ? "A rosebud"
      : pct >= 100
        ? "The rose is in full bloom"
        : `The rose is ${pct}% open. It blooms on January 30.`;

  return (
    <figure className="flex flex-col items-center">
      <svg
        viewBox="0 0 64 96"
        className="h-24 w-16"
        role="img"
        aria-label={label}
      >
        <path
          d="M32 94 C32 82 31 68 32 54"
          className="stroke-rosehack-lightgreen"
          strokeWidth={3}
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M32 80 C24 80 18 74 16 68 C24 67 30 72 32 80 Z"
          className="fill-rosehack-lightgreen"
        />
        <path
          d="M32 72 C40 72 46 66 48 60 C40 59 34 64 32 72 Z"
          className="fill-rosehack-lightgreen"
        />
        {petals.map(({ angle, fill, scale }, i) => (
          <path
            key={i}
            d="M32 54 C23 48 23 31 32 22 C41 31 41 48 32 54 Z"
            className={`${fill} stroke-rosehack-pink transition-transform duration-[1200ms] ease-out`}
            strokeWidth={1}
            style={
              {
                transformBox: "view-box",
                transformOrigin: BASE,
                transform: `rotate(${angle * amount}deg) scale(${1 + (scale - 1) * amount})`,
              } as CSSProperties
            }
          />
        ))}
        {/* The heart only shows once it's mostly open. */}
        <circle
          cx={32}
          cy={44}
          r={4}
          className="fill-rosehack-yellow transition-opacity duration-[1200ms]"
          style={{ opacity: Math.max(0, amount - 0.5) * 2 }}
        />
      </svg>
      <figcaption
        className="mt-1 text-xs font-semibold uppercase"
        aria-hidden="true"
      >
        {open === null
          ? "--%"
          : pct >= 100
            ? "In full bloom"
            : `${pct}% in bloom`}
      </figcaption>
    </figure>
  );
};

export default BloomBud;
