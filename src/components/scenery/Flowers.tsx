import Image from "next/image";
import type { Flower } from "./flowerLayouts";

type Props = {
  flowers: Flower[];
  // Extra classes applied to every flower, e.g. a z-index.
  className?: string;
};

// Decorative flowers absolutely positioned inside a `relative` parent.
const Flowers = ({ flowers, className }: Props) => (
  <>
    {flowers.map(({ src, className: position }, i) => (
      <Image
        key={i}
        src={`/${src}.webp`}
        alt=""
        width={120}
        height={120}
        className={["pointer-events-none absolute", className, position]
          .filter(Boolean)
          .join(" ")}
      />
    ))}
  </>
);

export default Flowers;
