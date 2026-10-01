type QACard = {
  question: string;
  answer: string;
};

const QACard = ({ question, answer }: QACard) => {
  return (
    <div>
      <h3>{question}</h3>
      <p>{answer}</p>
    </div>
  );
};

export default QACard;
