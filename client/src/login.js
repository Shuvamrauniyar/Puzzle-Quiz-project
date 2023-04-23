import React, { useState } from 'react';
import './login.css';
import axios from 'axios';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import PuzzleGrid from './puzzlegrid';

let globalEmail = '';

function Login() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAuthenticated, setAuth] = useState(0);
    const navigate = useNavigate();
    const handleNameChange = (event) => {

        setName(event.target.value);
        console.log(name);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        // alert('hello');
        console.log('button is clicked');
        event.preventDefault();
        try {
            console.log('Email: ', email);
            console.log('Password: ', password);
            const data = {
                email: email,
                password: password,
                name: name
            }
            const loginURL = 'http://localhost:3001/api/signin';
            const response = await axios.post(loginURL, data);
            console.log('response is', response.data);
            if (response.data.success) {
                globalEmail = email;
                console.log('verified');
                setAuth(1);
                navigate('/game');
            }
            else {
                alert('wrong password!');
            }
        } catch (error) {
            alert('wrong password!');
            console.log('Error occurred while logging in: ', error);
        }

        // TODO: Add login functionality
    };
    const handleSignup = async (event) => {
        event.preventDefault();
        try {
            const data = {
                email: email,
                password: password,
                name: name
            }
            if (email) {
                globalEmail = email;
                const signUpURL = 'http://localhost:3001/api/signup';
                const response = await axios.post(signUpURL, data);
                if (response)
                    navigate('/game');
            }
            // console.log('response is',response);
        } catch (error) {
            alert('invalid credentials');
            console.log('Error occurred while logging in: ', error);
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        id="name"
                        placeholder="Enter your name"
                        value={name}
                        onChange={handleNameChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                </div>
                <button type="submit" className="login-button">Login</button>
                <button onClick={handleSignup} className="signup-button">signup</button>

            </form>
        </div>
    );
}
export { globalEmail };
export default Login;
