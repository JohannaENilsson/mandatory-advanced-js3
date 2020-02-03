import React from 'react';
import CreateAccount from './components/CreateAccount';
import Login from './components/Login';
import Nav from './components/Nav';
import Todos from './components/Todos';
import './App.css';

import { Route, BrowserRouter as Router } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <header>
            <Nav />
          </header>

          <Route exact path='/' component={Login} />
          <Route path='/create-account' component={CreateAccount} />
          <Route path='/todos' component={Todos} />
        </Router>
      </div>
    );
  }
}

export default App;
