import React, { useEffect, useState } from 'react';
import './Practice.css'

const Practice = () => {
  const [words, setWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);

  useEffect(() => {
    const fetchWords = async () => {
      const response = await fetch('http://itgirlschool.justmakeit.ru/api/words');
      const data = await response.json();
      setWords(data);
    };
    fetchWords();
  }, []);

  const handleShowTranslation = () => {
    setShowTranslation(true);
  };

  const handleNextWord = () => {
    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    setShowTranslation(false);
  };

  if (words.length === 0) {
    return <div>Загрузка слов...</div>;
  }

  const currentWord = words[currentWordIndex];

  return (
    <div>
      <h1>Практика</h1>
      <div className="word-card">
        <h2>{currentWord.english}</h2>
        {showTranslation ? (
          <div>
            <p className="translation">{currentWord.russian}</p>
            <p className="transcription">{currentWord.transcription}</p>
            <button onClick={handleNextWord}>Следующее слово</button>
          </div>
        ) : (
          <button onClick={handleShowTranslation}>Показать перевод</button>
        )}
      </div>
    </div>
  );
};

export default Practice;

