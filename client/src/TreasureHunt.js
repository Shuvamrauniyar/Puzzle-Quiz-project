import React, { useState } from 'react';

function TreasureHunt() {
  const [message, setMessage] = useState('');
  const [instr, setInstr] = useState('');

  function handleClick() {
    setMessage('You need to answer correctly to score the highest !');

  }

  function handleInstrClick() {
    setInstr('Click on the boxes,you will get the questions,answer it wisely');
  }

  return (
    <div>
      <h1>Treasure Hunt</h1>
      <p>{message}</p>
      {instr && <p>Instr: {instr}</p>}
      <button onClick={handleClick}>Your Goal</button>
      <button onClick={handleInstrClick}>How to play</button>
    </div>
  );
}

export default TreasureHunt;
