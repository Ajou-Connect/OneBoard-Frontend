import React from 'react';
import Nav from '../Sidebar/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Profile from '../Pages/Profile';
import MenuLecture from '../Pages/MenuLecture';

const Routes = () => {
  return (
    <div className="Routes-container">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/Lecture" component={MenuLecture} />
        </Switch>
      </Router>
    </div>
  );
};
export default Routes;
