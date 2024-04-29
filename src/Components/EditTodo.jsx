import React, { useState } from "react";

function EditTodo({ todo, setTodos,isOpen }) {
  const [editTodoInput, setEditTodoInput] = useState("");
  const handleEditTodo = (e) => {
    e.preventDefault();
    setTodos((prevTodos) => [...prevTodos, todo]);
    console.log(isOpen);
    console.log(todo);
  };
  return (
    <div className="content__search">
      <form className="search__todo" onSubmit={handleEditTodo}>
        <input
          name="todo_Input"
          value={editTodoInput}
          placeholder="update task"
          className="search"
          type="text"
          onChange={(e) => setEditTodoInput(e.target.value)}
        />
        <button className="btn btn-primary">Done</button>
      </form>
    </div>
  );
}

export default EditTodo;
