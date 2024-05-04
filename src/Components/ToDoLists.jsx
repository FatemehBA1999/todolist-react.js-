import React from "react";
import Todo from "./Todo";
import HeaderTodo from "./HeaderTodo";
import { useState } from "react";
import EditTodo from "./EditTodo";
function ToDoLists() {
  const [todos, setTodos] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [editTodo, setEditTodo] = useState({});
  console.log(editTodo);
  return (
    <div className="container">
      <div className="todo__lists">
        <HeaderTodo setTodos={setTodos} />
        {isOpen ? (
          <EditTodo
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        ) : (
          ""
        )}
        <Todo
          isOpen={isOpen}
          setEditTodo={setEditTodo}
          setIsOpen={setIsOpen}
          todos={todos}
          setTodos={setTodos}
        />
      </div>
    </div>
  );
}

export default ToDoLists;
