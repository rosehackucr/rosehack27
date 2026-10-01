import QACard from "@/components/faq/question-answer-card";

import Image from "next/image"
import TitlePaperImage from "@/public/faq/paper-card-top.webp"

const FAQ = () => {
  return (
    <section className="w-auto mx-auto bg-[url('/gingham-panel.webp')] justify-center bg-contain bg-center">
      {/* Overall Container Section */}
      <section className="text-center justify-center p-10 mx-auto">
        <div className="relative mx-auto max-w-3xl">
          {/* Title Section */}
          <Image
            src={TitlePaperImage}
            alt=""
            draggable={false}
            className="select-none w-auto h-auto mx-auto"
            ></Image>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h2>QUESTIONS WE GET A LOT</h2>
            <h1>FAQ</h1>
          </div>
        </div>
      </section>

      <section className="text-center justify-center p-10 mx-auto">
        <div className="relative mx-auto max-w-3xl">
          {/* Main Section */}
          <Image
            src={TitlePaperImage}
            alt=""
            draggable={false}
            className="select-none w-auto h-auto mx-auto"
            ></Image>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <QACard
              question="Do I need to know how to code?"
              answer="No! Every level is welcome, including if you're just starting out. We have resources, workshops and mentors to help you get going."
            />

            <QACard
              question="Do I need a team beforehand?"
              answer="No! Find teammates in our Discord or in person during the hackathon -- or build and demo solo if you'd rather."
            />

            <QACard question="Do I need project idea beforehand?" answer="[Fill In Later]"/>

            <QACard question="Is it only for CS Majors" answer="[Fill In Later]" />

            <QACard question="Does it cost anything?" answer="[Fill In Later]" />

            <QACard
              question="Do I have to stay the whole 24 hours?" answer="[Fill In Later]" />
        </div>
        </div>
      </section>


      <section className="text-center">
        {/* Footnote Section */}
        <p>
          Still wondering something? Ask us in the{" "}
          <a
            href="https://discord.gg/Md27WDfEZF"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-80"
          >
            Discord
          </a>{" "}
          or email{" "}
          <a
            href="mailto:ucr.rosehack@gmail.com"
            className="underline hover:opacity-80"
          >
            ucr.rosehack@gmail.com
          </a>
        </p>
      </section>
    </section>
  );
};

export default FAQ;
