import Link from "next/link";
import Flowers from "@/components/scenery/Flowers";
import Terminal from "@/components/notfound/Terminal";
import { notFoundFlowers } from "@/components/scenery/flowerLayouts";

const NotFound = () => {
  return (
    <section className="relative flex h-[calc(100svh-4.5rem)] flex-col items-center justify-center overflow-hidden bg-radial from-[#f4f4f1] to-[#e9eae6] px-6 py-12 text-center">
      <Flowers flowers={notFoundFlowers} />

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

      <Terminal />

      <div className="relative z-10 mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4">
        <Link
          href="/"
          className="bg-rosehack-yellow rounded-full px-10 py-3 font-semibold uppercase transition duration-200 hover:brightness-95 md:py-4"
        >
          Back to Home
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://discord.gg/Md27WDfEZF"
          className="border-rosehack-darkgreen hover:bg-rosehack-darkgreen/10 rounded-full border-2 px-9 py-3 font-semibold uppercase transition duration-200 md:py-4"
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
