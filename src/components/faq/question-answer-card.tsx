type QACard = {
  question: string;
  answer: string;
};

const QACard = ({ question, answer }: QACard) => {
  return (
    <div>
      <h3 className="text-left font-poppins text-rosehack-purple text-lg font-bold">
        {question}
      </h3>
      <p className="text-left text-base">{answer}</p>
    </div>
  );
};

export default QACard;
