import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleAddCount = () => {
    
  }

  return (
    <div className="border border-amber-300 w-6/12 m-auto text-center my-8">
      <h1 className="font-medium text-xl">Counter App</h1>
      <p>{count}</p>
      <div className="my-4">
        <button className="border p-2 rounded-lg mx-2 cursor-pointer">
          Add ➕
        </button>
        <button className="border p-2 rounded-lg mx-2 cursor-pointer">
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
