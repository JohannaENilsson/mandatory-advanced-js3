import React from 'react';

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundColorEmail: '',
      backgroundColorPassword: ''
    };
  }
  componentDidUpdate(prevProps) {
    if (this.props.error !== prevProps.error) {
      if (this.props.error === 0) {
        this.setState({
          backgroundColorEmail: 'red',
          backgroundColorPassword: ''
        });
      } else if (this.props.error === 1) {
        this.setState({
          backgroundColorPassword: 'red',
          backgroundColorEmail: ''
        });
      } else if (this.props.error === 3) {
        this.setState({
          backgroundColorPassword: 'red',
          backgroundColorEmail: 'red'
        });
      }
    }
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div>
          <label>
            Email:
            <input
              id='email'
              type='email'
              name='email'
              value={this.props.email}
              onChange={this.props.handleInput}
              style={{ backgroundColor: this.state.backgroundColorEmail }}
            />
          </label>
        </div>

        <div>
          <label>
            Password:
            <input
              id='password'
              type='password'
              name='password'
              min='5'
              value={this.props.password}
              onChange={this.props.handleInput}
              style={{ backgroundColor: this.state.backgroundColorPassword }}
            />
          </label>
        </div>
        <div>
          <button type='submit'>{this.props.submitButtonText}</button>
        </div>
      </form>
    );
  }
}
