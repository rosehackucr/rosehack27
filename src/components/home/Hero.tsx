import LogoDraw from "./LogoDraw";
import Link from "next/link";
import Countdown from "./Countdown";
import PlantFlowers from "./PlantFlowers";
import EventLinks from "./EventLinks";
import Flowers from "@/components/scenery/Flowers";
import Grass from "@/components/scenery/Grass";
import { heroFlowers } from "@/components/scenery/flowerLayouts";

const Hero = () => {
  return (
    <section className="bg-rosehack-darkgreen/85 text-rosehack-cream relative flex min-h-[calc(100svh-4.5rem)] flex-col items-center justify-center gap-6 overflow-hidden px-6 pt-20 pb-48 text-center md:pb-64">
      <Flowers flowers={heroFlowers} />
      <PlantFlowers />

      <LogoDraw />
      <p className="-mt-3 text-xs font-semibold tracking-widest uppercase md:text-sm">
        Presented by WINC
      </p>
      <h1 className="text-5xl font-bold md:text-7xl">RoseHack &rsquo;27</h1>
      <p className="max-w-lg text-lg font-light md:text-xl">
        UC Riverside&rsquo;s 24-hour women-centric hackathon — and the largest
        in the Inland Empire.
      </p>
      <p className="font-semibold uppercase">
        January 30–31, 2027 · Winston Chung Hall
      </p>
      <EventLinks />
      <Countdown />
      <div className="relative z-10 mt-2 flex flex-col gap-4 sm:flex-row">
        <Link
          href="https://athena-wheat.vercel.app/rosehack/forms/participant"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-rosehack-yellow text-rosehack-darkgreen relative rounded-full px-11 py-4 font-semibold uppercase transition duration-200 hover:brightness-95"
        >
          Apply Now
          {/* Sprout from public/leaf-sprout.svg, unfurling from its stem base
              (bottom-left) at the button's corner on hover or focus. */}
          <svg
            viewBox="0 0 64 64"
            aria-hidden="true"
            className="text-rosehack-lightgreen pointer-events-none absolute -top-5 -right-3 size-8 origin-[16%_88%] [transform:scale(0)] transition-transform duration-200 ease-out group-hover:[transform:scale(1)] group-focus-visible:[transform:scale(1)]"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth={5}
              strokeLinecap="round"
              d="M10 56 C20 51 26 45 30 38"
            />
            <path
              fill="currentColor"
              d="M30 38 C34 12 54 3 58 4 C62 5 57 28 44 39 C37 45 31 44 30 38 Z"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeOpacity={0.3}
              strokeWidth={3}
              strokeLinecap="round"
              d="M36 35 C43 25 50 17 55 12"
            />
          </svg>
        </Link>
        <Link
          target="_blank"
          href="https://discord.gg/Md27WDfEZF"
          className="border-rosehack-cream hover:bg-rosehack-cream/10 rounded-full border-2 px-9 py-4 font-semibold uppercase transition duration-200"
        >
          Join the Discord
        </Link>
      </div>
      <p className="relative z-10 text-sm">
        Free to attend · Open to all · No experience required
      </p>

      <Grass />
    </section>
  );
};

export default Hero;
