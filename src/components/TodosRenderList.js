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
        {this.state.error && (<div className='error message '> Could not get your todos </div> )}
        {this.state.todoList.length === 0 && (<div className='success message '> You have no todos!</div> )}
        {this.state.todoList.length > 5 && (<div className='error message '> Stop procrastinating.... Start do your todos!</div> )}
        <TodoCreateList todoList={this.state.todoList} />
      </>
    );
  }
}

export default TodosRenderList; 
