import React from 'react';

export default function Form(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type='email'
        name='email'
        value={props.email}
        onChange={props.handleInput}
      />
      <input
        type='password'
        name='password'
        min='5'
        value={props.password}
        onChange={props.handleInput}
      />
      <input type='submit' value={props.submitButtonText} />
    </form>
  );
}
