import React from 'react';
import TodoLogout from './TodoLogout.js';
import TodosRenderList from './TodosRenderList';
import TodoHeader from './TodoHeader.js';
import TodoPostTodo from './TodoPostTodo.js';

import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { token$, updateToken } from './Store';

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: token$.value
    };
  }

  componentDidMount() {
    this.subscription = token$.subscribe(token => {
      this.setState({ token });
    });
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  render() {
    console.log(this.state.token);
    return (
      <>
        <Helmet>
          <title>Todos</title>
        </Helmet>
        <TodoHeader token={this.state.token} />
        <div className='container'>
          <TodoPostTodo />
          
          <TodosRenderList  token={this.state.token}/>
          <TodoLogout />
        </div>
      </>
    );
  }
}

export default Todos;
