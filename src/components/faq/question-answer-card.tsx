"use client";

import { useState } from "react";

type QACard = {
  question: string;
  answer: string;
};

const QACard = ({ question, answer }: QACard) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="group flex w-full cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-left transition duration-200 hover:bg-white/30"
      >
        <h3 className="font-poppins text-rosehack-purple text-left text-lg font-bold transition duration-200 group-hover:translate-x-1">
          {question}
        </h3>

        <span className="text-rosehack-purple ml-4 text-2xl font-bold">
          {open ? "−" : "+"}
        </span>
      </button>

      {/* Stays mounted; the row animates between 0fr and 1fr, so it opens
          to the answer's height with no measuring. */}
      <div
        aria-hidden={!open}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <p className="font-poppins text-rosehack-darkgreen px-2 pt-2 text-left text-base">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default QACard;
