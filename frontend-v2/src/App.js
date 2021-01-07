import React from 'react';
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import PricePostDetail from "./components/PricePostDetail"
import Profile from "./components/Profile";
import Register from "./components/AuthScreens/Register";
import Login from "./components/AuthScreens/Login";
import ForgotPassword from "./components/AuthScreens/ForgotPassword";
import Reset from "./components/AuthScreens/Reset";
import Activate from "./components/AuthScreens/Activate";

function App() {
  return (
    // <div>
    //   <Header/>
    //   <PricePostDetail/>
    // </div>
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/details/:id" component={PricePostDetail} />
        <Route path="/profile" component={Profile} />
        <Route path="/register" component={Register} />
        <Route path="/users/activate/:token" component={Activate} />
        <Route path="/login" component={Login} />
        <Route path="/users/password/forget" component={ForgotPassword} />
        <Route path="/users/password/reset/:token" component={Reset} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
