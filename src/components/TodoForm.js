import React from 'react';

export default function TodoForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <span>What todo: </span>
        <textarea
          type='text'
          name='text'
          min='5'
          value={props.content}
          onChange={props.handleInput}
        />
      </div>
      <div>
        <input type='submit' value={props.ButtonText} />
      </div>
    </form>
  );
}
