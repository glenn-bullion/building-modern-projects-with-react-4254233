import { useSelector } from "react-redux";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import {
  getTodosLoading,
  getCompletedTodos,
  getIncompleteTodos,
} from "./selectors";

export default function TodoList() {
  const todosAreLoading = useSelector(getTodosLoading);
  const completeTodos = useSelector(getCompletedTodos);
  const incompleteTodos = useSelector(getIncompleteTodos);

  return (
    <div>
      <h1>My Todos</h1>
      <NewTodoForm />
      {todosAreLoading ? <p>Todos are loading...</p> : <></>}
      <h3>Completed:</h3>
      {completeTodos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
      <h3>Incomplete:</h3>
      {incompleteTodos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
}
