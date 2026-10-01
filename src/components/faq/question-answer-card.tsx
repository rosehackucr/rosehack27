type QACard = {
  question: string;
  answer: string;
};

const QACard = ({ question, answer }: QACard) => {
  return (
    <div>
      <h3 className="font-poppins font-bold text-rosehack-purple text-lg">{question}</h3>
      <p className="text-base">{answer}</p>
    </div>
  );
};

export default QACard;
