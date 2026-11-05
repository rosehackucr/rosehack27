import Image from "next/image";

// "tall" sits under the dark-green sections (home, theme, sponsors).
// "short" sits under the light card pages (judges, speakers).
const sizes = {
  tall: { back: "h-28 md:h-48", front: "h-36 md:h-52" },
  short: { back: "left-0 h-28 md:h-40", front: "left-0 h-32 md:h-44" },
};

type Props = { size?: keyof typeof sizes };

// Two grass layers pinned to the bottom of a `relative` parent: a swaying
// back band and a static front border.
const Grass = ({ size = "tall" }: Props) => {
  const { back, front } = sizes[size];
  return (
    <>
      <Image
        src="/grass-band-1440.webp"
        alt=""
        width={1440}
        height={120}
        className={`animate-sway pointer-events-none absolute bottom-0 w-full origin-bottom object-cover object-bottom ${back}`}
      />
      <Image
        src="/grass-meadow-border-1440.webp"
        alt=""
        width={1440}
        height={150}
        className={`pointer-events-none absolute bottom-0 w-full object-cover object-bottom ${front}`}
      />
    </>
  );
};

export default Grass;
