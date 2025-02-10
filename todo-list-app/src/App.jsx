import './App.css'
import TodoList from './TodoList'

function App() {
  function createTodo(text) {
    setIncompleteTodos([...incompleteTodos, { text, isCompleted: false }]);
  }

  return (
    <>
    <TodoList />
    </>
  );
}

export default App