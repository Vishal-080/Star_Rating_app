import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from 'react-toastify';
import { AiFillDelete } from "react-icons/ai";


const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");

  const handleTodoChange = (e) => {
    setTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if(todo !== ""){
      setTodoList([...todoList, todo]);
      setTodo("");
      toast("Task Added to Todo List !")
    }
  };

  const handleDelete = (index) => {
    let filter = todoList.filter((item,id) => id!==index);
    setTodoList(filter);
    toast.error("Task Deleted Successfully");
  }

  useEffect(()=>{
    let timer = setTimeout(() => {
      if(todo !== ""){
        console.log("hello from setTimeout");
      }
    }, 4000);

    return ()=>{
      clearTimeout(timer);
    }

  },[todo]);

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
          <div key={index} className="p-2 flex justify-between items-center border text-center">
            <div>
              <p>{index+1}{"."}{item}</p>
            </div>
            <div className="cursor-pointer" onClick={()=>handleDelete(index)}><AiFillDelete/></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;