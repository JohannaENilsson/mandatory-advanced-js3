import React from 'react';
import Logout from './Logout.js';
import TodoForm from './TodoForm';
import Header from './Header.js';

import { GetAxiosTodo, PostAxiosTodo } from './Axios';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { token$, updateToken } from './Store';


class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
      token: token$.value
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.subscription = token$.subscribe(token => {
      this.setState({ token });
    });
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  handleInput(e) {
    console.log(e.target.value);
    this.setState({ todo: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('Btn was clicked');

    PostAxiosTodo(this.state.todo)
      .then(resp => {
        console.log(resp.status);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    console.log(this.state.token);
    return (
      <>
        <Helmet>
          <title>Todos</title>
        </Helmet>
        <Header token={this.state.token}/>
        <div className='container'>
          
          <TodoForm
            handleInput={this.handleInput}
            handleSubmit={this.handleSubmit}
            ButtonText='Add todo'
          />

          <Logout />
        </div>
      </>
    );
  }
}

export default Todos;
