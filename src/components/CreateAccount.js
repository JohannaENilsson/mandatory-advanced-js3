import React from 'react';
import Form from './Form';
import Nav from './Nav';

import { PostAxiosRegister } from './Axios';
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
        this.setState({ redirect: true });
      })
      .catch(error => {
        if (
          error.response.data.message === 'User with that email address exists'
        ) {
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
        <div className='error'>
          A user with that email address already exists.
        </div>
      );
    } else if (this.state.error === 1) {
      errorMsg = (
        <div className='error'>
          Password must be between <br/>3-40 characters long.
        </div>
      );
    } else if (this.state.error === 2) {
      errorMsg = (
        <div className='error'>
          Could not connect to server please try again in a few minutes.
        </div>
      );
    }

    return (
      <>
        <Helmet>
          <title>Create Account</title>
        </Helmet>
        <header>
            <Nav />
          </header>
        <div className='container'>
        <div className='WrapperForm'>
          <Form
            handleSubmit={this.handleSubmit}
            handleInput={this.handleInput}
            submitButtonText='Sign up'
            error={this.state.error}
          />
          {errorMsg}
          </div>
        </div>
      </>
    );
  }
}

export default CreateAccount;
