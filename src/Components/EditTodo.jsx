import React, { useState } from "react";

function EditTodo({ todo, setTodos }) {
  const [editTodoInput, setEditTodoInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleEditTodo = () => {
    setIsOpen(!isOpen);
    console.log(todo.title);
    setTodos((prevTodos) => [...prevTodos, todo]);
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
