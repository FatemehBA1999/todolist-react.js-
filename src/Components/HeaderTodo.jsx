import { useState } from "react";

function HeaderTodo({ setTodos }) {
  const [todoInput, setTodoInput] = useState("");
  const [count, setCount] = useState(0);
  const handleTodo = (e) => {
    e.preventDefault();
    if (!todoInput) return;
    const newTodo = {
      id: count,
      title: todoInput,
      edit: false,
      createdAt: new Date().toISOString(),
    };
    setCount((c) => c + 1);
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setTodoInput("");
  };
  return (
    <div>
      <div className="todo__header">
        <h2 className="todo__title">Get Thing Done!</h2>
        <div className="content__search">
          <form className="search__todo" onSubmit={handleTodo}>
            <input
              name="todo_Input"
              value={todoInput}
              placeholder="what is the task today"
              className="search"
              type="text"
              onChange={(e) => setTodoInput(e.target.value)}
            />
            <button className="btn btn-primary">Add Task</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HeaderTodo;
