import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  REG_START,
  REG_SUCCESS,
  REG_FAILED,
  FETCHING_USER,
  FETCHING_USER_SUCCESS,
  FETCHING_USER_FAILED,
  ADD_USER_DATA,
  ADD_USER_DATA_SUCCESS,
  ADD_USER_DATA_FAILED,
  DELETE_USER_DATA,
  DELETE_USER_DATA_SUCCESS,
  DELETE_USER_DATA_FAILED,
  EDIT_USER_DATA,
  EDIT_USER_DATA_SUCCESS,
  EDIT_USER_DATA_FAILED
} from "../components/actions";

const initialState = {
  user: [],
  fetchingUser: false,
  loggingIn: false,
  signingUp: false,
  addingData: false,
  deletingData: false,
  editData: false,
  errorMessage: null,
  start: 0,
  end: 0
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
    case FETCHING_USER: {
      return {
        ...state,
        fetchingUser: true,
        start: action.payload,
        end: action.payload,
        errorMessage: null
      };
    }
    case FETCHING_USER_SUCCESS: {
      return {
        ...state,
        fetchingUser: false,
        errorMessage: "",
        user: action.payload
      };
    }
    case FETCHING_USER_FAILED: {
      return {
        fetchingUser: false,
        errorMessage: action.payload
      };
    }
    case ADD_USER_DATA: {
      // console.log("add data user");
      return {
        ...state,
        state: action.payload,
        end: action.payload,
        fetchingUser: true,
        errorMessage: false
      };
    }
    case ADD_USER_DATA_SUCCESS: {
      // console.log("add data success");
      return {
        ...state,
        fetchingUser: false,
        user: action.payload,
        errorMessage: ""
      };
    }
    case ADD_USER_DATA_FAILED: {
      // console.log("add data failed");
      return {
        ...state,
        fetchingUser: false,
        errorMessage: action.payload
      };
    }
    case DELETE_USER_DATA: {
      return {
        ...state,
        deletingData: true
      };
    }
    case DELETE_USER_DATA_SUCCESS: {
      return {
        ...state,
        deletingData: false,
        user: action.payload,
        errorMessage: ""
      };
    }
    case DELETE_USER_DATA_FAILED: {
      return {
        ...state,
        deletingData: false,
        errorMessage: action.payload
      };
    }
    case EDIT_USER_DATA: {
      return {
        ...state,
        editData: true
      };
    }
    case EDIT_USER_DATA_SUCCESS: {
      return {
        ...state,
        editData: false,
        user: action.payload,
        errorMessage: action.payload
      };
    }
    case EDIT_USER_DATA_FAILED: {
      return {
        ...state,
        editData: false,
        errorMessage: action.payload
      };
    }
    default:
      return state;
  }
};

export default reducer;
