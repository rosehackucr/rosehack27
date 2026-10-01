import Image from "next/image";
import Link from "next/link";
import Countdown from "./Countdown";

const flowers = [
  // top left
  { src: "cream", className: "-top-2 left-3 w-7" },
  { src: "cream", className: "-top-3 left-8 w-16" },
  { src: "pink-lg", className: "-top-1 left-30 w-16 hidden md:block" },
  { src: "pink-md", className: "top-17 left-36 w-14 hidden md:block" },
  // top right
  { src: "cream", className: "-top-3 right-6 w-14" },
  { src: "pink-md", className: "-top-3 right-20 w-12" },
  { src: "cream", className: "top-9 right-6 w-13" },
  { src: "pink-lg", className: "top-3 right-34 w-14 hidden md:block" },
  { src: "cream", className: "top-21 right-24 w-7 hidden md:block" },
  { src: "cream", className: "top-21 right-36 w-7 hidden md:block" },
];

const Hero = () => {
  return (
    <section className="bg-rosehack-darkgreen/85 text-rosehack-cream relative flex min-h-[calc(100svh-4.5rem)] flex-col items-center justify-center gap-6 overflow-hidden px-6 pt-20 pb-48 text-center md:pb-64">
      {flowers.map(({ src, className }, i) => (
        <Image
          key={i}
          src={`/flower-blossom-${src}.webp`}
          alt=""
          width={120}
          height={120}
          className={`pointer-events-none absolute ${className}`}
        />
      ))}

      <Image src="/logo.webp" alt="RoseHack logo" width={120} height={120} />
      <h1 className="text-5xl font-bold md:text-7xl">RoseHack &rsquo;27</h1>
      <p className="max-w-lg text-lg font-light md:text-xl">
        UC Riverside&rsquo;s 24-hour women-centric hackathon — and the largest
        in the Inland Empire.
      </p>
      <p className="font-semibold uppercase">
        January 30–31, 2027 · Winston Chung Hall
      </p>
      <Countdown />
      <div className="relative z-10 mt-2 flex flex-col gap-4 sm:flex-row">
        <Link
          href="#apply"
          className="bg-rosehack-yellow text-rosehack-darkgreen rounded-full px-11 py-4 font-semibold uppercase hover:brightness-95"
        >
          Apply Now
        </Link>
        {/* TODO: Discord invite link */}
        <Link
          target="_blank"
          href="https://discord.gg/Md27WDfEZF"
          className="border-rosehack-cream hover:bg-rosehack-cream/10 rounded-full border-2 px-9 py-4 font-semibold uppercase"
        >
          Join the Discord
        </Link>
      </div>
      <p className="relative z-10 text-sm">
        Free to attend · Open to all · No experience required
      </p>

      <Image
        src="/grass-band-1440.webp"
        alt=""
        width={1440}
        height={120}
        className="animate-sway pointer-events-none absolute bottom-0 h-28 w-full origin-bottom object-cover object-bottom md:h-48"
      />
      <Image
        src="/grass-meadow-border-1440.webp"
        alt=""
        width={1440}
        height={150}
        className="pointer-events-none absolute bottom-0 h-36 w-full object-cover object-bottom md:h-52"
      />
    </section>
  );
};

export default Hero;
