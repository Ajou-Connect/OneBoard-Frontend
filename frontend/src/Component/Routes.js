import React from 'react';
import Nav from '../Sidebar/Nav';
import { Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Profile from '../Pages/Profile';
import LectureList from '../Pages/LectureList';
import LectureHome from '../Pages/LecturePages/LectureHome';
import LectureNotice from '../Pages/LecturePages/LectureNotice';
import LectureAttendance from '../Pages/LecturePages/LectureAttendance';
import LectureScore from '../Pages/LecturePages/LectureScore';
import LecturePlan from '../Pages/LecturePages/LecturePlan';
import LectureLesson from '../Pages/LecturePages/LectureLesson';
import './Routes.scss';
const Routes = () => {
  return (
    <div className="Routes-container">
      <Nav />
      <Route exact path="/" component={Home} />
      <Route exact path="/Profile" component={Profile} />
      <Route exact path="/Lecture" component={LectureList} />
      <Route path="/Lecture/LecturePage1/Home" component={LectureHome} />
      <Route path="/Lecture/LecturePage1/Notice" component={LectureNotice} />
      <Route path="/Lecture/LecturePage1/Attendance" component={LectureAttendance} />
      <Route path="/Lecture/LecturePage1/Score" component={LectureScore} />
      <Route path="/Lecture/LecturePage1/Lesson" component={LecturePlan} />
      <Route path="/Lecture/LecturePage1/Plan" component={LectureLesson} />
      
    </div>
  );
};
export default Routes;
