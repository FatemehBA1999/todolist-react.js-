import React from "react";
import Todo from "./Todo";
import HeaderTodo from "./HeaderTodo";
import { useState } from "react";
import EditTodo from "./EditTodo";
function ToDoLists() {
  const [todos, setTodos] = useState([]);
  const findEditTodo = todos.find((todo) => todo.edit);
  console.log(findEditTodo);
  return (
    <div className="container">
      <div className="todo__lists">
        <HeaderTodo setTodos={setTodos} />
        <EditTodo todo={findEditTodo} setTodos={setTodos} />
        <Todo todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default ToDoLists;
