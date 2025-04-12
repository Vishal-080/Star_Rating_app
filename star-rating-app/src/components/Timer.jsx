import React from "react";
import { useState } from "react";

const Timer = () => {

  const [hr, setHr] = useState(10);
  const [min, setMin] = useState(10);
  const [sec, setSec] = useState(10);


  const handleReset = () => {
    console.log("handleReset");
  }

  const handleStop = () => {
    console.log("handleStop");
  }

  return (
    <div className="w-6/12 mx-auto my-8 border text-center">
      <div>
        <h1>Timer</h1>
        <h3 >{hr} : {min} :{sec}</h3>
      </div>
      <div>
        <button className="px-4 py-2 rounded-2xl bg-cyan-400 text-black  border-cyan-600 border-2 text-xl m-4 cursor-pointer" onClick={handleReset}>Reset</button>
        <button className="px-4 py-2 rounded-2xl bg-cyan-400 text-black  border-cyan-600 border-2 text-xl m-4 cursor-pointer" onClick={handleStop}>Stop</button>
      </div>
    </div>
  );
};

export default Timer;
