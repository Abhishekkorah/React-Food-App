import React, { useState } from "react";
import './ChangeBackground.css';

const ChangeBackground = () => {

    let bgColor = "#8e44ad"
    const [change, setChange] = useState(bgColor);

    const onClickHandler = () => {
       let newBg = "#34495e";
       setChange(newBg); 
    }

    const bgBack = () => {
        setChange(bgColor);
    }

    return (
        <div style={{backgroundColor: change}}>
            <button onClick={onClickHandler} onDoubleClick={bgBack}>Change Color</button>
        </div>
    );
}

export default ChangeBackground;