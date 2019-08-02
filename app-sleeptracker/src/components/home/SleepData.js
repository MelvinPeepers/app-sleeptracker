import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser, deleteData, editData } from "../../actions";

class SleepData extends Component {
  componentDidMount() {
    // call our action to get data here from index (action)
    this.props.fetchUser();
    // console.log(fetchUser);
  }

  handleDelete = (event, id) => {
    event.preventDefault();
    this.props.deleteData(id);
  };

  render() {
    const { user } = this.props;
    return (
      <div>
        <h1>Sleep Data</h1>
        {console.log(user)}
        {user.sleepData
          ? user.sleepData.map(sleep => (
              <p key={sleep.id}>
                {sleep.bed_t_rating} <br /> {sleep.work_t_rating} <br />
                {sleep.average_rating}
                <br /> {sleep.start}
                <br /> {sleep.end}
                <br />
                <button onClick={event => this.handleDelete(event, sleep.id)}>
                  Delete
                </button>
                <button>Edit</button>
              </p>
            ))
          : ""}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    fetchingUser: state.fetchingUser,
    deletingData: state.deletingData,
    editingData: state.editingData,
    sleepData: state.sleepData
  };
};

export default connect(
  mapStateToProps,
  { fetchUser, deleteData, editData }
)(SleepData);
