import React, { Component } from "react";
import { Link } from "react-router-dom";
// import User from "./User";

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>Hello</h2>
          <h3>Welcome to your Sleep Tracker Data</h3>
        </div>
        <div>
          <p>This is how you slept this week</p>
        </div>
        <Link to='/user'>User Profile</Link>
      </div>
    );
  }
}

export default Home;
