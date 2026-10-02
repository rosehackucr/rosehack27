import QACard from "@/components/faq/question-answer-card";

const FAQ = () => {
  return (
    <section className="min-h-screen bg-[url('/gingham-panel.webp')] bg-repeat bg-[length:80px_80px]">
      {/* Overall Container Section */}

      <section className="mx-auto pt-5 pb-2 text-center">
        <div className="relative mx-auto max-w-3xl">
          {/* Title Section */}
          <section className="text-center">
            <div className="relative z-20 mx-auto inline-flex min-w-[290px] flex-col items-center justify-center bg-[url('/faq/paper-card-top.webp')] bg-[length:100%_100%] bg-center bg-no-repeat px-12 py-8 sm:min-w-[360px] sm:px-16">
              <h2 className="font-poppins text-[10px] font-bold text-green-700">
                QUESTIONS WE GET A LOT
              </h2>

              <h1 className="text-rosehack-purple font-cormorant mt-2 text-5xl font-bold">
                FAQ
              </h1>
            </div>
          </section>
        </div>
      </section>

      <section className="mx-auto pt-0 text-left">
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
          {/* Main Section */}
          <section className="text-left">
            <div className="mx-auto flex max-w-2xl flex-col bg-[url('/faq/paper-card-top.webp')] bg-[length:100%_100%] bg-center bg-no-repeat px-8 pt-10 pb-16 text-left sm:px-12">
              <QACard
                question="Do I need to know how to code?"
                answer="No! Every level is welcome, including if you're just starting out. We have resources, workshops and mentors to help you get going."
              />

              <hr className="my-3 border-green-400/60" />

              <QACard
                question="Do I need a team beforehand?"
                answer="No! Find teammates in our Discord or in person during the hackathon -- or build and demo solo if you'd rather."
              />

              <hr className="my-3 border-green-400/60" />

              <QACard
                question="Do I need a project idea beforehand?"
                answer="No! Brainstorm ahead if you like, but all work and coding happens during the hackathon. You'll have the whole weekend."
              />

              <hr className="my-3 border-green-400/60" />

              <QACard
                question="Is it only for CS majors?"
                answer="No! All majors and all years are welcome."
              />

              <hr className="my-3 border-green-400/60" />

              <QACard
                question="Does it cost anything?"
                answer="No! Just register and watch for your confirmation email."
              />

              <hr className="my-3 border-green-400/60" />

              <QACard
                question="Do I have to stay the whole 24 hours?"
                answer="No! Stay as long as you like. There's a quiet room if you want to sleep on site, and you're welcome to go home and come back Sunday."
              />
            </div>
          </section>
        </div>
      </section>

      <section className="mx-auto p-5 text-center">
        <div className="relative mx-auto max-w-lg">
          {/* Footnote Section */}
          <section className="text-center">
            <div className="mt-1 inline-flex flex-col items-center justify-center bg-[url('/faq/paper-card-top.webp')] bg-cover bg-center bg-no-repeat px-10 py-8">
              <p className="text-base">
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