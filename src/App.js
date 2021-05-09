import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const handleChange = e => setText(e.target.value);

  return (
    <>
      <h1>How fast do you type?</h1>
      <textarea value={text} onChange={handleChange} />
      <h4>Time reminaing: __</h4>
      <button>Start</button>
      <h1>Word count: ???</h1>
    </>
  );
}

export default App;
