import React from 'react';
import jwt from 'jsonwebtoken';
import TodoLogout from './TodoLogout.js';

class TodoHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
  }

  componentDidMount() {
    if (this.props.token) {
      let decoded = jwt.decode(this.props.token);
      this.setState({ email: decoded.email });
    }
  }

  render() {
    return (
      <>
        <h2>Welcome {this.state.email}</h2>
        <TodoLogout />
      </>
    );
  }
}

export default TodoHeader;
