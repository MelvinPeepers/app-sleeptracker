import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login/Login";

import "./App.css";

function App() {
  return (
    <div className='App'>
      <PrivateRoute exact path='/' component={Dashboard} />
      <Route exact path='/login' component={Login} />
    </div>
  );
}

export default App;
