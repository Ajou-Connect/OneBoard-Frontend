import React from 'react';
import Nav from '../Sidebar/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Profile from '../Pages/Profile';
import MenuLecture from '../Pages/MenuLecture';
import LecturePage from '../Pages/LecturePage';
import LectureNotice from '../Pages/LectureNotice';


const Routes = () => {
  return (
    <div className="Routes-container">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/Lecture" component={MenuLecture} />
          <Route path="/" exact component={Home} />
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/Lecture/LecturePage" component={LecturePage} />
          <Route exact path="/Lecture/LecturePage/Notice" component={LectureNotice}/>
        </Switch>
      </Router>
    </div>
  );
};
export default Routes;
