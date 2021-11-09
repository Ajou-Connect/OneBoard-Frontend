import React from 'react';
import Nav from '../Sidebar/Nav';
import { Route } from 'react-router-dom';
import Home from '../Pages/MainNav/Home';
import Profile from '../Pages/MainNav/Profile';
import LectureList from '../Pages/MainNav/LectureList';
import LectureHome from '../Pages/LecturePages/Home/LectureHome';
import LectureNotice from '../Pages/LecturePages/Notice/LectureNotice';
import LectureAttendance from '../Pages/LecturePages/Attendance/LectureAttendance';
import LectureScore from '../Pages/LecturePages/Score/LectureScore';
import LecturePlan from '../Pages/LecturePages/Plan/LecturePlan';
import LectureLesson from '../Pages/LecturePages/Lesson/LectureLesson';
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
