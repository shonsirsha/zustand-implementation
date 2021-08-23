import TodosView from "./components/TodosView";
import TodoCreator from "./components/TodoCreator";
import "./App.css";

function App() {
  return (
    <div className="App">
    <div className="flex">
      <TodosView />
      <TodoCreator />
    </div>
    <p>
      State (todos) is shared & managed globally between: Component 1 & 2
      using Zustand.
    </p>
    <kbd>Parent Component (App.tsx)</kbd>
  </div>
  );
}

export default App;
