import QACard from "@/components/faq/question-answer-card";

const FAQ = () => {
  return (
    <div>
      {/* Overall Container */}
      <div>
        {/* Title Section */}
        <h2>QUESTIONS WE GET A LOT</h2>
        <h1>FAQ</h1>
      </div>

      <div>
        {/* Main Section */}
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

      <div>
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
      </div>
    </div>
  );  
};

export default FAQ;
