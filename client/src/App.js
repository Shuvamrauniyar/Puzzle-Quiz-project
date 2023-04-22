import React, { useState } from 'react';
import './App.css';
import './puzzleGrid.css';
import './timer.css';
import './login.css';
import Login from './login';
import TreasureHunt from './TreasureHunt';
import PuzzleGrid from './puzzlegrid';
import Timer from './timer';

function App() {

  const [getstart, setStart] = useState(false);

  function startTimer() {
    setStart(true);
  }
  function restartPage() {
    window.location.reload();
  }
  return (
    <div className="App">
      {/* <h1>Treasure Game</h1> */}
      <Login />,
      <TreasureHunt />,
      <button className='startButton' onClick={startTimer} >Start Game</button>
      {getstart && <Timer />}
      <br></br>
      <button className='restartButton' onClick={restartPage} >Restart</button>
      {
        getstart && <PuzzleGrid />
      }


    </div>
  );
}

export default App;
