import React from 'react';
import { DeleteAxiosTodo } from './Axios';

export default function TodoCreateList(props) {
  const todoList = props.todoList.map(todo => {
    return (
      <div key={todo.id} className='todo'>
        <span>{todo.content} </span>
        <button onClick={() => DeleteAxiosTodo(todo.id)
          .then(resp => {
            console.log(resp.status);
          })
          .catch(error => {
            console.log(error);
          })
        }>X</button>
      </div>
    );
  });

  return (
    <div className='todoContainer'>
      {todoList}
    </div>
  );
}
