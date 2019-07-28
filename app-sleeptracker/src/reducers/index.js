import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  REG_START,
  REG_SUCCESS,
  REG_FAILED
} from "../components/actions";

const initialState = {
  loggingIn: false,
  signingUp: false,
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
        errorMessage: action.payload.Error
      };
    }
    case REG_START: {
      return {
        state,
        signingUp: true
      };
    }
    case REG_SUCCESS: {
      return {
        ...state,
        signingUp: false,
        errorMessage: null
      };
    }
    case REG_FAILED: {
      return {
        ...state,
        signingUp: false,
        errorMessage: action.payload.Error
      };
    }
    default:
      return state;
  }
};

export default reducer;
