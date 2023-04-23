import React, { useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import './puzzleGrid.css';
import 'react-toastify/dist/ReactToastify.css';

function PuzzleGrid() {
  const [score, setScore] = useState(0);
  const [ques, setQues] = useState('');
  const [ans, setAns] = useState('');
  const [inputValue, setInputValue] = useState('');

  const [showPopup, setShowPopup] = useState(false);

  const [idx, setIdx] = useState(-1);

  const inputRef = useRef(null);

  let inputCorrect = false;
  function handleInputChange(event) {

    setInputValue(inputRef.current.value);

    console.log(inputValue);
    console.log(ans);
    if (inputValue.toLowerCase() == ans) {
      let dummyScore = score;
      dummyScore += 100;
      setScore(dummyScore);
      inputCorrect = true;
      toast("Correct!");
    }
    else
      toast("Wrong!");
    console.log('score is ', score);

  }

  function togglePopup(clickEvent) {
    let cellId = clickEvent.currentTarget.id;
    setShowPopup(!showPopup);

    console.log("cellid is", cellId);
    if (idx !== cellId) {
      setIdx(cellId);
      generateQues();
    }

  }

  const generateQues = function () {
    const questions = [
      {
        ques: "When was eLitmus launched?",
        ans: "2005"
      },
      {
        ques: "which test is used to evaluates",
        ans: "ph"
      },
      {
        ques: "who is the Managing Director of eLitmus?",
        ans: "aseem marwaha"
      },
      {
        ques: "who is the Head Finance and Administration of eLitmus?",
        ans: "satish prasad"
      },
      {
        ques: "who is the Head Technology of eLitmus Company?",
        ans: "shireesh jayashetty"
      },

      {
        ques: "In which city the headquarter of eLitmus located?",
        ans: "bengaluru"
      },
      {
        ques: "eLitmus is largest assessment platform for fresher or Experienced?",
        ans: "fresher"
      },
      {
        ques: "Does eLitmus provides admit card pdf for candidates appearing test",
        ans: "yes"
      }
    ];

    let arrayIndex = Math.floor(Math.random() * questions.length);
    setQues('');

    setQues(questions[arrayIndex].ques);
    setAns(questions[arrayIndex].ans);

  }

  const toastStyle = {
    width: "100px",
    height: "50px",
  };

  return (
    <div className="grid-container">
      <div className="card" >
        <button className="togglePopup" id='1' onClick={togglePopup}>Show Popup</button>
        {showPopup && (
          <div className="popup">
            <p className='question'>{ques}</p>
            {/* <button onClick={togglePopup}>Close</button> */}
            <input type="text" ref={inputRef} placeholder='Give your answer'></input>
            <br></br>

            <button onClick={handleInputChange}>Submit</button>
            <div className="my-toast-container">
              <ToastContainer
                position="top-center"

                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover
                theme="light"
                toastStyle={toastStyle}
              />
            </div>
            <p>{score}</p>
          </div>
        )}
      </div>
      <div className="card" >
        <button className="togglePopup" id='2' onClick={togglePopup}>Show Popup1</button>

      </div>
      <div class="card">
        <button className="togglePopup" id='3' onClick={togglePopup}>Show Popup1</button>

      </div>
      <div className="card">
        <button className="togglePopup" id='4' onClick={togglePopup}>Show Popup1</button>
      </div>
      <div className="card">
        <button className="togglePopup" id='5' onClick={togglePopup}>Show Popup1</button>
      </div>
      <div className="card">
        <button className="togglePopup" id='6' onClick={togglePopup}>Show Popup1</button>
      </div>
      <div className="card">
        <button className="togglePopup" id='7' onClick={togglePopup}>Show Popup1</button>
      </div>
      <div className="card">
        <button className="togglePopup" id='8' onClick={togglePopup}>Show Popup1</button>
      </div>
      <div className="card">
        <button className="togglePopup" id='9' onClick={togglePopup}>Show Popup1</button>
      </div>
      
    </div>
  );
}

export default PuzzleGrid;
