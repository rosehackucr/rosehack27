import QACard from "@/components/faq/question-answer-card";

const FAQ = () => {
  return (
    <section className="mx-auto w-full justify-center bg-[url('/faq/gingham.webp')] bg-[length:100%_auto] bg-top bg-repeat-y">
      {/* Overall Container Section */}

      <section className="mx-auto justify-center pt-5 pb-2 text-center">
        <div className="relative mx-auto max-w-3xl">
          {/* Title Section */}
          <section className="text-center">
            <div className="m-8 inline-flex flex-col items-center justify-center bg-[url('/faq/paper-card-top.webp')] bg-cover bg-center bg-no-repeat px-36 py-8 drop-shadow-[0_8px_7px_rgba(80,60,60,0.22)]">
              <h2 className="font-poppins text-rosehack-darkgreen font-bold">
                QUESTIONS WE GET A LOT
              </h2>

              <h1 className="text-rosehack-purple font-cormorant text-7xl font-bold">
                FAQ
              </h1>
            </div>
          </section>
        </div>
      </section>

      <section className="mx-auto justify-center pt-0 text-left">
        <div className="relative mx-auto max-w-3xl">
          {/* Main Section */}
          <section className="text-left">
            <div className="m-3 flex-col items-center bg-[url('/faq/paper-card-main.webp')] bg-[length:100%_100%] bg-center bg-no-repeat px-10 pt-10 pb-30 text-left drop-shadow-[0_8px_8px_rgba(80,60,60,0.18)]">
              <QACard
                question="Do I need to know how to code?"
                answer="No! Every level is welcome, including if you're just starting out. We have resources, workshops and mentors to help you get going."
              />

              <hr className="my-4 border-rosehack-lightgreen" />

              <QACard
                question="Do I need a team beforehand?"
                answer="No! Find teammates in our Discord or in person during the hackathon -- or build and demo solo if you'd rather."
              />

              <hr className="my-4 border-rosehack-lightgreen" />

              <QACard
                question="Do I need a project idea beforehand?"
                answer="No! Brainstorm ahead if you like, but all work and coding happens during the hackathon. You'll have the whole weekend."
              />

              <hr className="my-4 border-rosehack-lightgreen" />

              <QACard
                question="Is it only for CS majors?"
                answer="No! All majors and all years are welcome."
              />

              <hr className="my-4 border-rosehack-lightgreen" />

              <QACard
                question="Does it cost anything?"
                answer="No! Just register and watch for your confirmation email."
              />

              <hr className="my-4 border-rosehack-lightgreen" />

              <QACard
                question="Do I have to stay the whole 24 hours?"
                answer="No! Stay as long as you like. There's a quiet room if you want to sleep on site, and you're welcome to go home and come back Sunday."
              />
            </div>
          </section>
        </div>
      </section>

      <section className="mx-auto -mt-3 justify-center pb-5 text-center">
        <div className="relative mx-auto max-w-lg">
          {/* Footnote Section */}
          <section className="text-center">
            <div className="inline-flex flex-col items-center justify-center bg-[url('/faq/paper-card-top.webp')] bg-cover bg-center bg-no-repeat px-10 py-8 drop-shadow-[0_8px_7px_rgba(80,60,60,0.20)]">
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