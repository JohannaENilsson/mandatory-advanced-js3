import React from 'react';

export default function Form(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <span>Email: </span>
        <input
          type='email'
          name='email'
          value={props.email}
          onChange={props.handleInput}
        />
      </div>
      <div>
        <span>Password: </span>
        <input
          type='password'
          name='password'
          min='5'
          value={props.password}
          onChange={props.handleInput}
        />
      </div>
      <div>
        <input type='submit' value={props.submitButtonText} />
      </div>
    </form>
  );
}
