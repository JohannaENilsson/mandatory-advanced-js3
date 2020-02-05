import React from 'react';

export default function TodoForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <label htmlFor='todo'>What todo: </label>
        <textarea
          id='todo'
          type='text'
          name='text'
          min='1'
          value={props.content}
          onChange={props.handleInput}
        />
      </div>
      <div>
        <button  type='submit' htmlFor='add todo'>Add todo</button>
      </div>
    </form>
  );
}
