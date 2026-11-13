import Reveal from "@/components/Reveal";
import SpeakerCard from "@/components/speakers/SpeakerCard";
import { speakers } from "@/data/speakers";
import Flowers from "@/components/scenery/Flowers";
import Grass from "@/components/scenery/Grass";
import { cardPageFlowers } from "@/components/scenery/flowerLayouts";

const PLACEHOLDER_COUNT = 6;

const Speakers = () => {
  return (
    <main className="relative flex min-h-[calc(100svh-4.5rem)] flex-col items-center overflow-hidden bg-linear-to-b from-[#f1f1ee] to-[#e8eae5] px-6 pt-20 pb-36 text-center md:pb-44">
      <Flowers flowers={cardPageFlowers} className="z-10 h-auto" />

      <Reveal>
        <h1 className="font-cormorant text-rosehack-purple mt-6 text-6xl md:text-7xl">
          Speakers
        </h1>
      </Reveal>

      <Reveal index={1}>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed font-light">
          Engineers, founders and researchers join us across the weekend to run
          workshops, judge projects and talk about the paths that got them here.
          The lineup is announced this winter.
        </p>
      </Reveal>

      <div
        className={`mt-10 grid w-full gap-6 ${
          speakers.length === 1
            ? "max-w-sm grid-cols-1"
            : speakers.length === 2
              ? "max-w-2xl grid-cols-1 sm:grid-cols-2"
              : "max-w-5xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {speakers.length > 0
          ? speakers.map((speaker, i) => (
              <Reveal key={speaker.name} index={i}>
                <SpeakerCard speaker={speaker} />
              </Reveal>
            ))
          : Array.from({ length: PLACEHOLDER_COUNT }, (_, i) => (
              <Reveal key={i} index={i}>
                <SpeakerCard />
              </Reveal>
            ))}
      </div>

      <p className="relative z-20 mt-12 text-lg">
        Know someone who should be on this page?
      </p>

      <div className="relative z-20 mt-4 max-w-full text-center">
        <a
          href="https://athena-wheat.vercel.app/rosehack/forms/speaker"
          target="_blank"
          rel="noopener noreferrer"
          className="group focus-visible:ring-rosehack-darkgreen/30 inline-block max-w-full rounded-full focus-visible:ring-4 focus-visible:outline-none"
          aria-label="Apply to speak at RoseHack 2027"
        >
          <span className="border-rosehack-darkgreen group-hover:bg-rosehack-darkgreen block rounded-full border-2 px-6 py-4 text-sm font-semibold uppercase transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-[1.03] group-hover:text-white group-hover:shadow-lg group-active:scale-[0.98] motion-reduce:transform-none sm:px-16 sm:text-base">
            Speak at RoseHack &rsquo;27
          </span>
        </a>

        <p className="mt-3 text-sm">Click above to apply!</p>
      </div>

      <Grass size="short" />
    </main>
  );
};

export default Speakers;
