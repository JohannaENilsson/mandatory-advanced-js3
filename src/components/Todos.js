import React from 'react';
import TodoLogout from './TodoLogout.js';

import TodoHeader from './TodoHeader.js';
import TodoCreateList from './TodoCreateList';
import TodoPutTodo from './TodoPutTodo';

import { GetAxiosTodo, PostAxiosTodo } from './Axios';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { token$, updateToken } from './Store';

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      token: token$.value
    };
  }

  componentDidMount() {
    this.subscription = token$.subscribe(token => {
      this.setState({ token });
    });

    GetAxiosTodo(this.state.token)
      .then(resp => {
        this.setState({ todoList: resp.data.todos });
        console.log(resp.status);
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  

  render() {
    console.log(this.state.todoList);
    return (
      <>
        <Helmet>
          <title>Todos</title>
        </Helmet>
        <TodoHeader token={this.state.token} />
        <div className='container'>
        
        <TodoPutTodo />

          <TodoCreateList todoList={this.state.todoList} />

          <TodoLogout />
        </div>
      </>
    );
  }
}

export default Todos;
