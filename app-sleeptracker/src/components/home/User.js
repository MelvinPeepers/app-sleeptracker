import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser, addData, deleteData, editData } from "@/actions";
import { Link } from "react-router-dom";

class User extends Component {
  state = {
    userId: localStorage.getItem("id"),
    start: "",
    end: "",
    hours: 0,
    bed_t_rating: "",
    work_t_rating: "",
    average_rating: ""
  };

  componentDidMount() {
    // call our action to get data here from index (action)
    this.props.fetchUser();
    // console.log(fetchUser);
  }

  changeHandle = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  addData = event => {
    event.preventDefault();

    const newData = this.state;
    this.props.addData(newData);
    this.setState({
      userId: localStorage.getItem("id"),
      start: "",
      end: "",
      hours: 0,
      bed_t_rating: "",
      work_t_rating: "",
      average_rating: ""
    });
  };

  deleteData = id => {
    this.props.deleteData(id);
    this.setState({});
  };

  render() {
    const {
      start,
      end,
      bed_t_rating,
      work_t_rating,
      average_rating
    } = this.state;
    const { user } = this.props;
    return (
      <div>
        <h2>Welcome {user.username}</h2>
        <form>
          <input
            type='text'
            name='start'
            value={start}
            onChange={this.changeHandle}
            placeholder='Start Time: hour:minutes am/pm'
          />
          <br />
          <div />
          <input
            type='text'
            name='end'
            value={end}
            onChange={this.changeHandle}
            placeholder='End Time: hour:minutes am/pm'
          />
          <br />
          <h4>Bed Rating</h4>
          <select
            name='bed_t_rating'
            value={bed_t_rating}
            onChange={this.changeHandle}
          >
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>
          {/* {console.log(this.state)} */}
          <br />
          <p>Select between 1 - 5, 5 being Highest</p>
          <p>My Rating {bed_t_rating}</p>
          <h4>Work Rating</h4>
          <select
            name='work_t_rating'
            value={work_t_rating}
            onChange={this.changeHandle}
          >
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>
          <p>Select between 1 - 5, 5 being Highest</p>
          <p>My Rating {work_t_rating}</p>
          <br />
          <h4>Average Rating</h4>
          <select
            name='average_rating'
            value={average_rating}
            onChange={this.changeHandle}
          >
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>
          {/* {console.log(this.state)} */}
          <p>Select between 1 - 5, 5 being Highest</p>
          <p>My Rating {average_rating}</p>
          <button className='add-btn' onClick={this.addData}>
            Add data
          </button>
          <br />
          <Link to='/home'>Home</Link>
        </form>
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
    start: state.start,
    end: state.end,
    hour: state.start + state.end
  };
};

export default connect(
  mapStateToProps,
  { fetchUser, addData, deleteData, editData }
)(User);
