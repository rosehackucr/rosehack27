import Image from "next/image";
import Link from "next/link";

const flowers = [
  // top left
  { src: "pink-md", className: "top-6 left-2 w-12" },
  { src: "pink-sm", className: "top-14 left-14 w-9" },
  { src: "cream", className: "top-24 -left-3 w-14" },
  { src: "pink-md", className: "top-28 left-36 w-12 hidden md:block" },
  // top right
  { src: "cream", className: "top-2 right-28 w-11 hidden md:block" },
  { src: "pink-sm", className: "top-28 right-36 w-8 hidden md:block" },
  { src: "pink-md", className: "top-24 right-10 w-12" },
  { src: "pink-lg", className: "top-24 -right-2 w-14" },
];

// Swap these out for real sponsors as they sign on, e.g.
// { name: "Acme", logo: "/sponsors/acme.webp", href: "https://acme.com" }
const sponsors: { name: string; logo: string; href: string }[] = [];
const SLOTS = 4;

const Sponsors = () => {
  const emptySlots = Math.max(SLOTS - sponsors.length, 0);

  return (
    <section className="bg-rosehack-darkgreen/85 text-rosehack-cream relative flex min-h-[calc(100svh-4.5rem)] flex-col items-center gap-6 overflow-hidden px-6 pt-20 pb-48 text-center md:pb-64">
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

      <p className="bg-rosehack-yellow text-rosehack-darkgreen rounded-full px-12 py-2 text-xs font-semibold uppercase">
        Coming soon
      </p>
      <h1 className="text-5xl font-bold md:text-6xl">Sponsors</h1>
      <p className="max-w-lg text-lg font-light">
        We&rsquo;re building this year&rsquo;s sponsor lineup now. Sponsoring
        RoseHack puts your name in front of hundreds of students at the very
        start of their careers — and directly supports students underrepresented
        in tech.
      </p>

      <div className="relative z-10 mt-6 grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
        {sponsors.map(({ name, logo, href }) => (
          <Link
            key={name}
            href={href}
            target="_blank"
            className="bg-rosehack-cream flex h-24 items-center justify-center rounded-lg p-4"
          >
            <Image
              src={logo}
              alt={name}
              width={160}
              height={64}
              className="max-h-full w-auto object-contain"
            />
          </Link>
        ))}
        {Array.from({ length: emptySlots }).map((_, i) => (
          <div
            key={i}
            className="border-rosehack-cream/70 flex h-24 items-center justify-center rounded-lg border-2 border-dashed text-xs uppercase"
          >
            Your logo here
          </div>
        ))}
      </div>

      <Link
        href="mailto:ucr.rosehack@gmail.com?subject=Sponsoring%20RoseHack%20'27"
        className="bg-rosehack-yellow text-rosehack-darkgreen relative z-10 mt-4 rounded-full px-12 py-4 font-semibold uppercase hover:brightness-95"
      >
        Become a sponsor
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

export default Sponsors;