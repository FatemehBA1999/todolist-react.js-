import React, { useState } from "react";
function EditTodo({ todos, setTodos, editTodo, isOpen, setIsOpen }) {
  const [editTodoInput, setEditTodoInput] = useState(editTodo.title);
  const handleEditTodo = (e) => {
    e.preventDefault();
    isOpen ? (editTodo.title = editTodoInput) : "";
    const newTodos = todos.map((todo) =>
      todo.id === editTodo.id ? { ...todo, title: editTodoInput } : todo
    );
    console.log(newTodos);
    setTodos(newTodos);
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
