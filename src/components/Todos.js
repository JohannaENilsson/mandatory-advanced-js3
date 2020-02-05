import React from 'react';

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
      token: token$.value,
      loading: true,
    };
  }

  componentDidMount() {
    this.subscription = token$.subscribe(token => {
      this.setState({ token, loading: false });
    });
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Todos</title>
        </Helmet>
        <TodoHeader token={this.state.token} />
        
        <div className='container'>
        
          <TodoPostTodo />
          {this.state.loading  && (<div className='loading message'> Loading... </div> )}
          <TodosRenderList  token={this.state.token}/>

        </div>
        
      </>
    );
  }
}

export default Todos;
