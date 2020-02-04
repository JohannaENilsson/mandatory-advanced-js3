import React from 'react';
import { DeleteAxiosTodo } from './Axios';

export default function TodoCreateList(props) {
  const todoList = props.todoList.map(todo => {
    return (
      <li key={todo.id}>
        {todo.content}
        <button onClick={() => DeleteAxiosTodo(todo.id)
          .then(resp => {
            console.log(resp.status);
          })
          .catch(error => {
            console.log(error);
          })
        }>X</button>
      </li>
    );
  });

  return (
    <div>
      <ul>{todoList}</ul>
    </div>
  );
}
