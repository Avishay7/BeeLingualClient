import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const sentences = [
  { sentence: "The cat is ___ the table.", correctWord: "under" },
  { sentence: "I like to drink ___ in the morning.", correctWord: "coffee" },
  { sentence: "She is going to ___ a book.", correctWord: "read" },
  { sentence: "They went to the ___ to buy groceries.", correctWord: "store" },
  { sentence: "He is taller than ___ brother.", correctWord: "his" },
  { sentence: "The sun rises in the ___.", correctWord: "east" },
  { sentence: "I will ___ a letter tomorrow.", correctWord: "write" },
  { sentence: "We ___ a movie last night.", correctWord: "watched" },
  { sentence: "My favorite color is ___.", correctWord: "blue" },
  { sentence: "She ___ a beautiful painting.", correctWord: "made" },
  // 20 additional sentences
  { sentence: "The bird is flying ___ the sky.", correctWord: "in" },
  { sentence: "Please ___ your shoes before entering.", correctWord: "remove" },
  { sentence: "I ___ my homework yesterday.", correctWord: "finished" },
  { sentence: "They ___ a new house.", correctWord: "built" },
  { sentence: "The dog ran ___ the park.", correctWord: "through" },
  { sentence: "We are going to the ___ to watch a play.", correctWord: "theater" },
  { sentence: "He ___ his best friend a gift.", correctWord: "gave" },
  { sentence: "She is ___ a beautiful dress.", correctWord: "wearing" },
  { sentence: "The baby is ___ on the bed.", correctWord: "sleeping" },
  { sentence: "I ___ you can do it.", correctWord: "believe" },
];

const wordOptions = ["read", "coffee", "under", "sleep", "write", "eat", "milk", "water", "jump", "dog", "store", "his", "east", "watched", "blue", "made"];

// פונקציה לערבב מערך
const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const Game = () => {
  const [currentSentence, setCurrentSentence] = useState(sentences[0]);
  const [selectedWord, setSelectedWord] = useState('');
  const [correctCount, setCorrectCount] = useState(0);
  const [message, setMessage] = useState('');
  const [shuffledOptions, setShuffledOptions] = useState([]);

  useEffect(() => {
    // לערבב את האופציות בכל פעם שהמשפט מתחלף
    setShuffledOptions(shuffleArray([...wordOptions]));
  }, [currentSentence]);

  // פונקציה לבדוק אם המילה שנבחרה נכונה ולעבור למשפט הבא
  const selectWord = (word) => {
    setSelectedWord(word);
    if (word === currentSentence.correctWord) {
      setCorrectCount(correctCount + 1);
      setMessage("נכון! כל הכבוד!");
      setTimeout(nextSentence, 1000); // עובר אוטומטית למשפט הבא לאחר שנייה
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
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h2>משחק השלמת משפטים באנגלית</h2>
        <p>בחר את המילה החסרה:</p>

        <div className="mb-3">
          <p>{currentSentence.sentence.replace("___", "___")}</p>
        </div>

        <div className="d-flex justify-content-center flex-wrap mb-3">
          {shuffledOptions.map((word) => (
            <button
              key={word}
              className={`btn ${selectedWord === word ? 'btn-primary' : 'btn-outline-primary'} m-2 rounded-circle`}
              style={{ width: '80px', height: '80px' }}
              onClick={() => selectWord(word)}
            >
              {word}
            </button>
          ))}
        </div>

        <div className="mt-3">
          <p>{message}</p>
          <p>תשובות נכונות עד כה: {correctCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Game;

