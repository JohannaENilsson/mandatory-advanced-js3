import React from 'react';
import { Redirect } from 'react-router-dom';
import { token$, updateToken } from './Store';

class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: token$.value
    };

    this.handleLogOut = this.handleLogOut.bind(this);
  }

  componentDidMount(){
    this.subscription = token$.subscribe( token => {
      this.setState({ token });
    });
  }

  componentWillUnmount(){
    this.subscription.unsubscribe();
  }

  handleLogOut() {
    updateToken(null);
    console.log('click', this.state.token);
  }

  render() {
      if(!this.state.token){
          return <Redirect to='/' />
      }
    return <input type='submit' value='LogOut' onClick={this.handleLogOut}/>;
  }
}

export default Logout;
