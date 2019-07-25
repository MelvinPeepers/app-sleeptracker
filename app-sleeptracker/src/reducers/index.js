import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED
} from "../components/actions";

const initialState = {
  loggingIn: false,
  errorMessage: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START: {
      return {
        ...state,
        loggingIn: true
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loggingIn: false,
        errorMessage: null
      };
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        loggingIn: false,
        errorMessage: action.payload.message
      };
    }
    default:
      return state;
  }
};

export default reducer;
