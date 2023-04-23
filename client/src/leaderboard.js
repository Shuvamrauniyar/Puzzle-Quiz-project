import React, { useState, useEffect } from 'react';
import './leaderboard.css';
import axios from 'axios';

function Leaderboard() {
  const [scores, setScores] = useState([]);

  useEffect(async() => {
    try {
        const response = await axios.get('http://localhost:3001/api/leaderboards');
        if(response){
            const score = Array.from(response);
            setScores(score);
            console.log(typeof(Object.values(response)))

        }
    } catch (error) {
        console.log(error);
    } 
   },[]);

  return (
    <div className="leaderboard-container">
      <h2>Top Scorers</h2>
      <ul>
        {scores.map(record => (
          <li key={record.id}>
            {record.name}: {record.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Leaderboard;
