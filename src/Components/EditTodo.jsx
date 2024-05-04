import React, { useState } from "react";
function EditTodo({ editTodo, isOpen, setIsOpen }) {
  const [editTodoInput, setEditTodoInput] = useState(editTodo.title);
  const handleEditTodo = (e) => {
    e.preventDefault();
    isOpen ? (editTodo.title = editTodoInput) : "";
    console.log(editTodo.title);
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
function ShowEdit({ editTodoInput, setEditTodoInput, handleEditTodo }) {
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
