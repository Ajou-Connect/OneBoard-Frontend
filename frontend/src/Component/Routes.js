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
import WriteNotice from '../Pages/LecturePages/Notice/WiteNotice';

const Routes = () => {
  return (
    <div className="Routes-container">
      <Nav />
      <Route exact path="/Main/Home" component={Home} />
      <Route path="/Main/Profile" component={Profile} />
      <Route exact path="/Main/Lecture" component={LectureList} />
      <Route exact path="/Login" component={LoginCheck} />
      <Route path="/Main/Lecture/LecturePage1/Home" component={LectureHome} />
      <Route exact path="/Main/Lecture/LecturePage1/Notice" component={LectureNotice} />
      {/* <Route path="/Main/Lecture/LecturePage1/Notice/:NoticeId/UpdateNotice" component={업데이트 notice페이지}/> */}
      <Route exact path="/Main/Lecture/LecturePage1/Notice/WriteNotice" component={WriteNotice} />
      <Route path="/Main/Lecture/LecturePage1/Attendance" component={LectureAttendance} />
      <Route path="/Main/Lecture/LecturePage1/Score" component={LectureScore} />
      <Route path="/Main/Lecture/LecturePage1/Lesson" component={LecturePlan} />
      <Route path="/Main/Lecture/LecturePage1/Plan" component={LectureLesson} />
    </div>
  );
};

export default Routes;
