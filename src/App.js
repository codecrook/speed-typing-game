import React, { useState, useEffect, useRef } from 'react';

function App() {
  const STARTING_TIME = 10;

  const [text, setText] = useState('');
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const textAreaRef = useRef(null);

  const handleChange = e => setText(e.target.value);
  const calculateWordCount = text => text.trim().split(' ').filter(Boolean).length;

  const startGame = () => {
    setIsTimeRunning(true);
    setTimeRemaining(STARTING_TIME);
    setText("");
    textAreaRef.current.disabled = false;
    textAreaRef.current.focus();
  };

  const endGame = () => {
    setIsTimeRunning(false);
    setWordCount(calculateWordCount(text));
  }

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => setTimeRemaining(t => t - 1), 1000)
    } else {
      endGame();
    }
  }, [timeRemaining, isTimeRunning]);

  return (
    <>
      <h1>How fast do you type?</h1>
      <textarea
        value={text}
        onChange={handleChange}
        disabled={!isTimeRunning}
        ref={textAreaRef}
      />
      <h4>Time Remaining: {timeRemaining}</h4>
      <button
        onClick={startGame}
        disabled={isTimeRunning}
      >
        Start
      </button>
      <h1>Word count: {wordCount}</h1>
    </>
  );
}

export default App;
