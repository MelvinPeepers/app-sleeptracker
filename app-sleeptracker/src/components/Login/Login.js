import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../actions";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = event => {
    event.preventDefault();

    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { username, password } = this.state;

    this.props
      .login(username, password)
      .then(() => {
        this.props.history.push("/");
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { username, password } = this.state;
    const { loggingIn, errorMessage } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        {errorMessage && <p className='errorMessage'>{errorMessage}</p>}
        <input
          type='text'
          name='username'
          placeholder='Username'
          value={username}
          onChange={this.handleChange}
        />
        <br />
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={password}
          onChange={this.handleChange}
        />
        <br />
        {loggingIn ? (
          <p>Logging in...</p>
        ) : (
          <button type='submit'>Login</button>
        )}
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggingIn: state.loggingIn,
    errorMessage: state.errorMessage
  };
};

const mapDispatchToProps = {
  login
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);
