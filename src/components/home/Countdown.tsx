"use client";

import { useEffect, useState } from "react";
import BloomBud from "./BloomBud";

const TARGET = new Date("2027-01-30T08:00:00-08:00").getTime();

// The bud next to the countdown opens over the final 120 days.
const BLOOM_DAYS = 120;

const getTimeLeft = () => {
  const diff = Math.max(TARGET - Date.now(), 0);
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor(diff / 3600000) % 24,
    minutes: Math.floor(diff / 60000) % 60,
    seconds: Math.floor(diff / 1000) % 60,
  };
};

const Countdown = () => {
  const [time, setTime] = useState<ReturnType<typeof getTimeLeft> | null>(null);

  useEffect(() => {
    setTime(getTimeLeft());
    const interval = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const open =
    time === null
      ? null
      : Math.min(
          Math.max(
            1 -
              (time.days + time.hours / 24 + time.minutes / 1440) / BLOOM_DAYS,
            0,
          ),
          1,
        );

  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {(["days", "hours", "minutes", "seconds"] as const).map((unit, i) => {
          const value = time ? String(time[unit]).padStart(2, "0") : "--";
          return (
            // Keyed by value, so each change remounts the tile and replays the
            // pulse. It animates `scale` only, so the resting rotation stays.
            <div
              key={`${unit}-${value}`}
              className={`text-rosehack-darkgreen animate-tick flex h-28 w-28 flex-col items-center justify-center bg-[url(/paper-card-sm.webp)] bg-[length:100%_100%] md:h-30 md:w-32 ${i % 2 ? "rotate-1" : "-rotate-1"}`}
            >
              <span className="font-cormorant text-rosehack-purple text-5xl font-bold">
                {value}
              </span>
              <span className="text-xs font-semibold uppercase">{unit}</span>
            </div>
          );
        })}
      </div>
      <BloomBud open={open} />
    </div>
  );
};

export default Countdown;
