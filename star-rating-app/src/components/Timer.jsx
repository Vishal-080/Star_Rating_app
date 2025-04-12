import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Timer = () => {
  const [hr, setHr] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);

  const handleStop = () => {
    clearInterval(timer);
  };

  const handleReset = () => {
    setSec(0);
    setMin(0);
    setHr(0);
  };
  let timer = null;

  useEffect(() => {
    timer = setInterval(() => {
      setSec(sec + 1);
      if (sec == 59) {
        setMin(min + 1);
        setSec(0);
      }
      if (min == 59) {
        setHr(hr + 1);
        setMin(0);
        setSec(0);
      }
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <div className="w-6/12 mx-auto my-8 border text-center">
      <div>
        <h1>Timer</h1>
        <h3>
          {hr < 10 ? "0" + hr : hr} : {min < 10 ? "0" + min : min} :{" "}
          {sec < 10 ? "0" + sec : sec}
        </h3>
      </div>
      <div>
        <button className="px-4 py-2 rounded-2xl bg-cyan-300 text-black  border-cyan-600 border-2 text-xl m-4 cursor-pointer hover:bg-cyan-200 active:bg-cyan-600 active:text-white">
          Start
        </button>

        <button
          className="px-4 py-2 rounded-2xl bg-cyan-300 text-black  border-cyan-600 border-2 text-xl m-4 cursor-pointer hover:bg-cyan-200 active:bg-cyan-600 active:text-white"
          onClick={handleStop}
        >
          Stop
        </button>
        <button
          className="px-4 py-2 rounded-2xl bg-cyan-300 text-black  border-cyan-600 border-2 text-xl m-4 cursor-pointer hover:bg-cyan-200 active:bg-cyan-600 active:text-white"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
