import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Flowers from "@/components/scenery/Flowers";
import Grass from "@/components/scenery/Grass";
import { sponsorsFlowers } from "@/components/scenery/flowerLayouts";

// Swap these out for real sponsors as they sign on, e.g.
// { name: "Acme", logo: "/sponsors/acme.webp", href: "https://acme.com" }
const sponsors: { name: string; logo: string; href: string }[] = [];
const SLOTS = 4;

const Sponsors = () => {
  const emptySlots = Math.max(SLOTS - sponsors.length, 0);

  return (
    <section className="bg-rosehack-darkgreen text-rosehack-cream relative flex min-h-[calc(100svh-4.5rem)] flex-col items-center gap-6 overflow-hidden px-6 pt-20 pb-48 text-center md:pb-64">
      <Flowers flowers={sponsorsFlowers} />

      <p className="bg-rosehack-yellow text-rosehack-darkgreen rounded-full px-12 py-2 text-xs font-semibold uppercase">
        Coming soon
      </p>
      <Reveal>
        <h1 className="text-5xl font-bold md:text-6xl">Sponsors</h1>
      </Reveal>
      <Reveal index={1}>
        <p className="max-w-lg text-lg font-light">
          We&rsquo;re building this year&rsquo;s sponsor lineup now. Sponsoring
          RoseHack puts your name in front of hundreds of students at the very
          start of their careers — and directly supports students
          underrepresented in tech.
        </p>
      </Reveal>

      <div className="relative z-10 mt-6 grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
        {sponsors.map(({ name, logo, href }, i) => (
          <Reveal key={name} index={i}>
            <Link
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
          </Reveal>
        ))}
        {Array.from({ length: emptySlots }).map((_, i) => (
          <Reveal key={i} index={sponsors.length + i}>
            <div className="border-rosehack-cream/70 flex h-24 items-center justify-center rounded-lg border-2 border-dashed text-xs uppercase">
              Your logo here
            </div>
          </Reveal>
        ))}
      </div>

      <Link
        href="mailto:ucr.rosehack@gmail.com?subject=Sponsoring%20RoseHack%20'27"
        className="bg-rosehack-yellow text-rosehack-darkgreen relative z-10 mt-4 rounded-full px-12 py-4 font-semibold uppercase transition duration-200 hover:brightness-95"
      >
        Become a sponsor
      </Link>

      <Grass />
    </section>
  );
};

export default Sponsors;
