import React, { Component } from "react";

class Reg extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      birthdate: ""
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

    const { username, password, birthdate } = this.state;

    this.props
      .signup(username, password, birthdate)
      .then(() => {
        this.props.history.push("");
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='username'
            placeholder='username'
            value={username}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default Reg;
