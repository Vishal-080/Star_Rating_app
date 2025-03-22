import React from "react";

const Counter = () => {
  return (
    <div className="border border-amber-300 w-6/12 m-auto text-center my-8">
      <h1 className="font-medium text-xl">Counter App</h1>
      <p>{Count}</p>
      <div className="my-4">
        <button className="border p-2 rounded-lg mx-2">Add ➕</button>
        <button className="border p-2 rounded-lg mx-2">Substract ➖</button>
        <button className="border p-2 rounded-lg mx-2">Reset 🔴</button>
      </div>
    </div>
  );
};

export default Counter;
