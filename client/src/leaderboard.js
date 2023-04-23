import React, { useState, useEffect } from 'react';
import './leaderboard.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Leaderboard() {
    const [players, setPlayers] = useState([]);
    const navigate = useNavigate();


    function BackToGame() {
        navigate('/game');
        window.location.reload();
    }

    async function fetchPlayers() {
        try {
            const response = await axios.get('http://localhost:3001/api/leaderboards');
            if (response) {
                // const player = Array.from(response);
                setPlayers(response.data.data);
                // console.log(response.data.data);
                // console.log(typeof(Object.values(response)));

            }

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchPlayers();
    }, []);


    return (
        <div className="leaderboard-container">
            <h2>Top Scorers</h2>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.values(players).map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className='backToGame' onClick={BackToGame}>Play Game</button>
        </div>
    );
}

export default Leaderboard;
