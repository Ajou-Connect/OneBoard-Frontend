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
import LoginCheck from './Login/LoginCheck';
import WriteNotice from '../Pages/LecturePages/Notice/WriteNotice';
import UpdateNotice from '../Pages/LecturePages/Notice/UpdateNotice';

const Routes = () => {
  return (
    <div className="Routes-container">
      <Nav />
      <Route exact path="/Main/Home" component={Home} />
      <Route path="/Main/Profile" component={Profile} />
      <Route path="/Main/Lecture" component={LectureList} />
      <Route exact path="/Login" component={LoginCheck} />
      <Route path="/Main/Lecture/:lectureId/Home" component={LectureHome} />
      <Route exact path="/Main/Lecture/:lectureId/Notice" component={LectureNotice} />
      <Route
        exact
        path="/Main/Lecture/:lectureId/Notice/UpdateNotice/:noticeId"
        component={UpdateNotice}
      />
      <Route exact path="/Main/Lecture/:lectureId/Notice/WriteNotice" component={WriteNotice} />
      <Route path="/Main/Lecture/:lectureId/Attendance" component={LectureAttendance} />
      <Route path="/Main/Lecture/:lectureId/Score" component={LectureScore} />
      <Route path="/Main/Lecture/:lectureId/Lesson" component={LecturePlan} />
      <Route path="/Main/Lecture/:lectureId/Plan" component={LectureLesson} />
    </div>
  );
};

export default Routes;
