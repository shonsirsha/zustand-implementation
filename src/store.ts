import create from "zustand";
import { TodoStore } from "./type";
const useTodoStore = create<TodoStore>((set) => ({
  todos: [{ id: 213213, content: "asdsad", completed: false }],
  addTodo: (content: string) => {
    set((state) => ({
      todos: [
        ...state.todos,
        {
          id: Date.now(),
          content,
          completed: false,
        },
      ],
    }));
  },
  deleteTodo: (id: number) => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  },
  changeTodoStatus: (id: number) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  },
}));
export { useTodoStore };
