import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleAddCount = () => {
    setCount(count+1);
  }

  const handleSubsCount = () => {
   count>0 ?  setCount(count-1) : "";
  }

  

  return (
    <div className="border border-amber-300 w-6/12 m-auto text-center my-8">
      <h1 className="font-medium text-xl">Counter App</h1>
      <p>{count}</p>
      <div className="my-4">
        <button className="border p-2 rounded-lg mx-2 cursor-pointer" onClick={handleAddCount}>
          Add ➕
        </button>
        <button className="border p-2 rounded-lg mx-2 cursor-pointer" onClick={handleSubsCount}>
          Substract ➖
        </button>
        <button className="border p-2 rounded-lg mx-2 cursor-pointer">
          Reset 🔴
        </button>
      </div>
    </div>
  );
};

export default Counter;
