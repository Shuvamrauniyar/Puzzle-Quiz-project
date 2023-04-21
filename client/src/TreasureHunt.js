import React, { useState } from 'react';

function TreasureHunt() {
  const [message, setMessage] = useState('');
  const [clue, setClue] = useState('');

  function handleClick() {
    setMessage('Congratulations! You found the treasure!');
  }

  function handleClueClick() {
    setClue('The treasure is hidden under a tree.');
  }

  return (
    <div>
      <h1>Treasure Hunt</h1>
      <p>{message}</p>
      {clue && <p>Clue: {clue}</p>}
      <button onClick={handleClick}>Find the treasure</button>
      <button onClick={handleClueClick}>Get a clue</button>
    </div>
  );
}

export default TreasureHunt;
