import QACard from "@/components/faq/question-answer-card";

const FAQ = () => {
  return (
    <section className="mx-auto w-auto justify-center bg-[url('/gingham-panel.webp')] bg-contain bg-center">
      {/* Overall Container Section */}

      <section className="mx-auto justify-center p-10 text-center">
        <div className="relative mx-auto max-w-3xl">
          {/* Title Section */}
          <section className="text-center">
            <div className="m-8 inline-flex flex-col items-center justify-center bg-[url('/faq/paper-card-top.webp')] bg-cover bg-center bg-no-repeat px-30 py-8">
              <h2 className="text-poppins font-bold">QUESTIONS WE GET A LOT</h2>
              <h1 className="text-rosehack-purple font-cormorant text-7xl font-bold">
                FAQ
              </h1>
            </div>
          </section>
        </div>
      </section>

      <section className="mx-auto justify-center p-10 text-center">
        <div className="relative mx-auto max-w-3xl">
          {/* Main Section */}
          <section className="text-center">
            <div className="m-8 inline-flex flex-col items-center justify-center bg-[url('/faq/paper-card-top.webp')] bg-cover bg-center bg-no-repeat px-30 py-8">
              <QACard
                question="Do I need to know how to code?"
                answer="No! Every level is welcome, including if you're just starting out. We have resources, workshops and mentors to help you get going."
              />

              <QACard
                question="Do I need a team beforehand?"
                answer="No! Find teammates in our Discord or in person during the hackathon -- or build and demo solo if you'd rather."
              />

              <QACard
                question="Do I need project idea beforehand?"
                answer="[Fill In Later]"
              />

              <QACard
                question="Is it only for CS Majors"
                answer="[Fill In Later]"
              />

              <QACard
                question="Does it cost anything?"
                answer="[Fill In Later]"
              />

              <QACard
                question="Do I have to stay the whole 24 hours?"
                answer="[Fill In Later]"
              />
            </div>
          </section>
        </div>
      </section>

      <section className="mx-auto justify-center p-10 text-center">
        <div className="relative mx-auto max-w-3xl">
          {/* Footnote Section */}
          <section className="text-center">
            <div className="m-8 inline-flex flex-col items-center justify-center bg-[url('/faq/paper-card-top.webp')] bg-cover bg-center bg-no-repeat px-30 py-8">
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
            </div>
          </section>
        </div>
      </section>
    </section>
  );
};

export default FAQ;
