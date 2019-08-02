import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions";
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
      <div className='login-reg-form'>
        <h2 style={loginstyle}>Login to your Sleep Tracker account</h2>
        {errorMessage && <p className='errorMessage'>{errorMessage}</p>}
        <form onSubmit={this.handleSubmit}>
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
            <button className='btn-login' type='submit'>
              Login
            </button>
          )}
          <br />
          <p>Need an account?</p>
          <Link to='/signup' style={linkstyle}>
            Register here
          </Link>
        </form>
      </div>
    );
  }
}

const loginstyle = {
  color: "black"
};

const linkstyle = {
  color: "#2e4482",
  textDecoration: "none",
  margin: "20px, 0, 0"
};

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
