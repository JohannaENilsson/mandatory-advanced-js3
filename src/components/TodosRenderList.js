import React from 'react';
import TodoCreateList from './TodoCreateList';
import { GetAxiosTodo, DeleteAxiosTodo } from './Axios';
import {updateToken} from './Store';

class TodosRenderList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      error: false,
      loading: true,
      deleteError: false
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
        this.handleUpdate();
      })
      .catch(error => {
        this.setState({ deleteError: true });
        setTimeout(() => {
          this.setState({ deleteError: false });
        }, 2500);
      });
  }
  handleUpdate() {
    GetAxiosTodo(this.props.token)
      .then(resp => {
        this.setState({ todoList: resp.data.todos, loading: false });
        if (this.state.todoList.length) {
          this.props.parentCallback(this.state.todoList.length);
        }
      })
      .catch(error => {
        this.setState({ error: true, loading: false });
        setTimeout(() => {
          updateToken(null);
        }, 4000);
        
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
          Stop procrastinating... <br /> Start do your todos!
        </div>
      );
    }
    if (
      this.state.todoList.length > 19 &&
      this.state.error === false &&
      this.state.loading === false
    ) {
      msgDoingTodos = <div className='error'>You can't add more todos...</div>;
    }
    if (
      this.state.todoList.length === 0 &&
      this.state.error === false &&
      this.state.loading === false
    ) {
      msgDoingTodos = <div className='success'> You have no todos!</div>;
    }

    if (this.state.error === true && this.state.loading === false) {
      msgDoingTodos = (
        <div className='error'>
          You are not logged in anymore, you will be redirected.
        </div>
      );

    }
    if (this.state.deleteError) {
      msgDoingTodos = (
        <div className='error'>
          Todo is already deleted.
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
