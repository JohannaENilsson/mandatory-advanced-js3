import React from "react";
import "./App.css";
import CreateAccount from './components/CreateAccount';
import Login from './components/Login';
import Nav from './components/Nav';
import { Route, BrowserRouter as Router } from "react-router-dom";


class App extends React.Component {
  render() {
    return (
    <div className="App">
      <Router>
        <header>
          <Nav />
        </header>

        <Route exact path='/' component={Login} />
        <Route path='/CreateAccount' component={CreateAccount} />
        
      </Router>

      
      
    </div>
    );
  }
}

export default App;
