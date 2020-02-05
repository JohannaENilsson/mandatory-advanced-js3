import React from 'react';
import TodoCreateList from './TodoCreateList';
import { GetAxiosTodo } from './Axios';

class TodosRenderList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      error: false,
    };
  }

  componentDidMount() {
    GetAxiosTodo(this.props.token)
      .then(resp => {
        this.setState({ todoList: resp.data.todos });
        console.log(resp.status);
      })
      .catch(error => {
        console.log(error);
        this.setState( {error: true} );
      });
  }

  render() {
    console.log(this.state.todoList);
    console.log(this.state.todoList.length);
    console.log(this.state.error);

    return (
      <>
        {this.state.error && (<p style={{ color: 'red'}} className='error'> Could not get your todos </p> )}
        {this.state.todoList.length === 0 && (<p style={{ color: 'green'}} className='success'> You have no todos</p> )}
        <TodoCreateList todoList={this.state.todoList} />
      </>
    );
  }
}

export default TodosRenderList; 
