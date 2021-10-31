import React from 'react';
import LecturePage from '../Pages/LecturePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LectureNotice from '../Pages/LectureNotice';

const LectureRoutes = () => {
  return (
    <div className="LectureRoutes-container">
      <Router>
        <LecturePage />
        <Switch>
          <Route exact path="/Lecture/LecturePage/Notice" component={LectureNotice} />
        </Switch>
      </Router>
    </div>
  );
};

export default LectureRoutes;
