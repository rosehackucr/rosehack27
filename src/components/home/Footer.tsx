import Image from "next/image";

const Footer = () => {
  return (
    <section id="footer" className="w-full">
      <Image
        src="/home/FooterSection.png"
        alt="RoseHack '27 Footer"
        width={2880}
        height={324}
        className="h-auto w-full"
        sizes="100vw"
      />
    </section>
  );
};

export default Footer;
