import React from 'react';
import Form from './Form';
import Nav from './Nav';
import { PostAxiosAuth } from './Axios';

import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { token$, updateToken } from './Store';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      token: token$.value,
      error: null
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

    PostAxiosAuth(email, password)
      .then(resp => {
        updateToken(resp.data.token);
      })
      .catch(error => {
        if (error.response.status === 500) {
          this.setState({ error: 2 });
        }
        if (error.response.status === 401) {
          this.setState({ error: 3 });
        }
      });
  }

  render() {
    if (this.state.token) {
      return <Redirect to='/todos' />;
    }

    let errorMsg;
    if (this.state.error === 2) {
      errorMsg = (
        <div className='error'>
          Could not connect to server please try again in a few minutes.
        </div>
      );
    } else if (this.state.error === 3) {
      errorMsg = <div className='error'>Wrong password or email.</div>;
    }

    return (
      <>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <header>
          <Nav />
        </header>

        <div className='container'>
          <div className='WrapperForm'>
            <Form
              handleSubmit={this.handleSubmit}
              handleInput={this.handleInput}
              submitButtonText='Login'
              error={this.state.error}
            />
            {errorMsg}
          </div>
        </div>
      </>
    );
  }
}

export default Login;
