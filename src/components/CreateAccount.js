import React from 'react';
import Form from './Form';

import { PostAxiosRegister, PostAxiosAuth } from './Axios';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';

class CreateAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      redirect: false,
      error: null
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

    PostAxiosRegister(email, password)
      .then(resp => {
        console.log(resp.status);
        this.setState({ redirect: true });
      })
      .catch(error => {
        console.log(error.response.data);
        if (error.response.data.message === 'User with that email address exists') {
          this.setState({ error: 0 });
        } else if (error.response.data.message === 'Validation error') {
          this.setState({ error: 1 });
        } else if (error.response.status === 500) {
          this.setState({ error: 2 });
        }
      });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to='/' />;
    }

    let errorMsg;
    if (this.state.error === 0) {
      errorMsg = (
        <div className='error message'>
          A user with that email address already exists.
        </div>
      );
    } else if (this.state.error === 1) {
      errorMsg = (
        <div className='error message'>
          Password must be between 3-40 characters long.
        </div>
      );
    } else if (this.state.error === 2) {
      errorMsg = (
        <div className='error message'>
          Could not connect to server please try again in a few minutes.
        </div>
      );
    }

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
          {errorMsg}
        </div>
      </>
    );
  }
}

export default CreateAccount;
