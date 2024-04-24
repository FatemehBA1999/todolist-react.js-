import React from "react";
import Todo from "./Todo";
import HeaderTodo from "./HeaderTodo";
import { useState } from "react";
function ToDoLists() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="container">
      <div className="todo__lists">
        <HeaderTodo setTodos={setTodos} />
        <Todo todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default ToDoLists;
