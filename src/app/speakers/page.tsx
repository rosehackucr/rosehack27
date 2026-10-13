import Image from "next/image";
import SpeakerCard from "@/components/speakers/SpeakerCard";
import { speakers } from "@/data/speakers";

const PLACEHOLDER_COUNT = 6;

const flowers = [
  // top
  { src: "flower-leaf", className: "top-1 left-[1%] w-12 rotate-12" },
  { src: "flower-blossom-cream", className: "top-10 left-[4%] w-9" },
  { src: "flower-leaf-pair", className: "-top-2 left-[10%] w-14 -rotate-12" },
  { src: "flower-blossom-pink-lg", className: "-top-3 left-[13%] w-20" },
  { src: "flower-blossom-cream", className: "-top-1 left-[21%] w-12" },
  { src: "flower-leaf", className: "top-16 left-[26%] w-9 -rotate-45" },
  {
    src: "flower-blossom-6petal",
    className: "top-4 left-[30%] w-16 hidden md:block",
  },
  {
    src: "flower-blossom-pink-sm",
    className: "top-6 left-[39%] w-8 hidden md:block",
  },
  {
    src: "flower-leaf-pair",
    className: "-top-1 left-[46%] w-12 rotate-6 hidden md:block",
  },
  {
    src: "flower-blossom-pink-lg",
    className: "-top-3 left-[50%] w-16 hidden md:block",
  },
  {
    src: "flower-blossom-cream",
    className: "top-2 right-[34%] w-10 hidden md:block",
  },
  {
    src: "flower-blossom-pink-sm",
    className: "top-12 right-[28%] w-10 hidden md:block",
  },
  {
    src: "flower-leaf",
    className: "top-3 right-[20%] w-11 rotate-[-30deg] hidden md:block",
  },
  { src: "flower-blossom-6petal", className: "top-14 right-[15%] w-10" },
  { src: "flower-blossom-cream", className: "-top-2 right-[9%] w-11" },
  { src: "flower-leaf-pair", className: "top-12 right-[5%] w-12 rotate-45" },
  { src: "flower-blossom-pink-md", className: "top-2 right-[1%] w-14" },

  // bottom
  { src: "flower-blossom-pink-lg", className: "bottom-14 left-[2%] w-20" },
  {
    src: "flower-blossom-cream",
    className: "bottom-4 left-[14%] w-10 hidden md:block",
  },
  { src: "flower-blossom-pink-md", className: "bottom-6 left-[27%] w-12" },
  {
    src: "flower-blossom-pink-sm",
    className: "bottom-12 right-[28%] w-10 hidden md:block",
  },
  { src: "flower-blossom-pink-md", className: "bottom-4 right-[20%] w-14" },
  { src: "flower-blossom-cream", className: "bottom-2 right-[6%] w-10" },
];

const Speakers = () => {
  return (
    <main className="relative flex min-h-[calc(100svh-4.5rem)] flex-col items-center overflow-hidden bg-linear-to-b from-[#f1f1ee] to-[#e8eae5] px-6 pt-20 pb-36 text-center md:pb-44">
      {flowers.map(({ src, className }, i) => (
        <Image
          key={i}
          src={`/${src}.webp`}
          alt=""
          width={120}
          height={120}
          className={`pointer-events-none absolute z-10 h-auto ${className}`}
        />
      ))}

      <span className="bg-rosehack-yellow relative z-20 rounded-full px-16 py-3 text-xs font-bold uppercase">
        Coming Soon
      </span>

      <h1 className="font-cormorant text-rosehack-purple mt-6 text-6xl md:text-7xl">
        Speakers
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-relaxed font-light">
        Engineers, founders and researchers join us across the weekend to run
        workshops, judge projects and talk about the paths that got them here.
        The lineup is announced this winter.
      </p>

      <div className="mt-10 grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {speakers.length > 0
          ? speakers.map((speaker) => (
              <SpeakerCard key={speaker.name} speaker={speaker} />
            ))
          : Array.from({ length: PLACEHOLDER_COUNT }, (_, i) => (
              <SpeakerCard key={i} />
            ))}
      </div>

      <p className="relative z-20 mt-12 text-lg">
        Know someone who should be on this page?
      </p>

      {/* TODO: link to the speaker interest form once it exists */}
      <div className="relative z-20 mt-4 max-w-full">
        <p className="border-rosehack-darkgreen rounded-full border-2 px-6 py-4 text-sm font-semibold uppercase sm:px-16 sm:text-base">
          Speak at RoseHack &rsquo;27
        </p>
        <p className="mt-3 text-sm">Speaker applications are not open yet.</p>
      </div>

      <Image
        src="/grass-band-1440.webp"
        alt=""
        width={1440}
        height={120}
        className="motion-safe:animate-sway pointer-events-none absolute bottom-0 left-0 h-28 w-full origin-bottom object-cover object-bottom md:h-40"
      />

      <Image
        src="/grass-meadow-border-1440.webp"
        alt=""
        width={1440}
        height={150}
        className="pointer-events-none absolute bottom-0 left-0 h-32 w-full object-cover object-bottom md:h-44"
      />
    </main>
  );
};

export default Speakers;
