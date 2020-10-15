import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Details from "./components/Item/ItemDetail";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/details/:id" component={Details} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
