import React, { useState, useEffect } from 'react';

function App() {
  const [text, setText] = useState('');
  const [timeRemaining, setTimeRemaining] = useState(5);
  const [isTimeRunning, setIsTimeRunning] = useState(false);

  const handleChange = e => setText(e.target.value);
  const calculateWordCount = text => text.trim().split(' ').filter(Boolean).length;

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => setTimeRemaining(t => t - 1), 1000);
    } else {
      setIsTimeRunning(false);
    }
  }, [timeRemaining, isTimeRunning]);

  return (
    <>
      <h1>How fast do you type?</h1>
      <textarea value={text} onChange={handleChange} />
      <h4>Time Remaining: {timeRemaining}</h4>
      <button
        onClick={() => setIsTimeRunning(true)}
      >
        Start
      </button>
      <h1>Word count: __</h1>
    </>
  );
}

export default App;
