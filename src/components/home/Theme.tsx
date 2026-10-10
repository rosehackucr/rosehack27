import Image from "next/image";
import Link from "next/link";

const Theme = () => {
  return (
    <section
      id="theme"
      className="bg-rosehack-darkgreen/85 text-rosehack-cream relative flex flex-col items-center gap-6 overflow-hidden px-6 pt-24 pb-52 text-center md:pt-32 md:pb-72"
    >
      <p className="text-rosehack-yellow text-xs font-semibold tracking-widest uppercase md:text-sm">
        This year&rsquo;s challenge
      </p>
      <h2 className="text-4xl font-bold md:text-7xl">Bridges, Not Barriers</h2>
      <p className="max-w-3xl text-lg leading-relaxed font-light md:text-xl md:leading-loose">
        Build technology that connects people to resources, opportunities, or
        communities they&rsquo;ve been locked out of. Education access,
        healthcare navigation, language barriers, financial literacy &mdash;
        anywhere there&rsquo;s a gap between a community and something they
        need.
      </p>
      <Link
        href="/tracks"
        className="bg-rosehack-yellow text-rosehack-darkgreen relative z-10 mt-4 rounded-full px-11 py-4 font-semibold uppercase hover:brightness-95"
      >
        See the ten tracks
      </Link>

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

export default Theme;
