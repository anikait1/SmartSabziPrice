// import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import ItemDetail from "./components/ItemDetail";
import PricePostDetail from "./components/PricePostDetail"
import Profile from "./components/Profile";


function App() {
  return (
    <div>
      <Header/>
      <PricePostDetail/>
    </div>
    // <React.Fragment>
    //   <Switch>
    //     <Route exact path="/" component={HomePage} />
    //     <Route path="/details/:id" component={Details} />
    //     <Route path="/profile" component={Profile} />
    //     <Route path="/register" component={Register} />
    //     <Route path="/users/activate/:token" component={Activate} />
    //     <Route path="/login" component={Login} />
    //     <Route path="/users/password/forget" component={ForgotPassword} />
    //     <Route path="/users/password/reset/:token" component={Reset} />
    //   </Switch>
    // </React.Fragment>
  );
}

export default App;
