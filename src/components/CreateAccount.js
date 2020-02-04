import React from 'react';
import Form from './Form';

import { PostAxiosRegister } from './Axios';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';

class CreateAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: false, 
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let { email, password } = this.state;

    console.log(email, password);
    PostAxiosRegister(email, password)
      .then(resp => {
        console.log(resp.status);
 
      })
      .catch(error => {
        console.log(error);
        this.setState({ error: true });
      });
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Create Account</title>
        </Helmet>
        <div className='container'>
          <Form
            handleSubmit={this.handleSubmit}
            handleInput={this.handleInput}
            submitButtonText='Sign up'
          />
          {this.state.error && (
            <p style={{ color: 'red' }} className='error'>
              Password must be at least 5 characters long.
            </p>
          )}
        </div>
      </>
    );
  }
}

export default CreateAccount;
