import React, { useState } from "react";
import './common.css';

const DigitalClock = () => {

    let time = new Date().toLocaleTimeString();

    const [currentTime, setCurrentTime] = useState(time);

    const updateTime = () => {
        
        time = new Date().toLocaleTimeString();
        setCurrentTime(time);
    }

    setInterval(updateTime, 1000);

    return (
        <h1>{currentTime}</h1>
    );
}

export default DigitalClock;