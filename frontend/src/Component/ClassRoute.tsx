import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TestZoom from '../zoomtest/TestZoom';



const ClassRoute = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="class/:lectureId/:lessonId/:sessionId/:userType" component={TestZoom} />
        <Route exact path="/class/:lectureId/:lessonId/:sessionId/:userType" component={TestZoom} />
      </Switch>
    </Router>
  );
};

export default ClassRoute;