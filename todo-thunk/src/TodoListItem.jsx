import { useDispatch } from "react-redux";
import { markTodoAsCompleted } from "./todosSlice";
import { deleteTodo } from "./thunks";

import styled from 'styled-components';

const CardContainer=styled.div`
  ${props=> props.important && 'background-color: yellow;'}
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.5);
  padding: 16px;
  margin: 10px;
`

export default function TodoListItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <CardContainer important={todo.text.endsWith('!')}>
      <h3>{todo.text}</h3>
      {todo.isCompleted && <p>Complete!</p>}
      {todo.isCompleted
        ? <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete Item</button>
        : <button onClick={() => dispatch(markTodoAsCompleted(todo.text))}>Mark as Completed</button>}
    </CardContainer>
  );
}