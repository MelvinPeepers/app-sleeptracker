import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login/Login";
import Reg from "./components/registration/Reg";

import "./App.css";

function App() {
  return (
    <div className='App'>
      <PrivateRoute exact path='/' component={Dashboard} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={Reg} />
    </div>
  );
}

export default App;
