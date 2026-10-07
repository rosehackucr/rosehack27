import Image from "next/image";

type Card = {
  label: string;
  icon: string;
  title: string;
  description: string;
};

const tracks: Card[] = [
  {
    label: "Track 01",
    icon: "book",
    title: "Education Access",
    description:
      "Build tools that bridge learning gaps and make education more accessible for underserved students. Think tutoring platforms, scholarship finders, study tools for first-gen students, or anything that removes a barrier between a learner and the resources they need.",
  },
  {
    label: "Track 02",
    icon: "heart",
    title: "Healthcare Navigation",
    description:
      "Build tech that helps people find, understand, and access healthcare. Whether it’s navigating insurance, finding affordable care, connecting patients to mental health resources, or making health information more accessible — bridge the gap between people and the care they deserve.",
  },
  {
    label: "Track 03",
    icon: "speech",
    title: "Language & Communication",
    description:
      "Break down language barriers and connect communities across languages and cultures. Translation tools, multilingual resource platforms, communication aids for the hearing or visually impaired, or anything that makes information accessible regardless of the language you speak.",
  },
  {
    label: "Track 04",
    icon: "coin",
    title: "Financial Literacy",
    description:
      "Build tools that help underserved communities manage money, access banking, understand financial systems, or build wealth. Budget trackers, financial education platforms, tools for first-gen college students navigating FAFSA — close the gap between people and financial opportunity.",
  },
  {
    label: "Track 05",
    icon: "leaf",
    title: "Environmental Sustainability",
    description:
      "Build tech that addresses environmental challenges and promotes sustainability. Clean energy tools, waste reduction platforms, climate education apps, sustainable living trackers, or anything that helps communities take action on environmental issues.",
  },
  {
    label: "Track 06",
    icon: "people",
    title: "Community & Social Good",
    description:
      "Build tech that strengthens communities and creates positive social impact. Mutual aid platforms, volunteer coordination tools, civic engagement apps, neighborhood resource hubs — anything that brings people together and makes communities stronger.",
  },
  {
    label: "Track 07",
    icon: "venus",
    title: "Women’s Issues",
    description:
      "Build tech that addresses challenges women face — from safety and reproductive health to workplace equity, childcare access, or gender-based discrimination. Create tools that advocate for, support, and uplift women in their everyday lives.",
  },
  {
    label: "Track 08",
    icon: "spark",
    title: "Open Innovation",
    description:
      "Have an idea that doesn’t fit neatly into the other tracks but still builds a bridge to something? This track is for you. Build anything that connects people to resources, opportunities, or communities they’ve been locked out of.",
  },
];

const awards: Card[] = [
  {
    label: "Special Award",
    icon: "sprout",
    title: "Best First-Time Hack",
    description:
      "Never been to a hackathon before? This one’s for you. This track celebrates first-time hackers and the courage it takes to show up and build something for the first time. All first-timer teams are automatically eligible.",
  },
  {
    label: "Special Award",
    icon: "trophy",
    title: "Best Female Hacker",
    description:
      "Celebrating outstanding women in tech. This track recognizes the top individual female hacker who demonstrates exceptional technical skill, creativity, and impact through their project.",
  },
];

const TrackCard = ({
  card,
  award = false,
}: {
  card: Card;
  award?: boolean;
}) => (
  <li className="flex flex-col bg-[url('/paper-card-md.webp')] bg-[length:100%_100%] bg-no-repeat px-4 pt-4 pb-10 drop-shadow-md">
    <p
      className={`py-2 text-center text-xs font-semibold tracking-wider uppercase ${
        award
          ? "bg-rosehack-yellow text-rosehack-darkgreen"
          : "bg-rosehack-darkgreen/85 text-rosehack-cream"
      }`}
    >
      {card.label}
    </p>
    <div className="flex flex-col gap-3 px-4 pt-6 md:px-5">
      <Image
        src={`/icon-${card.icon}.webp`}
        alt=""
        width={32}
        height={32}
        className="h-8 w-8"
      />
      <h3 className="font-serif text-2xl font-semibold text-[#a98bc4] md:text-3xl">
        {card.title}
      </h3>
      <p className="text-rosehack-darkgreen text-sm leading-relaxed md:text-base">
        {card.description}
      </p>
    </div>
  </li>
);

const TracksSection = () => {
  return (
    <section
      id="tracks"
      className="bg-rosehack-cream bg-[url('/gingham-tile-160.webp')] bg-[length:160px_160px] px-6 py-16 md:py-24"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <header className="bg-rosehack-cream mx-auto flex max-w-2xl flex-col items-center gap-4 rounded-md px-8 py-10 text-center shadow-md">
          <p className="text-rosehack-darkgreen text-xs font-semibold tracking-widest uppercase">
            Pick a gap you care about
          </p>
          <h1 className="font-serif text-5xl font-semibold text-[#a98bc4] md:text-6xl">
            Ten Tracks
          </h1>
          <p className="text-rosehack-darkgreen text-lg">
            Eight build tracks and two special awards. Enter the one that fits
            your idea — every project is eligible for the awards on top.
          </p>
        </header>

        <ul className="grid gap-6 md:grid-cols-2">
          {tracks.map((track) => (
            <TrackCard key={track.title} card={track} />
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <div className="bg-rosehack-darkgreen/40 h-px flex-1" />
          <h2 className="bg-rosehack-cream text-rosehack-darkgreen rounded-md px-8 py-3 text-sm font-semibold tracking-wider uppercase shadow-md">
            Special awards
          </h2>
          <div className="bg-rosehack-darkgreen/40 h-px flex-1" />
        </div>

        <ul className="grid gap-6 md:grid-cols-2">
          {awards.map((award) => (
            <TrackCard key={award.title} card={award} award />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TracksSection;
