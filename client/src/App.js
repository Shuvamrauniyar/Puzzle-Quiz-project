import './App.css';
import './puzzleGrid.css'
import React from 'react';
import TreasureHunt from './TreasureHunt';
import PuzzleGrid from './puzzlegrid';
function App() {
  return (
    <div className="App">
      {/* <h1>Treasure Game</h1> */}
      <TreasureHunt />,
      <PuzzleGrid />,

    </div>
  );
}

export default App;
