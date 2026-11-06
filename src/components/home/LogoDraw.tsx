import Image from "next/image";

// The hero logo, drawn in on first paint: circuit, stem, leaves, bud, then the
// ring closes. The lines are traced from logo.webp in its own pixel space
// (viewBox 0 0 267 266), so they sit exactly on the real image, which then
// fades in underneath while the drawn lines fade out. The resting state is
// logo.webp itself. About a second, CSS only.

// Strokes use pathLength="1" and stroke-dasharray: 1; each group animates
// stroke-dashoffset from 1 to 0 after its delay.
const draw = "animate-draw [stroke-dasharray:1]";
// Dots and thorns have no length to draw, so they pop in from their centre.
const pop = "animate-pop origin-center [transform-box:fill-box]";

const circuitDots = [
  [124.5, 225.5],
  [100.7, 195],
  [115, 208],
  [133, 197],
  [163, 204],
  [155.5, 215.7],
  [173.5, 225.5],
  [78.5, 213],
  [186.5, 212.5],
];
const stemDots = [
  [126.7, 158.5],
  [134, 186],
];
const ringDots = [
  [64, 36],
  [201, 36],
  [57, 81],
  [208, 81],
];

const Dots = ({ at, delay }: { at: number[][]; delay: string }) => (
  <>
    {at.map(([cx, cy]) => (
      <circle
        key={`${cx}-${cy}`}
        cx={cx}
        cy={cy}
        r={3.4}
        className={`${pop} ${delay}`}
      />
    ))}
  </>
);

const LogoDraw = () => (
  <div className="relative">
    <Image
      src="/logo.webp"
      alt="RoseHack logo"
      width={120}
      height={120}
      className="animate-fade-in block [animation-delay:650ms]"
    />
    <svg
      viewBox="0 0 267 266"
      fill="none"
      stroke="currentColor"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="text-rosehack-cream animate-fade-out absolute inset-0 size-full [animation-delay:850ms]"
    >
      <g className={`${draw}`}>
        <path pathLength={1} d="M133.5 169.5 H125 V225.5" />
        <path pathLength={1} d="M100.7 195 H92.5 V243" />
        <path pathLength={1} d="M115 208 V217.5 H92.5" />
        <path pathLength={1} d="M133 197 V251" />
        <path pathLength={1} d="M133 204 H163" />
        <path pathLength={1} d="M155.5 215.7 V248.8" />
        <path pathLength={1} d="M173.5 225.5 H165.7 V246.3" />
        <path pathLength={1} d="M78.5 213 V219 H52" />
        <path pathLength={1} d="M186.5 212.5 V218.5 H214" />
      </g>
      <g className={`${draw} [animation-delay:120ms]`}>
        <path pathLength={1} d="M126.7 156 V108" />
        <path pathLength={1} d="M134 183 V108" />
      </g>
      <g className={`${draw} [animation-delay:240ms]`}>
        <path
          pathLength={1}
          d="M77.5 139 H106 C110.5 139 113.5 142 113.5 146.5 V159.5 H85 C80.5 159.5 77.5 155.5 77.5 151 Z"
        />
        <path pathLength={1} d="M84 143 L107 155.5" />
        <path
          pathLength={1}
          d="M184 166.5 V179.5 C184 184 180.5 187 176 187 H147 V174 C147 169.5 150.5 166.5 155 166.5 Z"
        />
        <path pathLength={1} d="M152 182.5 L179.5 171" />
      </g>
      <g className={`${draw} [animation-delay:360ms]`}>
        <path
          pathLength={1}
          d="M99.3 47 V86 C99.3 100 112 108.3 130.5 108.3 C149 108.3 161.5 100 161.5 86 V45 L144 52.5"
        />
        <path pathLength={1} d="M99.3 48.5 L161.5 72.8" />
        <path pathLength={1} d="M118 52.5 C119 41 142 40 143.5 51.5 L130 59" />
      </g>
      <g className={`${draw} [animation-delay:480ms]`}>
        <path
          pathLength={1}
          d="M132.5 2.5 A129.5 129.5 0 1 1 132.4 2.5"
          strokeWidth={6.5}
        />
        <path pathLength={1} d="M64 36 A119.2 119.2 0 1 0 201 36" />
        <path pathLength={1} d="M26.5 81 H57" />
        <path pathLength={1} d="M238.5 81 H208" />
      </g>

      <g fill="currentColor" stroke="none">
        <path
          d="M110.7 191.6 L123 185.7 V197.6 Z"
          className={`${pop} [animation-delay:200ms]`}
        />
        <path
          d="M80 227 L90.7 220.8 V233.4 Z"
          className={`${pop} [animation-delay:200ms]`}
        />
        <path
          d="M136 140 L148.6 146.4 L136 152.9 Z"
          className={`${pop} [animation-delay:320ms]`}
        />
        <Dots at={circuitDots} delay="[animation-delay:200ms]" />
        <Dots at={stemDots} delay="[animation-delay:320ms]" />
        <Dots at={ringDots} delay="[animation-delay:680ms]" />
      </g>
    </svg>
  </div>
);

export default LogoDraw;
