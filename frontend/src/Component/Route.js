import React from 'react';
import Nav from '../Sidebar/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Profile from '../Pages/Profile';
import MenuLecture from '../Pages/MenuLecture';
import LecturePage from '../Pages/LecturePage';

const Routes = () => {
  return (
    <div className="Routes-container">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/Lecture" component={MenuLecture} />
          <Route path="/" exact component={Home} />
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/Lecture/LectureID" component={LecturePage} />
        </Switch>
      </Router>
    </div>
  );
};
export default Routes;
