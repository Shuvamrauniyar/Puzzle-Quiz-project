import { useState, useEffect } from "react";
import './timer.css';
import App from "./App";

let Time = 0;
const Timer = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
            // Time = time+1;

        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="timer">
            <p >Time Elapsed:</p>
            <h3 className="time">{Time = time} seconds</h3>
            {/* <h3 className="time">{Time} seconds</h3> */}
            {/* {Time = time} */}
        </div>
    );
};
export { Time };
export default Timer;
