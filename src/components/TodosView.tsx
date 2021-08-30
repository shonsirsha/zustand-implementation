import { FC } from "react";
import { useTodoStore } from "../store";
const TodosView: FC = () => {
  const todos = useTodoStore(state => state.todos);
  const deleteTodo = useTodoStore(state => state.deleteTodo);
  const changeTodoStatus = useTodoStore(state => state.changeTodoStatus);
  return (
    <div className="todosView">
      <h1>My Todos (All):</h1>
      {todos.length === 0 && <p>No todos yet</p>}
      {todos.map((todo, ix) => (
        <div className="flex" key={todo.id}>
          <p
            className={`${todo.completed && `done`}`}
            onClick={() => changeTodoStatus(todo.id)}
          >
            {ix + 1}. {todo.content}
          </p>

          <button className="del" onClick={() => deleteTodo(todo.id)}>
            Delete
          </button>
        </div>
      ))}
      <kbd> Component 2 (TodosView.tsx)</kbd>
    </div>
  );
};

export default TodosView;
