import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class User extends Component {
  state = {
    username: "",
    start: "",
    end: "",
    hours: "",
    bed_t_rating: "",
    work_t_rating: "",
    average_rating: ""
  };

  componentDidMount() {
    // call our action to get data here from index (action)
    this.props.fetchUser();
    console.log(fetchUser);
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        <h1>Welcome</h1>
        <p>Name: {user.username}</p>
        <div>
          <p>Add your sleep hours:</p>
        </div>
        <div>
          <p>Delete your sleep hours:</p>
        </div>
        <div>
          <p>Rate your sleep</p>
        </div>
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
)(User);
