import React from "react";
import Nav from "./Sidebar/Nav";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Lecture from './Pages/Lecture';
import Profile from './Pages/Profile';
import Header from './Component/Header';
import Logout from "./Pages/Logout";

function App() {
  return (
    
    <Router>
      <Header/>
      <Nav />
      <Switch>
        <Route path="/Profile" component={Profile} />
        <Route path="/" exact component={Home} />
        <Route path="/Lecture" component={Lecture} />
        <Route path="/Logout" component={Logout}/>
      </Switch>
    </Router>
  );
}
export default App;
