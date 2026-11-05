import Image from "next/image";
import Link from "next/link";
import Countdown from "./Countdown";
import Flowers from "@/components/scenery/Flowers";
import Grass from "@/components/scenery/Grass";
import { heroFlowers } from "@/components/scenery/flowerLayouts";

const Hero = () => {
  return (
    <section className="bg-rosehack-darkgreen/85 text-rosehack-cream relative flex min-h-[calc(100svh-4.5rem)] flex-col items-center justify-center gap-6 overflow-hidden px-6 pt-20 pb-48 text-center md:pb-64">
      <Flowers flowers={heroFlowers} />

      <Image src="/logo.webp" alt="RoseHack logo" width={120} height={120} />
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
      <Countdown />
      <div className="relative z-10 mt-2 flex flex-col gap-4 sm:flex-row">
        <Link
          href="https://athena-wheat.vercel.app/rosehack/forms/participant"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-rosehack-yellow text-rosehack-darkgreen rounded-full px-11 py-4 font-semibold uppercase hover:brightness-95"
        >
          Apply Now
        </Link>
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

      <Grass />
    </section>
  );
};

export default Hero;
