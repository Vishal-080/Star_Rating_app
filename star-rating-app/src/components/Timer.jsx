import React from "react";
import { useState } from "react";

const Timer = () => {

  const [hr, setHr] = useState(10);
  const [min, setMin] = useState(10);
  const [sec, setSec] = useState(10);



  return (
    <div>
      <div>
        <h1>Timer</h1>
        <h3>{hr} : {min} :{sec}</h3>
      </div>
      <div>
        <button>Reset</button>
        <button>Stop</button>
      </div>
    </div>
  );
};

export default Timer;
