import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import './App.css';
import App from './App';
// import './login.css';
import Login from './login';
import Leaderboard from './leaderboard';

function FinalApp() {
    return (
        <div className="finalApp">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Login />} />
                    <Route path="/game" element={<App />} />
                    <Route path="/leaderboards" element={<Leaderboard />} />
                </Routes>
            </BrowserRouter>

            {/* <p>hello</p> */}
        </div>
    );
}

export default FinalApp;
