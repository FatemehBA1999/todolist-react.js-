import { useState } from "react";

function HeaderTodo({ setTodos }) {
  const [todoInput, setTodoInput] = useState("");
  const handleTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      title: todoInput,
      edit: false,
      createdAt: new Date().toISOString(),
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setTodoInput("");
  };
  return (
    <div>
      <div className="todo__header">
        <h2 className="todo__title">Get Thing Done!</h2>
        <div className="content__search">
          <div className="search__todo">
            <input
              name="todo_Input"
              value={todoInput}
              placeholder="what is the task today"
              className="search"
              type="text"
              onChange={(e) => setTodoInput(e.target.value)}
            />
            <button onClick={handleTodo} className="btn btn-primary">
              Add Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTodo;
