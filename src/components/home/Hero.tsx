import Image from "next/image";
import Link from "next/link";
import Countdown from "./Countdown";

const Hero = () => {
  return (
    <section className="bg-rosehack-darkgreen/85 text-rosehack-cream relative flex min-h-[calc(100svh-4.5rem)] flex-col items-center justify-center gap-6 overflow-hidden px-6 pt-16 pb-32 text-center">
      <Image src="/logo.webp" alt="RoseHack logo" width={120} height={120} />
      <h1 className="text-5xl font-bold md:text-7xl">RoseHack &rsquo;27</h1>
      <p className="max-w-xl text-lg font-light md:text-xl">
        UC Riverside&rsquo;s 24-hour women-centric hackathon — and the largest
        in the Inland Empire.
      </p>
      <p className="font-semibold uppercase">
        January 30–31, 2027 · Winston Chung Hall
      </p>
      <Countdown />
      <div className="relative z-10 flex flex-col gap-4 sm:flex-row">
        <Link
          href="#apply"
          className="bg-rosehack-yellow text-rosehack-darkgreen rounded-full px-10 py-3 font-semibold uppercase hover:brightness-95"
        >
          Apply Now
        </Link>
        {/* TODO: Discord invite link */}
        <Link
          href="#"
          className="border-rosehack-cream hover:bg-rosehack-cream/10 rounded-full border-2 px-8 py-3 font-semibold uppercase"
        >
          Join the Discord
        </Link>
      </div>
      <p className="relative z-10 text-sm">
        Free to attend · Open to all · No experience required
      </p>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-between">
        {Array.from({ length: 10 }).map((_, i) => (
          <Image
            key={i}
            src="/grass.webp"
            alt=""
            width={120}
            height={120}
            className="animate-sway origin-bottom"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
