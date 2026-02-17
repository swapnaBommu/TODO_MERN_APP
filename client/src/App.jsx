import { TodoProvider } from "./context/TodoContext"
import Todo from "./components/Todo.jsx";

function App() {
  return (
    <TodoProvider>
      <Todo />
    </TodoProvider>
  );
}

export default App;