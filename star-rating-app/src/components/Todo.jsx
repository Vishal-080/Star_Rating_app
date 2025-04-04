import React from "react";
import { useState } from "react";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");

  const handleTodoChange = (e) => {
    setTodo(e.target.value);
  };

  const handleAddTodo = () => {
    setTodoList([...todoList, todo]);
    setTodo("");
  };

  return (
    <div className="bg-fuchsia-300 w-6/12 my-8 mx-auto border-2 border-fuchsia-600 text-black text-center p-4 font-mono">
      <h1>My Todo App</h1>
      <input
        type="text"
        placeholder="Enter Your Task Here..."
        className="border indent-2 m-2"
        onChange={handleTodoChange}
        value={todo}
      />
      <button
        className="border m-2 p-2 rounded-2xl bg-amber-200 cursor-pointer"
        onClick={handleAddTodo}
      >
        Add Todo
      </button>
      <div className="w-6/12 m-auto p-2 text-left">
        {todoList.map((item, index) => (
          <h1 key={index}>
            <span>{index + 1}. </span>
            {item}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default Todo;
