import type { CSSProperties } from "react";

// A circular progress ring under the countdown with a rosebud in the middle.
// The ring fills and the bud opens as the event gets closer: empty and closed
// 120 days out, full and in bloom on January 30. `open` is 0-1, or null before
// the countdown has mounted (rendered empty and closed, so the server and the
// first client render match).

type Props = { open: number | null };

const RADIUS = 34;

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
        viewBox="0 0 80 80"
        className="size-20"
        role="img"
        aria-label={label}
      >
        {/* Track and progress ring. pathLength=100 makes the dash a percent. */}
        <circle
          cx={40}
          cy={40}
          r={RADIUS}
          fill="none"
          strokeWidth={5}
          className="stroke-rosehack-cream/25"
        />
        <circle
          cx={40}
          cy={40}
          r={RADIUS}
          fill="none"
          strokeWidth={5}
          strokeLinecap="round"
          pathLength={100}
          strokeDasharray={100}
          strokeDashoffset={100 - amount * 100}
          transform="rotate(-90 40 40)"
          className="stroke-rosehack-pink transition-[stroke-dashoffset] duration-[1200ms] ease-out"
        />

        {/* The bud, centred in the ring. Petals pivot on their own base. */}
        <g transform="translate(40 40) scale(0.85) translate(-32 -40)">
          {petals.map(({ angle, fill, scale }, i) => (
            <path
              key={i}
              d="M32 54 C23 48 23 31 32 22 C41 31 41 48 32 54 Z"
              className={`${fill} stroke-rosehack-pink transition-transform duration-[1200ms] ease-out`}
              strokeWidth={1}
              style={
                {
                  transformBox: "fill-box",
                  transformOrigin: "50% 100%",
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
        </g>
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
