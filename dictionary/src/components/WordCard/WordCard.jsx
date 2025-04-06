import './WordCard.css';

function WordCard({ word }) {
  return (
    <div className="word-card">
      <h2>{word.word}</h2>
      <p><strong>Перевод:</strong> {word.translation}</p>
      <p><strong>Тема:</strong> {word.theme}</p>
    </div>
  );
}

export default WordCard;