import React from 'react';
import Nav from '../Sidebar/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Profile from '../Pages/Profile';
import MenuLecture from '../Pages/MenuLecture';

const SideBar = () => {
  return (
    <div className="sidebar-container">
      <Router>
        <Nav />
        <Switch>
          <Route path="/Lecture" component={MenuLecture} />
          <Route path="/" exact component={Home} />
          <Route path="/Profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
};
export default SideBar;