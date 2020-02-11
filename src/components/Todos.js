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
      renderAgain: false
    };

    this.passingData = this.passingData.bind(this);
  }

  componentDidMount() {
    this.subscription = token$.subscribe(token => {
      this.setState({ token });
    });
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }
  passingData(childData) {
    console.log('I got data ', childData);
    this.setState({ renderAgain: true });
    if (this.state.renderAgain) {
      this.setState({ renderAgain: false });
    }
  }

  render() {
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
          <TodoPostTodo parentCallback={this.passingData} />
          </div>
          <TodosRenderList
            token={this.state.token}
            renderAgain={this.state.renderAgain}
          />
        </div>
      </>
    );
  }
}

export default Todos;
