import axios from "axios";

/* 
  Action Types Go Here!
*/

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const REG_START = "REG_START";
export const REG_SUCCESS = "REG_SUCCESS";
export const REG_FAILED = "REG_FAILED";

export const FETCHING_USER = "FETCHING_USER";
export const FETCHING_USER_SUCCESS = "FETCHING_USER_SUCCESS";
export const FETCHING_USER_FAILED = "FETCHING_USER_FAILED";

export const ADD_USER_DATA = "ADD_USER_DATA";
export const ADD_USER_DATA_SUCCESS = "ADD_USER_DATA_SUCCESS";
export const ADD_USER_DATA_FAILED = "ADD_USER_DATA_FAILED";

export const DELETE_USER_DATA = "DELETE_USER_DATA";
export const DELETE_USER_DATA_SUCCESS = "DELETE_USER_DATA_SUCCESS";
export const DELETE_USER_DATA_FAILED = "DELETE_USER_DATA_FAILED";

export const EDIT_USER_DATA = "EDIT_USER_DATA";
export const EDIT_USER_DATA_SUCCESS = "EDIT_USER_DATA";
export const EDIT_USER_DATA_FAILED = "EDIT_USER_DATA";

// login
export function login(username, password) {
  return dispatch => {
    dispatch({ type: LOGIN_START });

    return axios
      .post("https://sleeptracker-pt-july.herokuapp.com/api/login", {
        username,
        password
      })
      .then(response => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("id", response.data.id);
        dispatch({ type: LOGIN_SUCCESS });
      })
      .catch(error => {
        const payload = error.response ? error.response.data : error;
        dispatch({ type: LOGIN_FAILED, payload });
      });
  };
}

// registration
export function signup(username, password, birthdate) {
  return dispatch => {
    dispatch({ type: REG_START });

    return axios
      .post("https://sleeptracker-pt-july.herokuapp.com/api/register", {
        username,
        password,
        birthdate
      })
      .then(response => {
        dispatch({ type: REG_SUCCESS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: REG_FAILED, payload: error.response });
      });
  };
}

// fetching user data
export function fetchUser() {
  return dispatch => {
    dispatch({ type: FETCHING_USER });

    const headers = {
      "Content-Type": "application/json",
      authorize: localStorage.getItem("token")
    };

    axios
      .get(
        `https://sleeptracker-pt-july.herokuapp.com/api/user/${localStorage.getItem(
          "id"
        )}`,
        {
          headers
        }
      )
      .then(response => {
        dispatch({ type: FETCHING_USER_SUCCESS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: FETCHING_USER_FAILED, payload: error.response });
      });
  };
}

// Add data
export function addData(newData) {
  // console.log(newData);
  return dispatch => {
    dispatch({ type: ADD_USER_DATA });

    const headers = {
      "Content-Type": "application/json",
      authorize: localStorage.getItem("token")
    };

    axios
      .post(
        "https://sleeptracker-pt-july.herokuapp.com/api/sleepData",
        newData,
        { headers }
      )
      .then(response => {
        console.log(response.data);
        dispatch({ type: ADD_USER_DATA_SUCCESS, payload: response.data });
      })
      .catch(error => {
        // console.log(error);
        dispatch({ type: ADD_USER_DATA_FAILED, payload: error.response });
      });
  };
}

// Delete Data
export function deleteData(id) {
  return dispatch => {
    dispatch({ type: DELETE_USER_DATA });

    const headers = {
      "Content-Type": "application/json",
      authorize: localStorage.getItem("token")
    };

    return axios
      .delete(
        `https://sleeptracker-pt-july.herokuapp.com/api/sleepData/${id}`,
        {
          headers
        }
      )
      .then(response => {
        // console.log(response.data);
        dispatch({ type: DELETE_USER_DATA_SUCCESS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: DELETE_USER_DATA_FAILED, payload: error.response });
      });
  };
}

// edit data
export function editData(id) {
  return dispatch => {
    dispatch({ type: EDIT_USER_DATA });

    const headers = {
      "Content-Type": "application/json",
      authorize: localStorage.getItem("token")
    };

    return axios
      .put(`https://sleeptracker-pt-july.herokuapp.com/api/sleepData/${id}`, {
        headers
      })
      .then(response => {
        dispatch({ type: EDIT_USER_DATA_SUCCESS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: EDIT_USER_DATA_FAILED, payload: error.response });
      });
  };
}
