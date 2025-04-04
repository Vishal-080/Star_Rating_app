import React from "react";

const Todo = () => {
  return (
    <div className="bg-fuchsia-300 w-6/12 my-8 mx-auto border-2 border-fuchsia-600 text-black text-center p-4">
      <h1>My Todo App</h1>
      <input type="text" placeholder="Enter Your Task Here..." />
      <button>Add Todo</button>
      <div></div>
    </div>
  );
};

export default Todo;
