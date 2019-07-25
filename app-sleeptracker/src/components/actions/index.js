import axios from "axios";

/* 
  Action Types Go Here!
*/

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

// login
export function login(username, password) {
  return dispatch => {
    dispatch({ type: LOGIN_START });

    return axios
      .post("https://sleeptrack.herokuapp.com/api/login", {
        username,
        password
      })
      .then(response => {
        localStorage.setItem("token", response.data.payload);
        dispatch({ type: LOGIN_SUCCESS });
      })
      .catch(error => {
        const payload = error.response ? error.response.data : error;
        dispatch({ type: LOGIN_FAILED, payload });
      });
  };
}
