import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const handleChange = e => setText(e.target.value);
  const calculateWordCount = text => text.trim().split(' ').filter(Boolean).length;

  return (
    <>
      <h1>How fast do you type?</h1>
      <textarea value={text} onChange={handleChange} />
      <h4>Time Remaining: __</h4>
      <button
        onClick={() => console.log(calculateWordCount(text))}
      >
        Start
      </button>
      <h1>Word count: __</h1>
    </>
  );
}

export default App;
