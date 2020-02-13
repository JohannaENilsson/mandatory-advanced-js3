import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return (
      <>
      <h1>What to do?</h1>
        <Link className='nav' to='/'>
          Login
        </Link>
        <Link className='nav' to='/create-account'>
          Create Account
        </Link>
      </>
    );
  }
}

export default Nav;
