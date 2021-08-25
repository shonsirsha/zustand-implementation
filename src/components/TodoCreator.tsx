import { FC, useRef } from "react";
import { useTodoStore } from "../store";
const TodoCreator: FC = () => {
  const { addTodo } = useTodoStore();
  const handleCreateTodo = (todoText: string) => {
    if (textAreaRef.current && textAreaRef.current.value) {
      addTodo(todoText);
      textAreaRef.current.value = "";
    }
  };
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  return (
    <div className="todoCreator">
      <h1>Create a new todo</h1>
      <textarea ref={textAreaRef} placeholder="Todo detail..." />
      <button
        onClick={() =>
          handleCreateTodo(
            textAreaRef.current ? textAreaRef.current?.value : ""
          )
        }
      >
        Create todo
      </button>
      <kbd>Component 1 (TodoCreator.tsx)</kbd>
    </div>
  );
};

export default TodoCreator;
