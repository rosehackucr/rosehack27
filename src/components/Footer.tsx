import Image from "next/image";
import Link from "next/link";

const socials = [
  {
    label: "Instagram",
    short: "IG",
    href: "https://www.instagram.com/rosehackucr?utm_source=ig_web_button_share_sheet&mdxt=ZDNlZDc0MzIxNw==",
  },
  {
    label: "LinkedIn",
    short: "in",
    href: "https://www.linkedin.com/company/rosehack/",
  },
  { label: "Discord", short: "DC", href: "https://discord.gg/Md27WDfEZF" },
  { label: "Email", short: "@", href: "mailto:ucr.rosehack@gmail.com" },
];

const Footer = () => {
  return (
    <footer className="bg-rosehack-darkgreen/85 text-rosehack-cream">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 py-12 text-center md:flex-row md:justify-between md:px-12 md:py-16 md:text-left">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
          <Image
            src="/logo.webp"
            alt="RoseHack logo"
            width={80}
            height={80}
            className="h-16 w-16 rounded-full md:h-20 md:w-20"
          />
          <div>
            <p className="text-2xl font-bold md:text-3xl">RoseHack &rsquo;27</p>
            <p className="font-light md:text-lg">
              Hosted by Women in Computing at UC Riverside
            </p>
          </div>
        </div>

        <ul className="flex gap-3 md:gap-4">
          {socials.map(({ label, short, href }) => (
            <li key={label}>
              <Link
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                className="border-rosehack-cream/50 hover:bg-rosehack-cream/10 focus-visible:outline-rosehack-cream flex h-12 w-12 items-center justify-center rounded-full border-2 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 md:h-14 md:w-14"
              >
                {short}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
