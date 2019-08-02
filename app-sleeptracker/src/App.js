import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";
import Login from "./components/login/Login";
import Registration from "./components/registration/Registration";
import User from "./components/home/User";
import Home from "./components/home/Home";

import "./App.css";

function App() {
  return (
    <div className='App'>
      <PrivateRoute exact path='/' component={Dashboard} />
      <PrivateRoute exact path='/user' component={User} />
      <PrivateRoute exact path='/home' component={Home} />
      <Route exact path='/signup' component={Registration} />
      <Route exact path='/login' component={Login} />
    </div>
  );
}

export default App;
