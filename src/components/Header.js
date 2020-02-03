import React from 'react';
import jwt from 'jsonwebtoken';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  componentDidMount() {
    if (this.props.token) {
      let decoded = jwt.decode(this.props.token);
      console.log(decoded);
      this.setState({email: decoded.email});
    }
  }

  render() {
    console.log(this.props.token);

    return <h2>Welcome {this.state.email}</h2>;
  }
}

export default Header;
