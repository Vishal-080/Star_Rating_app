import React from "react";

const Counter = () => {
  return (
    <div className="border border-amber-300 w-6/12 m-auto text-center">
      <h1>Counter App</h1>
      <div>
        <button>Add ➕</button>
        <button>Reset 🔴</button>
        <button>Substract ➖</button>
      </div>
    </div>
  );
};

export default Counter;
