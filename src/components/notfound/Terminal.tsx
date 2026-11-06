"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState, type KeyboardEvent } from "react";

// The 404 page's terminal, but typeable. `sudo bloom` makes flowers burst
// open around the card; a handful of other commands navigate or joke.

const APPLY_URL = "https://athena-wheat.vercel.app/rosehack/forms/participant";
const PAGES = ["about", "faq", "judges", "speakers", "sponsors", "tracks"];
const FLOWERS = ["cream", "pink-lg", "pink-md", "pink-sm", "6petal"];
// Keep the card from growing forever.
const MAX_LINES = 8;

type Line = { text: string; command?: boolean };
type Bloom = {
  left: number;
  top: number;
  size: number;
  flower: string;
  delay: number;
  rotate: number;
};

const initial: Line[] = [
  { text: "cd /this-page", command: true },
  { text: "No such file or directory" },
];

const between = (min: number, max: number) => min + Math.random() * (max - min);

// A spot on the card's border (as % of the card), so the burst frames the
// text instead of covering it.
const aroundTheEdge = () => {
  const side = Math.floor(Math.random() * 4);
  if (side === 0) return { left: between(-4, 98), top: between(-14, -4) }; // top
  if (side === 1) return { left: between(-4, 98), top: between(84, 94) }; // bottom
  if (side === 2) return { left: between(-10, -4), top: between(-6, 90) }; // left
  return { left: between(90, 100), top: between(-10, 96) }; // right
};

const Terminal = () => {
  const router = useRouter();
  const input = useRef<HTMLInputElement>(null);
  const [lines, setLines] = useState<Line[]>(initial);
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  const [last, setLast] = useState("");
  const [blooms, setBlooms] = useState<Bloom[]>([]);

  const print = (command: string, ...output: string[]) =>
    setLines((prev) =>
      [
        ...prev,
        { text: command, command: true },
        ...output.map((text) => ({ text })),
      ].slice(-MAX_LINES),
    );

  const bloom = () =>
    // Random positions are rolled here, in the event handler, never at render.
    setBlooms(
      Array.from({ length: 16 }, (_, i) => ({
        ...aroundTheEdge(),
        size: between(28, 64),
        flower: FLOWERS[Math.floor(Math.random() * FLOWERS.length)],
        delay: i * 45,
        rotate: between(-30, 30),
      })),
    );

  const run = (raw: string) => {
    const cmd = raw.trim().replace(/\s+/g, " ");
    const [name, arg] = cmd.split(" ");
    if (!cmd) return print("");
    setLast(cmd);

    if (cmd === "sudo bloom") {
      bloom();
      return print(cmd, "Root access granted. Everything is in bloom.");
    }
    if (name === "sudo")
      return print(cmd, "You already have root access. Try: sudo bloom");
    if (name === "bloom")
      return print(cmd, "bloom: permission denied. Try sudo?");
    if (name === "help")
      return print(cmd, "sudo bloom · ls · cd <page> · whoami · apply · clear");
    if (name === "ls") return print(cmd, PAGES.join("  "));
    if (name === "whoami") return print(cmd, "a future RoseHacker");
    if (name === "clear") return setLines([]);
    if (name === "apply") {
      window.open(APPLY_URL, "_blank", "noopener,noreferrer");
      return print(cmd, "Opening the application…");
    }
    if (name === "cd" || name === "home") {
      const page = (name === "home" ? "~" : (arg ?? "~")).replace(
        /^\/+|\/+$/g,
        "",
      );
      if (page === "~" || page === "" || page === "home") {
        print(cmd, "Taking you home…");
        return router.push("/");
      }
      if (PAGES.includes(page)) {
        print(cmd, `Opening /${page}…`);
        return router.push(`/${page}`);
      }
      return print(cmd, `cd: ${page}: No such file or directory`);
    }
    print(cmd, `command not found: ${name}. Type help`);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      run(value);
      setValue("");
    } else if (e.key === "ArrowUp" && last) {
      e.preventDefault();
      setValue(last);
    }
  };

  return (
    <div
      onClick={() => input.current?.focus()}
      className="relative mt-6 w-full max-w-2xl cursor-text bg-[url('/paper-card-sm.webp')] bg-[length:100%_100%] bg-no-repeat px-8 pt-6 pb-9 text-left md:px-12 md:pt-8 md:pb-12 md:text-xl"
    >
      <div aria-live="polite" className="relative z-10 sm:pr-28">
        {lines.map((line, i) => (
          <p key={i} className={line.command ? (i ? "mt-3" : "") : "mt-1"}>
            {line.command ? `~ $ ${line.text}` : line.text}
          </p>
        ))}
      </div>

      <label
        className={`relative z-10 flex items-center ${lines.length ? "mt-3" : ""}`}
      >
        <span aria-hidden="true" className="shrink-0">
          ~ $&nbsp;
        </span>
        <span className="sr-only">Terminal command</span>
        <span className="relative flex min-w-0 flex-1 items-center">
          <input
            ref={input}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={onKeyDown}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
            className="caret-rosehack-darkgreen min-w-0 flex-1 bg-transparent outline-none"
          />
          {/* The original card's "sudo bloom ▮", as a hint until you type. */}
          {!focused && !value && (
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 flex items-center"
            >
              sudo bloom
              <span className="bg-rosehack-darkgreen animate-blink ml-3 inline-block h-6 w-3" />
            </span>
          )}
        </span>
      </label>

      <Image
        src="/flower-blossom-pink-lg.webp"
        alt=""
        width={120}
        height={120}
        className="pointer-events-none absolute top-1/2 right-10 hidden w-24 -translate-y-1/2 sm:block"
      />
      <span className="bg-rosehack-yellow absolute right-36 bottom-14 hidden size-3 rounded-full sm:block" />

      {/* The burst from `sudo bloom`. Decorative only. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20"
      >
        {blooms.map((b, i) => (
          <Image
            key={`${i}-${b.left}`}
            src={`/flower-blossom-${b.flower}.webp`}
            alt=""
            width={120}
            height={120}
            className="animate-pop absolute origin-center"
            style={{
              left: `${b.left}%`,
              top: `${b.top}%`,
              width: b.size,
              rotate: `${b.rotate}deg`,
              animationDelay: `${b.delay}ms`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Terminal;
