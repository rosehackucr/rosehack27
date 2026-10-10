import Image from "next/image";

const SponsorsSection = () => {
  return (
    <main className="w-full">
      <Image
        src="/sponsors/sponsors-section.png"
        alt="RoseHack '27 sponsors"
        width={2880}
        height={1080}
        className="h-auto w-full"
        sizes="100vw"
      />
    </main>
  );
};

export default SponsorsSection;
