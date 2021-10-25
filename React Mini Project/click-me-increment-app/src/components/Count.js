import React, { useState } from "react";
import './common.css';

const Count = () => {
    const [count, setCount] = useState(0);

  const IncrementNumber = () => {
    console.log("clicked");
    setCount(count + 1);
  }

    return (
     <div>
      <h1>{count}</h1>
      <button onClick={IncrementNumber}>click me</button>
      </div>
    );
}

export default Count;