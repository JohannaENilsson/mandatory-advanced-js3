import React from 'react';
import CreateAccount from './components/CreateAccount';
import Login from './components/Login';
import Todos from './components/Todos';
import './App.css';
import './Msg.css';
import './Header.css';
import './Animate.css';

import { Route, BrowserRouter as Router } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <Route exact path='/' component={Login} />
          <Route path='/create-account' component={CreateAccount} />
          <Route path='/todos' component={Todos} />
        </Router>
      </div>
    );
  }
}

export default App;
