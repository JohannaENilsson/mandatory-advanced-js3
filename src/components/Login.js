import React from 'react';
import Form from './Form';
import { PostAxiosAuth } from './Axios';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    console.log(name, value);
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let email = this.state.email;
    let password = this.state.password;
    console.log(email, password);
    PostAxiosAuth(email, password);
  }

  render() {
    return (
      <div className='container'>
        <Form
          handleSubmit={this.handleSubmit}
          handleInput={this.handleInput}
          submitButtonText='Login'
        />
      </div>
    );
  }
}

export default Login;
