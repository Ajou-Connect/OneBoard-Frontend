import React from "react";
import Nav from "./Sidebar/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import MenuLecture from "./Pages/MenuLecture";
import Header from "./Component/Header";

const App = () => {
  return (
    <div className="App-style">
      <Header />
      <Router>
        <Nav />
        <Switch>
          <Route path="/MenuLecture" component={MenuLecture} />
          <Route path="/" exact component={Home} />
          <Route path="/Profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
};
export default App;
