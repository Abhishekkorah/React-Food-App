import React, { useState } from "react";
import './common.css';

const TimeRefreshing = () => {

    const date = new Date();
    
    let seconds = 0;
    let minutes = 0;
    let hours = 0;

    if(date.getSeconds() < 10 ){
        seconds = "0"+date.getSeconds(); 
        minutes = date.getMinutes();
        hours = date.getHours();
    }else if(date.getMinutes() < 10){
        seconds = date.getSeconds();
        minutes = "0"+date.getMinutes();
        hours = date.getHours();
    }else if(date.getHours < 10){
        seconds = date.getSeconds();
        minutes = date.getMinutes();
        hours = "0"+date.getHours();
    }
    else{
        seconds = date.getSeconds();
        minutes = date.getMinutes();
        hours = date.getHours();
    }
    let time = hours + " : "+ minutes +" : "+seconds;

    const [timer, setTimer] = useState(0);

    const onClickHandler = () => {
        console.log("clicked");
        setTimer(timer+time)
    }


    return(
        <div>
            <h1>{time}</h1>
            <button onClick={onClickHandler}>Get Time</button>
        </div>
    );
}

export default TimeRefreshing;