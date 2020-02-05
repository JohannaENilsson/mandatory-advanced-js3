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
      loading: true,
      renderAgain: false,
    };

    this.passingData = this.passingData.bind(this);
  }

  componentDidMount() {
    this.subscription = token$.subscribe(token => {
      this.setState({ token, loading: false });
    });
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }
  passingData(childData){

      console.log('I got data ', childData);
      this.setState({renderAgain: true});
    

  }

  render() {
    return (
      <>
        <Helmet>
          <title>Todos</title>
        </Helmet>
        <TodoHeader token={this.state.token} />
        
        <div className='container'>
        
          <TodoPostTodo parentCallback = {this.passingData} />
          {this.state.loading  && (<div className='loading message'> Loading... </div> )}
          <TodosRenderList  token={this.state.token} renderAgain={this.state.renderAgain}/>

        </div>
        
      </>
    );
  }
}

export default Todos;
