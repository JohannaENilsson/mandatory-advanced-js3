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
      renderAgain: false,
      fullList: false
    };

    this.passingData = this.passingData.bind(this);
    this.stopAddingTodos = this.stopAddingTodos.bind(this);
  }

  componentDidMount() {
    this.subscription = token$.subscribe(token => {
      this.setState({ token });
    });
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }
  passingData() {
    this.setState({ renderAgain: true });
    if (this.state.renderAgain) {
      this.setState({ renderAgain: false });
    }
  }

  stopAddingTodos(listLengt) {
    if (listLengt === 20) {
      this.setState({ fullList: true });
    } else {
      this.setState({ fullList: false });
    }
  }

  render() {
    if (!this.state.token) {
      return <Redirect to='/' />;
    }
    return (
      <>
        <Helmet>
          <title>Todos</title>
        </Helmet>
        <header>
          <TodoHeader token={this.state.token} />
        </header>

        <div className='container'>
          <div className='WrapperForm'>
            <TodoPostTodo
              parentCallback={this.passingData}
              value={this.state.fullList}
            />
          </div>
          <TodosRenderList
            token={this.state.token}
            renderAgain={this.state.renderAgain}
            parentCallback={this.stopAddingTodos}
          />
        </div>
      </>
    );
  }
}

export default Todos;
