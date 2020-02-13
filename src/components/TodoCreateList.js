import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function TodoCreateList(props) {
  const todoList = props.todoList.map(todo => {
    return (
      <CSSTransition key={todo.id} timeout={800} classNames='todo todoAnimate'>
      <div className='todo'>
        <span>{todo.content} </span>
        <button className='deleteBtn'
          onClick={() => {
            props.handleDeleteTodo(todo.id);
          }}
        >
          <i className="material-icons">delete</i>
        </button>
      </div>
      </CSSTransition>
    );
  });

  return ( 
  <div className='todoContainer'>
    <TransitionGroup className='todoContainer'>
    {todoList}
    </TransitionGroup>
    </div>
    );
}
