"use client";

import { useEffect, useState } from "react";

const TARGET = new Date("2027-01-30T08:00:00-08:00").getTime();

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

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {(["days", "hours", "minutes", "seconds"] as const).map((unit, i) => (
        <div
          key={unit}
          className={`text-rosehack-darkgreen flex h-28 w-28 flex-col items-center justify-center bg-[url(/paper-card-sm.webp)] bg-[length:100%_100%] md:h-30 md:w-32 ${i % 2 ? "rotate-1" : "-rotate-1"}`}
        >
          <span className="font-cormorant text-rosehack-purple text-5xl font-bold">
            {time ? String(time[unit]).padStart(2, "0") : "--"}
          </span>
          <span className="text-xs font-semibold uppercase">{unit}</span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
