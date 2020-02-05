import React from 'react';
import Form from './Form';

import { PostAxiosRegister, PostAxiosAuth } from './Axios';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { token$, updateToken } from './Store';

class CreateAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      token: token$.value,
      error: false
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.subscription = token$.subscribe(token => {
      this.setState({ token });
    });
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
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
        PostAxiosAuth(email, password)
          .then(resp => {
            console.log(resp.status);
            updateToken(resp.data.token);
          })
          .catch(error => {
            console.log(error);
            console.log(error.status);
            return this.setState({ error: true });
          });
      })
      .catch(error => {
        console.log(error);
        console.log(error.response); //////////////////////
        this.setState({ error: true });
      });
  }

  render() {
    if (this.state.token) {
      return <Redirect to='/todos' />;
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
          {this.state.error && <div className='error message'>Something went wrong.</div>}
        </div>
      </>
    );
  }
}

export default CreateAccount;
