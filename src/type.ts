export type Todo = {
  id: number;
  content: string;
  completed: boolean;
};
export type TodoStore = {
  todos: Todo[];
  addTodo: (description: string) => void;
  deleteTodo: (id: number) => void;
  changeTodoStatus: (id: number) => void;
};
