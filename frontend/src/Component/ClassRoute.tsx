import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PfClass from '../Pages/LectureClass/professor/Index';
import StClass from '../Pages/LectureClass/student/Index';
import TestZoom from '../zoomtest/TestZoom';



const ClassRoute = () => {
  return (
    <Router>
      <Switch>
        {/* <Route path="/class/pf" component={TestZoom} /> */}
        <Route exact path="/class/st" component={TestZoom} />
      </Switch>
    </Router>
  );
};

export default ClassRoute;
