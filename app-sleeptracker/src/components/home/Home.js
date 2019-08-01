import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "../../actions";

class Home extends Component {
  state = {
    average_rating: ""
  };
  componentDidMount() {
    // call our action to get data here from index (action)
    this.props.fetchUser();
    // console.log(fetchUser);
  }

  render() {
    const { average_rating } = this.state;
    const { user } = this.props;
    return (
      <div>
        <div>
          <h2>Hello {user.username}</h2>
          <h3>Welcome to your Sleep Tracker Data</h3>
        </div>
        <div>
          <p>This is how you slept this week {average_rating}</p>
          {console.log(this.state)}
        </div>
        <Link to='/user'>User Profile</Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    fetchingUser: state.fetchingUser
  };
};

export default connect(
  mapStateToProps,
  { fetchUser }
)(Home);
