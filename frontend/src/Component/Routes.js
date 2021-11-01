import React from 'react';
import Nav from '../Sidebar/Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Profile from '../Pages/Profile';
import MenuLecture from '../Pages/MenuLecture';

const Routes = () => {
  return (
    <div className="Routes-container">
      <Router>
        <Nav />

        <Route exact path="/" component={Home} />
        <Route exact path="/Profile" component={Profile} />
        <Route exact path="/Lecture" component={MenuLecture} />
      </Router>
    </div>
  );
};
export default Routes;
