import React from 'react';


export default function TodoCreateList(props) {
  
  
  
    const todoList = props.todoList.map(todo => {
        return (
        <div key={todo.id} className='todo'>
          <span>{todo.content} </span>
          <button onClick={() => {props.handleDeleteTodo(todo.id)}}>X</button>
        </div>
      );
    });

    return <div className='todoContainer'>{todoList}</div>;
  }

