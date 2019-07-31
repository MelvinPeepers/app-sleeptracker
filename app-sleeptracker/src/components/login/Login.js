import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../actions";
import { Link } from "react-router-dom";

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
        <h2>Login to your Sleep Tracker account</h2>
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
        <br />
        <p>Need an account?</p>
        <Link to='/signup'>Register here</Link>
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
