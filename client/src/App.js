import React, { useContext, useState } from 'react';
// import { BrowserRouter , Routes, Route } from 'react-router-dom';
import './App.css';
// import './puzzleGrid.css';
// import './timer.css';
// import './login.css';
// import Login from './login';
import TreasureHunt from './TreasureHunt';
import PuzzleGrid from './puzzlegrid';
import Timer from './timer';
import { useNavigate } from 'react-router-dom';
import { Score } from './puzzlegrid';
import { Time } from './timer';
import { globalEmail } from './login';
import axios from 'axios';

function App() {

  const [getstart, setStart] = useState(false);

  // console.log(Score);
  function startTimer() {
    console.log(Score);
    setStart(true);
  }
  async function restartPage() {
    // alert(Time+"and"+Score);
    window.location.reload();


  }

  const navigate = useNavigate();
  function redirectToleaderboard() {

    navigate('/leaderboards');
  }

  async function redirectLogout() {
    try {
      console.log(globalEmail);
      let updateURL = 'http://localhost:3001/api/update';
      let data = {
        email: globalEmail,
        score: Score,
        time: Time
      }

      const response = await axios.patch(updateURL, data);
      if (response.data.success)
        console.log('updated ');
      else
        console.log('not updated ');


    } catch (error) {
      navigate('/');
      throw { err: 'not able to update' }
    }
    navigate('/');
  }

  return (
    <div className="App">
      {/* <h1>Treasure Game</h1> */}
      <TreasureHunt />,
      <button className='leaderboardButton' onClick={redirectToleaderboard}>View leaderboard</button>
      <br></br>

      <button className='startButton' onClick={startTimer} >Start Game</button>
      {getstart && <Timer />}
      <br>
      </br>
      <button className='restartButton' onClick={restartPage} >Restart</button>
      {
        getstart && <PuzzleGrid />
      }
      <br>
      </br>
      <button className='logoutButton' onClick={redirectLogout} >Logout</button>

    </div>
  );
}

export default App;
