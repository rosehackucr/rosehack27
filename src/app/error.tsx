"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Flowers from "@/components/scenery/Flowers";
import { notFoundFlowers } from "@/components/scenery/flowerLayouts";

type ErrorProps = {
  error: Error & { digest?: string };
  // Re-renders the segment that failed.
  reset: () => void;
};

// Shown when something on a page throws while rendering in the browser.
// Same look as the 404 page, with a way to retry.
const ErrorPage = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="relative flex h-[calc(100svh-4.5rem)] flex-col items-center justify-center overflow-hidden bg-radial from-[#f4f4f1] to-[#e9eae6] px-6 py-12 text-center">
      <Flowers flowers={notFoundFlowers} />

      <p className="text-xs font-bold uppercase">Something went wrong</p>
      <h2 className="font-cormorant text-rosehack-purple mt-3 text-5xl leading-none md:text-7xl">
        This page wilted.
      </h2>
      <p className="mt-4 max-w-xl text-sm font-light md:text-lg">
        Something broke while loading it. Trying again usually fixes it, and
        everything else on the site is still where you left it.
      </p>

      <div className="relative mt-6 w-full max-w-2xl bg-[url('/paper-card-sm.webp')] bg-[length:100%_100%] bg-no-repeat px-8 pt-6 pb-9 text-left md:px-12 md:pt-8 md:pb-12 md:text-xl">
        <p>~ $ npm run bloom</p>
        <p className="mt-1">Error: this page didn&rsquo;t grow</p>
        <p className="mt-3 flex items-center">
          ~ $ try again
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
        <button
          type="button"
          onClick={reset}
          className="bg-rosehack-yellow cursor-pointer rounded-full px-10 py-3 font-semibold uppercase transition duration-200 hover:brightness-95 md:py-4"
        >
          Try again
        </button>
        <Link
          href="/"
          className="border-rosehack-darkgreen hover:bg-rosehack-darkgreen/10 rounded-full border-2 px-9 py-3 font-semibold uppercase transition duration-200 md:py-4"
        >
          Back to Home
        </Link>
      </div>

      <p className="relative z-10 mt-6 text-sm">
        If it keeps happening, tell us &mdash;{" "}
        <a href="mailto:ucr.rosehack@gmail.com" className="hover:underline">
          ucr.rosehack@gmail.com
        </a>
      </p>
    </section>
  );
};

export default ErrorPage;
