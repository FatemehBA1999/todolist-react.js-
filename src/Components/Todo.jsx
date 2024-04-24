import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { TrashIcon } from "@heroicons/react/16/solid";

function Todo({ todos, setTodos }) {
  const handleDelete = (id) => {
    const todoLists = todos.filter((todo) => todo.id !== id);
    setTodos(todoLists);
  };
  console.log(todos);
  return (
    <div className="todos">
      {todos.map((todo) => (
        <div className="todo" key={todo.id}>
          <p className="content">{todo.title}</p>
          <div className="icons">
            <PencilSquareIcon
              className="icon"
              onClick={() => handleEdit(todo.id)}
            />
            <TrashIcon
              className="red icon"
              onClick={() => handleDelete(todo.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Todo;
