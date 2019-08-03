import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
// import "./index.css";
import App from "./App";
import reducer from "./reducers";
import NavBar from "./components/Navbar";

const logger = store => next => action => {
  console.log("Prev State", store.getState());
  console.log("Action", action);

  // moves us to the next middleware function
  next(action);

  console.log("New State", store.getState());
};

const store = createStore(
  reducer,
  compose(
    /* applyMiddleware goes here */
    applyMiddleware(thunk, logger),

    // Redux DevTool
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <NavBar />
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
