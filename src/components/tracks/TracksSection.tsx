import Image from "next/image";

const TracksSection = () => {
  return (
    <main className="w-full">
      <Image
        src="/tracks/tracks-section.png"
        alt="RoseHack '27 tracks"
        width={2880}
        height={1080}
        className="h-auto w-full"
        sizes="100vw"
      />
    </main>
  );
};

export default TracksSection;
