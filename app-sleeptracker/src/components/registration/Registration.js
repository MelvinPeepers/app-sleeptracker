import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { signup } from "../actions";

class Reg extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      birthdate: ""
    };
  }

  handleChangeReg = event => {
    event.preventDefault();

    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmitReg = event => {
    event.preventDefault();

    const { username, password, birthdate } = this.state;

    this.props.signup(username, password, birthdate).then(() => {
      this.props.history.push("/login");
    });
    .catch(error => {
      console.log(error);
    });
  };

  render() {
    const { username, password, birthdate } = this.state;
    const { signingUp } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmitReg}>
          <input
            type='text'
            name='username'
            placeholder='username'
            value={username}
            onChange={this.handleChangeReg}
          />
          <br />
          <input
            type='text'
            name='password'
            placeholder='password'
            value={password}
            onChange={this.handleChangeReg}
          />
          <br />
          <input
            type='text'
            name='birthdate'
            placeholder='year-mm-dd'
            value={birthdate}
            onChange={this.handleChangeReg}
          />
          <br />
          {signingUp ? (
            <p>Creating account...</p>
          ) : (
            <button type='submit'>Signup</button>
          )}
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    signingUp: state.signingUp,
    errorMessage: state.errorMessage
  };
};

const mapDispatchToProps = {
  signup
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Reg)
);
