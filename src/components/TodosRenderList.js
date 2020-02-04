import React from 'react';
import TodoCreateList from './TodoCreateList';
import { GetAxiosTodo } from './Axios';

class TodosRenderList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: []
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
      });
  }

  render() {
    console.log(this.state.todoList);

    return (
      <>
      
        <TodoCreateList todoList={this.state.todoList} />
      </>
    );
  }
}

export default TodosRenderList; 
