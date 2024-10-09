import React, { useState } from 'react';

// משפטים לדוגמה
const sentences = [
  { sentence: "The cat is ___ the table.", correctWord: "under" },
  { sentence: "I like to drink ___ in the morning.", correctWord: "coffee" },
  { sentence: "She is going to ___ a book.", correctWord: "read" },
  // ניתן להוסיף כאן עוד משפטים
];

const wordOptions = ["read", "coffee", "under", "sleep", "write", "eat", "milk", "water", "jump", "dog"];

const Game = () => {
  const [currentSentence, setCurrentSentence] = useState(sentences[0]);
  const [selectedWord, setSelectedWord] = useState('');
  const [correctCount, setCorrectCount] = useState(0);
  const [message, setMessage] = useState('');

  // פונקציה לבדוק אם המילה שנבחרה נכונה
  const checkAnswer = () => {
    if (selectedWord === currentSentence.correctWord) {
      setCorrectCount(correctCount + 1);
      setMessage("נכון! כל הכבוד!");
    } else {
      setMessage("טעות! נסה שוב.");
    }
  };

  // פונקציה לעבור למשפט הבא
  const nextSentence = () => {
    const randomSentence = sentences[Math.floor(Math.random() * sentences.length)];
    setCurrentSentence(randomSentence);
    setSelectedWord('');
    setMessage('');
  };

  return (
    <div className="container mt-5">
      <h2>משחק השלמת משפטים באנגלית</h2>
      <p>בחר את המילה החסרה:</p>
      
      <div className="mb-3">
        <p>{currentSentence.sentence.replace("___", "___")}</p>
      </div>
      
      <div className="mb-3">
        {wordOptions.map((word) => (
          <button
            key={word}
            className={`btn ${selectedWord === word ? 'btn-primary' : 'btn-outline-primary'} m-1`}
            onClick={() => setSelectedWord(word)}
          >
            {word}
          </button>
        ))}
      </div>
      
      <button className="btn btn-success" onClick={checkAnswer}>בדוק תשובה</button>
      <button className="btn btn-secondary ml-2" onClick={nextSentence}>משפט הבא</button>
      
      <div className="mt-3">
        <p>{message}</p>
        <p>תשובות נכונות עד כה: {correctCount}</p>
      </div>
    </div>
  );
};

export default Game;
