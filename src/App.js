import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Details from "./components/Item/ItemDetail";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Register from "./components/AuthScreens/Register";
import Activate from "./components/AuthScreens/Activate";
import Login from "./components/AuthScreens/Login";
import ForgotPassword from "./components/AuthScreens/ForgotPassword";
import Reset from "./components/AuthScreens/Reset";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/details/:id" component={Details} />
        <Route path="/profile" component={Profile} />
        <Route path="/register" component = {Register} />
        <Route path="/users/activate/:token" component = {Activate} />
        <Route path="/login" component = {Login} />
        <Route path='/users/password/forget' component = {ForgotPassword} />
        <Route path='/users/password/reset/:token' component = {Reset} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
