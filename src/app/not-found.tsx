import Image from "next/image";
import Link from "next/link";

const flowers = [
  // top
  { src: "flower-blossom-cream", className: "top-0 left-[6%] w-12" },
  { src: "flower-leaf", className: "top-6 left-[10%] w-12 rotate-45" },
  { src: "flower-blossom-pink-lg", className: "-top-4 left-[13%] w-16" },
  { src: "flower-leaf", className: "top-12 left-[1%] w-8 rotate-90" },
  {
    src: "flower-blossom-cream",
    className: "top-6 left-[34%] w-12 hidden md:block",
  },
  {
    src: "flower-blossom-pink-md",
    className: "top-14 left-[39%] w-12 hidden md:block",
  },
  {
    src: "flower-blossom-pink-lg",
    className: "-top-2 left-[46%] w-16 hidden md:block",
  },
  {
    src: "flower-leaf",
    className: "top-16 left-[52%] w-10 -rotate-12 hidden md:block",
  },
  {
    src: "flower-leaf",
    className: "top-8 right-[38%] w-8 rotate-[70deg] hidden md:block",
  },
  {
    src: "flower-blossom-pink-sm",
    className: "-top-3 right-[37%] w-10 hidden md:block",
  },
  { src: "flower-blossom-pink-lg", className: "top-12 right-[32%] w-16" },
  { src: "flower-blossom-pink-md", className: "-top-2 right-[25%] w-16" },
  { src: "flower-blossom-6petal", className: "top-6 right-[24%] w-16" },
  { src: "flower-leaf", className: "top-0 right-[10%] w-8 rotate-45" },
  { src: "flower-blossom-pink-sm", className: "top-0 right-[6%] w-10" },
  { src: "flower-blossom-pink-md", className: "-top-1 right-[1%] w-16" },
  {
    src: "flower-leaf",
    className: "top-12 right-[6%] w-10 hidden md:block",
  },
  // bottom
  { src: "flower-blossom-cream", className: "-bottom-4 left-[3%] w-12" },
  { src: "flower-blossom-pink-md", className: "-bottom-5 left-[19%] w-14" },
  { src: "flower-blossom-pink-md", className: "-bottom-5 left-[27%] w-14" },
  {
    src: "flower-blossom-cream",
    className: "-bottom-4 left-[33%] w-12 hidden md:block",
  },
  {
    src: "flower-leaf",
    className: "bottom-6 left-[38%] w-8 rotate-90 hidden md:block",
  },
  { src: "flower-blossom-pink-sm", className: "-bottom-2 left-[44%] w-10" },
  {
    src: "flower-blossom-cream",
    className: "bottom-2 left-[45%] w-12 hidden md:block",
  },
  { src: "flower-blossom-pink-md", className: "-bottom-5 right-[44%] w-14" },
  {
    src: "flower-leaf",
    className: "bottom-8 right-[36%] w-10 rotate-12 hidden md:block",
  },
  {
    src: "flower-blossom-cream",
    className: "bottom-2 right-[15%] w-14 hidden md:block",
  },
  { src: "flower-blossom-pink-sm", className: "bottom-2 right-[7%] w-10" },
  { src: "flower-leaf", className: "bottom-4 right-[0%] w-10 -rotate-45" },
];

const NotFound = () => {
  return (
    <section className="relative flex h-[calc(100svh-4.5rem)] flex-col items-center justify-center overflow-hidden bg-radial from-[#f4f4f1] to-[#e9eae6] px-6 py-12 text-center">
      {flowers.map(({ src, className }, i) => (
        <Image
          key={i}
          src={`/${src}.webp`}
          alt=""
          width={120}
          height={120}
          className={`pointer-events-none absolute ${className}`}
        />
      ))}

      <p className="text-xs font-bold uppercase">Error 404</p>
      <h1 className="font-cormorant text-rosehack-purple mt-3 text-7xl leading-none lining-nums md:text-8xl">
        404
      </h1>
      <h2 className="font-cormorant text-rosehack-purple mt-1 text-3xl md:text-5xl">
        Nothing grew here.
      </h2>
      <p className="mt-4 max-w-xl text-sm font-light md:text-lg">
        The page you are looking for does not exist, or has not bloomed yet.
        Everything else is still where you left it.
      </p>

      <div className="relative mt-6 w-full max-w-2xl bg-[url('/paper-card-sm.webp')] bg-[length:100%_100%] bg-no-repeat px-8 pt-6 pb-9 text-left md:px-12 md:pt-8 md:pb-12 md:text-xl">
        <p>~ $ cd /this-page</p>
        <p className="mt-1">No such file or directory</p>
        <p className="mt-3 flex items-center">
          ~ $ sudo bloom
          <span className="bg-rosehack-darkgreen animate-blink ml-3 inline-block h-6 w-3" />
        </p>

        <Image
          src="/flower-blossom-pink-lg.webp"
          alt=""
          width={120}
          height={120}
          className="pointer-events-none absolute top-1/2 right-10 hidden w-24 -translate-y-1/2 sm:block"
        />
        <span className="bg-rosehack-yellow absolute right-36 bottom-14 hidden size-3 rounded-full sm:block" />
      </div>

      <div className="relative z-10 mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4">
        <Link
          href="/"
          className="bg-rosehack-yellow rounded-full px-10 py-3 font-semibold uppercase hover:brightness-95 md:py-4"
        >
          Back to Home
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://discord.gg/Md27WDfEZF"
          className="border-rosehack-darkgreen hover:bg-rosehack-darkgreen/10 rounded-full border-2 px-9 py-3 font-semibold uppercase md:py-4"
        >
          Join the Discord
        </Link>
      </div>

      <p className="relative z-10 mt-6 text-sm">
        If a link we sent brought you here, tell us &mdash;{" "}
        <a href="mailto:ucr.rosehack@gmail.com" className="hover:underline">
          ucr.rosehack@gmail.com
        </a>
      </p>
    </section>
  );
};

export default NotFound;
