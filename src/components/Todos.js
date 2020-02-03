import React from 'react';
import Logout from './Logout.js';
import Form from './Form';

import { GetAxiosTodo } from './Axios';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Todos</title>
        </Helmet>
        <div className='container'>
          Todo
          <Logout />
        </div>
      </>
    );
  }
}

export default Todos;
