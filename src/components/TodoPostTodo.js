import React from 'react';
import TodoForm from './TodoForm';
import { PostAxiosTodo } from './Axios';

export default class TodoPostTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      error: 0
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetErrorMsg = this.resetErrorMsg.bind(this);
  }

  handleInput(e) {
    this.setState({ content: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.content.length === 0 || this.state.content.length > 100) {
      this.setState({ error: 1 });
      setTimeout(() => {
        this.resetErrorMsg();
      }, 2500);
    }
    if (!this.props.value) {
      if (this.state.content.replace(/ /g, '')) {
        if (this.state.content.length > 0 && this.state.content.length < 101) {
          let todo = { content: this.state.content };

          PostAxiosTodo(todo)
            .then(resp => {
              this.props.parentCallback(resp);
              this.setState({ content: '' });
            })
            .catch(err => {
              this.setState({ error: 2 });
            });
        }
      }
    }
  }

  resetErrorMsg() {
    this.setState({ error: 0 });
  }

  render() {
    let msgDoingTodos = '';
    if (this.state.error === 1) {
      msgDoingTodos = (
        <div className='error'>Todo must be between 1-100 characters</div>
      );
    } else if (this.state.error === 2) {
      msgDoingTodos = (
        <div className='error'>Could not add the todo. Try sign in again.</div>
      );
    }
    return (
      <>
        <TodoForm
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
          content={this.state.content}
        />
        {msgDoingTodos}
      </>
    );
  }
}
