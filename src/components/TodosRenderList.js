import React from 'react';
import TodoCreateList from './TodoCreateList';
import { GetAxiosTodo, DeleteAxiosTodo } from './Axios';

class TodosRenderList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      error: false
    };

    this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
 
  }

  componentDidMount() {
    this.handleUpdate();
  }

  handleDeleteTodo(id) {
    DeleteAxiosTodo(id)
      .then(resp => {
        console.log(resp.status);
        this.handleUpdate();
      })
      .catch(error => {
        console.log(error);
      });
  }
  handleUpdate() {
    GetAxiosTodo(this.props.token)
      .then(resp => {
        this.setState({ todoList: resp.data.todos });
        console.log(resp.status);
      })
      .catch(error => {
        console.log(error);
        this.setState({ error: true });
      });
  }

  componentDidUpdate(prevProps){
    if(this.props.renderAgain !== prevProps.renderAgain){
      this.handleUpdate();
    } 
  }


  render() {
    console.log(this.state.todoList);
    console.log(this.state.todoList.length);
    // console.log(this.state.error);

   
    return (
      <>
        {this.state.error && (
          <div className='error message '> Could not get your todos </div>
        )}
        {this.state.todoList.length === 0 && (
          <div className='success message '> You have no todos!</div>
        )}
        {this.state.todoList.length > 5 && (
          <div className='error message '>
            {' '}
            Stop procrastinating.... Start do your todos!
          </div>
        )}
        <TodoCreateList
          todoList={this.state.todoList}
          handleDeleteTodo={this.handleDeleteTodo}
        />
      </>
    );
  }
}

export default TodosRenderList;
