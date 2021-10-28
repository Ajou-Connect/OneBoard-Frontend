import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MenuLecture from '../Pages/MenuLecture';
import LecturePage from '../Pages/LecturePage';
const Lecture = () => {
  return (
    <div className="Lecture-container">
      <Router>
        <MenuLecture />
        <Switch>
          <Route path="/LecturePage" component={LecturePage} />
        </Switch>
      </Router>
    </div>
  );
};

export default Lecture;
