import React from 'react';
import Form from './Form';
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

    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount(){
    this.subscription = token$.subscribe( token => {
      this.setState({ token });
    });
  }

  componentWillUnmount(){
    this.subscription.unsubscribe();
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
    let {email, password} = this.state;

    console.log(email, password);
    PostAxiosAuth(email, password)
    .then(resp => {
      
      console.log(resp);
      console.log(resp.status); 
      console.log(resp.data.token);
      updateToken(resp.data.token);

  })
  .catch(error => {
      console.log(error);
      return <p>'Could NOT Auth'</p>;
  });
  }

  render() {

    if(this.state.token){
      return <Redirect to="/todos" />
    }

    
    return (
      <>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <div className='container'>
          <Form
            handleSubmit={this.handleSubmit}
            handleInput={this.handleInput}
            submitButtonText='Login'
          />
        </div>
      </>
    );
  }
}

export default Login;
