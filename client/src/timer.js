import { useState, useEffect } from "react";

const Timer = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="timer">
            <p >Time Elapsed:</p>
            <h3 className="time">{time} seconds</h3>
        </div>
    );
};

export default Timer;
