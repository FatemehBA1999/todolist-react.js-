import React, { useState } from "react";
import Todo from "./Todo";

function EditTodo({ todo, setTodos, isOpen, setIsOpen }) {
  const [editTodoInput, setEditTodoInput] = useState(todo.title);
  // setEditTodoInput(todo);
  // console.log(todo.title ? "title" : "");
  console.log(editTodoInput);
  console.log(todo.title);
  const handleEditTodo = (e) => {
    e.preventDefault();
    setTodos((prevTodos) => [...prevTodos, todo]);
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {isOpen ? (
        <ShowEdit
          editTodoInput={editTodoInput}
          setEditTodoInput={setEditTodoInput}
          handleEditTodo={handleEditTodo}
        />
      ) : (
        ""
      )}
    </div>
  );
}
function ShowEdit(editTodoInput, setEditTodoInput, handleEditTodo) {
  return (
    <div className="content__all">
      <div className="content__search">
        <form className="search__todo" onSubmit={handleEditTodo}>
          <input
            name="todo"
            value={editTodoInput}
            placeholder="update task"
            className="search"
            type="text"
            onChange={(e) => setEditTodoInput(e.target.value)}
          />
          <button className="btn btn-primary">Done</button>
        </form>
      </div>
    </div>
  );
}
export default EditTodo;
