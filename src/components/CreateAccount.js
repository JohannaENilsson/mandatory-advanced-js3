import React from "react";

class CreateAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput() {
    console.log("Input");
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("Login");
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <input type="email" value={this.state.email} onChange={this.handleInput}/>
          <input type="password" value={this.state.password} onChange={this.handleInput}/>
          <input type="submit" value="Register" />
        </form>
      </div>
    );
  }
}

export default CreateAccount;
