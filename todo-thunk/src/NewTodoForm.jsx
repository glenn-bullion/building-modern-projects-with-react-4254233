import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTodo } from './thunks';
import styled from 'styled-components';

const TodoForm=styled.div`
  background-color: rgba(122, 214, 145, 0.1);
  color:white;
`

export default function NewTodoForm() {
  const [inputText, setInputText] = useState('');
  const dispatch = useDispatch();

  return (
    <TodoForm>
      <input type="text"
        value={inputText}
        onChange={e => setInputText(e.target.value)} />
      <button onClick={() => {
        dispatch(createTodo(inputText));
        setInputText('');
      }}>Create Todo</button>
    </TodoForm>
  )
}