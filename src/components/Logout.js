import React from 'react';
import { DeleteAxiosTodo } from './Axios';
import { Redirect } from 'react-router-dom';

class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  render() {
    return <div className='container'>Logout</div>;
  }
}

export default Logout;
