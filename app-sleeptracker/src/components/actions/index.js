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
      .get("https://sleeptracker-pt-july.herokuapp.com/api/user/26", {
        headers
      })
      .then(response => {
        dispatch({ type: FETCHING_USER_SUCCESS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: FETCHING_USER_FAILED, payload: error.response });
      });
  };
}
