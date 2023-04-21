import React, { useState } from 'react';

function PuzzleGrid() {
  const [grid, setGrid] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState('X');

  function handleClick(index) {
    const newGrid = [...grid];
    newGrid[index] = player;
    setGrid(newGrid);
    setPlayer(player === 'X' ? 'O' : 'X');
  }

 {/* When the user clicks on div, open the popup */}
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
    const [showPopup, setShowPopup] = useState(false);
   var idx = 10;
    function togglePopup() {
         idx = idx;
        //  setIdx(idx+1);
      
      setShowPopup(!showPopup);
    }
  
    // const arr = document.getElementsByClassName("card");
    // arr.forEach(element => {
    //   element.add
    // }); 
  return (
    <div className="grid-container">
      {/* {grid.map((cell, index) => (
        <div key={index} className="grid-cell" onClick={() => handleClick(index)}>
          {cell}
        </div>
      ))} */}
        <div className="card">
            <button className ="togglePopup" onClick={togglePopup}>Show Popup</button>
            {showPopup && (
                <div className="popup">
                <p>This is the popup text{idx}.</p>
                {/* <button onClick={togglePopup}>Close</button> */}
                </div>
            )}
        </div>
        <div className="card">
        <button className ="togglePopup" onClick={togglePopup}>Show Popup1</button>
                    
        </div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>

    </div>
  );
}

export default PuzzleGrid;
