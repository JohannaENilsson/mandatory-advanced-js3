import React from 'react';

export default function Form(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <label htmlFor='email'>Email: </label>
        <input
          id='email'
          type='email'
          name='email'
          value={props.email}
          onChange={props.handleInput}
        />
      </div>
      <div>
        <label htmlFor='password'>Password: </label>
        <input
          id='password'
          type='password'
          name='password'
          min='5'
          value={props.password}
          onChange={props.handleInput}
        />
      </div>
      <div>
        <button type='submit'>{props.submitButtonText}</button>
      </div>
    </form>
  );
}
