import React from 'react';
import Logout from './Logout.js';
import TodoForm from './TodoForm';
import Header from './Header.js';
import CreateTodoList from './CreateTodoList';

import { GetAxiosTodo, PostAxiosTodo } from './Axios';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { token$, updateToken } from './Store';

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      todoList: [],
      token: token$.value
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.subscription = token$.subscribe(token => {
      this.setState({ token });
    });

    GetAxiosTodo(this.state.token)
      .then(resp => {
        this.setState({todoList: resp.data.todos})
        console.log(resp.status);
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  handleInput(e) {
    // console.log(e.target.value);
    this.setState({ content: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('Btn was clicked');
    let todo = {content: this.state.content};

    PostAxiosTodo(todo)
      .then(resp => {
        console.log(resp.status);
        console.log(resp.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    console.log(this.state.todoList);
    return (
      <>
        <Helmet>
          <title>Todos</title>
        </Helmet>
        <Header token={this.state.token} />
        <div className='container'>
          <TodoForm
            handleInput={this.handleInput}
            handleSubmit={this.handleSubmit}
            ButtonText='Add todo'
          />

          <CreateTodoList todoList={this.state.todoList} />

          <Logout />
        </div>
      </>
    );
  }
}

export default Todos;
