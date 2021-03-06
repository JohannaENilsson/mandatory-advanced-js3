import React from 'react';

export default function TodoForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <label>
          What todo:
          <input
            id='todo'
            type='text'
            name='text'
            min='1'
            value={props.content}
            onChange={props.handleInput}
          />
        </label>
      </div>
      <div>
        <button type='submit'>Add todo</button>
      </div>
    </form>
  );
}
