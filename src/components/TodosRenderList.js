import React from 'react';
import TodoCreateList from './TodoCreateList';
import { GetAxiosTodo, DeleteAxiosTodo } from './Axios';

class TodosRenderList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      error: false,
      loading: true,
      deleteError: false,
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
        this.setState({deleteError: true});
      });
  }
  handleUpdate() {
    GetAxiosTodo(this.props.token)
      .then(resp => {
        this.setState({ todoList: resp.data.todos, loading: false });
        console.log(resp.status);
      })
      .catch(error => {
        console.log(error);
        this.setState({ error: true, loading: false });
      });
  }

  componentDidUpdate(prevProps) {
    if (this.props.renderAgain !== prevProps.renderAgain) {
      this.handleUpdate();
    }
  }

  render() {
    let msgDoingTodos = '';

    if (this.state.loading) {
      msgDoingTodos = <div className='loading'> Loading... </div>;
    }

    if (
      this.state.todoList.length > 7 &&
      this.state.error === false &&
      this.state.loading === false
    ) {
      msgDoingTodos = (
        <div className='error'>
          Stop procrastinating... <br/> Start do your todos!
        </div>
      );
    }
    if (
      this.state.todoList.length === 0 &&
      this.state.error === false &&
      this.state.loading === false
    ) {
      msgDoingTodos = (
        <div className='success'> You have no todos!</div>
      );
    }

    if (this.state.error === true && this.state.loading === false) {
      msgDoingTodos = (
        <div className='error'>
          Could not get your todos. Try sign in again.
        </div>
      );
    }
    if (this.state.deleteError) {
      msgDoingTodos = (
        <div className='error'>
          Could not delete the todo. Try sign in again.
        </div>
      );
    }

    return (
      <>
      <div className='todoWrapper'>
        {msgDoingTodos}
        <TodoCreateList
          todoList={this.state.todoList}
          handleDeleteTodo={this.handleDeleteTodo}
        />
        </div>
      </>
    );
  }
}

export default TodosRenderList;
