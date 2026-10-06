import Image from "next/image";

const Theme = () => {
  return (
    <section id="theme" className="w-full">
      <Image
        src="/home/theme-section.png"
        alt="RoseHack '27 theme"
        width={2880}
        height={1080}
        className="h-auto w-full"
        sizes="100vw"
      />
    </section>
  );
};

export default Theme;
