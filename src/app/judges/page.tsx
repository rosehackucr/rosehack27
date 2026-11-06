import Reveal from "@/components/Reveal";
import JudgeCard from "@/components/judges/JudgeCard";
import { judges } from "@/data/judges";
import Flowers from "@/components/scenery/Flowers";
import Grass from "@/components/scenery/Grass";
import { cardPageFlowers } from "@/components/scenery/flowerLayouts";

const PLACEHOLDER_COUNT = 6;

const Judges = () => {
  return (
    <section className="relative flex min-h-[calc(100svh-4.5rem)] flex-col items-center overflow-hidden bg-linear-to-b from-[#f1f1ee] to-[#e8eae5] px-6 pt-20 pb-36 text-center md:pb-44">
      <Flowers flowers={cardPageFlowers} className="z-10" />

      <span className="bg-rosehack-yellow rounded-full px-16 py-3 text-xs font-bold uppercase">
        Coming Soon
      </span>
      <Reveal>
        <h1 className="font-cormorant text-rosehack-purple mt-6 text-6xl md:text-7xl">
          Judges
        </h1>
      </Reveal>
      <Reveal index={1}>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed font-light">
          Our judges spend Sunday afternoon with the teams, hear what they built
          and why, and score every project against a shared rubric. The panel is
          announced this winter.
        </p>
      </Reveal>

      <div className="mt-10 grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {judges.length > 0
          ? judges.map((judge, i) => (
              <Reveal key={judge.name} index={i}>
                <JudgeCard judge={judge} />
              </Reveal>
            ))
          : Array.from({ length: PLACEHOLDER_COUNT }, (_, i) => (
              <Reveal key={i} index={i}>
                <JudgeCard />
              </Reveal>
            ))}
      </div>

      <p className="relative z-20 mt-12 text-lg">
        Know someone who should be on this page?
      </p>
      <a
        href="https://athena-wheat.vercel.app/rosehack/forms/judge"
        target="_blank"
        rel="noopener noreferrer"
        className="border-rosehack-darkgreen hover:bg-rosehack-darkgreen/10 relative z-20 mt-4 rounded-full border-2 px-16 py-4 font-semibold uppercase"
      >
        Judge at RoseHack &rsquo;27
      </a>

      <Grass size="short" />
    </section>
  );
};

export default Judges;
