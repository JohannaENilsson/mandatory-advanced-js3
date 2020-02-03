import React from 'react';
import Logout from './Logout.js';
import TodoForm from './TodoForm';

import { GetAxiosTodo, PostAxiosTodo } from './Axios';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
    
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput(e){
    console.log(e.target.value);
    this.setState({todo: e.target.value});

  }

  handleSubmit(e){
    e.preventDefault();
    console.log('Btn was clicked');

    let todo = this.state.todo;
    console.log(todo);
    PostAxiosTodo(todo)
    .then(resp => {
      console.log(resp.status);
    })
    .catch(err => {
      console.log(err);
    })
    


  }

  render() {
    return (
      <>
        <Helmet>
          <title>Todos</title>
        </Helmet>
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
