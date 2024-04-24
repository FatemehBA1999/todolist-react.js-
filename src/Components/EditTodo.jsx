import React, { useState } from "react";

function EditTodo({ editTodo }) {
  const [editTodoInput, setEditTodoInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleEditTodo = () => {
    editTodo.title = editTodoInput;
    setIsOpen((open) => !open);
    console.log(editTodo);
  };
  return (
    <div className={`${isOpen ? "content__search" : ""}`}>
      <div className="search__todo">
        <input
          name="todo_Input"
          value={editTodoInput}
          placeholder="what is the task today"
          className="search"
          type="text"
          onChange={(e) => setEditTodoInput(e.target.value)}
        />
        <button onClick={handleEditTodo} className="btn btn-primary">
          Done
        </button>
      </div>
    </div>
  );
}

export default EditTodo;
