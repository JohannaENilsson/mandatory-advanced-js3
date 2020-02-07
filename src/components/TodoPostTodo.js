import React from 'react';
import TodoForm from './TodoForm';
import { PostAxiosTodo } from './Axios';

export default class TodoPostTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      error: false,
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({ content: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('Btn was clicked');
    let todo = { content: this.state.content };

    PostAxiosTodo(todo)
      .then(resp => {
        console.log(resp.status);
        console.log(resp.data);
        this.props.parentCallback(resp);
        this.setState({ content: '' });
      })
      .catch(err => {
        console.log(err.response.data);
        this.setState({ error:true });
      });
  }

  render() {
    let msgDoingTodos = '';

    if (this.state.error) {
      msgDoingTodos = (
        <div className='error message '>
          Could not add the todo. Try sign in again.
        </div>
      );
    }
    return (
      <div>
        <TodoForm
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
          content={this.state.content}
        />
        {msgDoingTodos}
      </div>
    );
  }
}
