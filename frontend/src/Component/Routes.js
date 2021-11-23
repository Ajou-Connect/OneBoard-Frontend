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
import LectureAssignment from '../Pages/LecturePages/Assignment/LectureAssignment';
import WriteAssignment from '../Pages/LecturePages/Assignment/WriteAssignment';
import ProfessorAssignmentDetail from '../Pages/LecturePages/Assignment/ProfessorAssignmentDetail';
import UpdateAssignment from '../Pages/LecturePages/Assignment/UpdateAssignment';
import StudentAssignmentDetail from '../Pages/LecturePages/Assignment/StudentAssignmentDetail';
import StudentSubmitDetail from '../Pages/LecturePages/Assignment/StudentSubmitDetail';
import ProfessorAttendanceDetail from '../Pages/LecturePages/Attendance/ProfessorAttendanceDetail';
import LessonDetail from '../Pages/LecturePages/Lesson/LessonDetail';
import GenerateLesson from '../Pages/LecturePages/Lesson/GenerateLesson';
import WriteLecturePlan from '../Pages/LecturePages/Plan/WriteLecturePlan';
import UpdateLesson from '../Pages/LecturePages/Lesson/UpdateLesson';

const Routes = () => {
  return (
    <div className="Routes-container">
      <Nav />
      <Route exact path="/Main/Home" component={Home} />
      <Route path="/Main/Profile" component={Profile} />
      <Route exact path="/Main/Lecture" component={LectureList} />
      <Route exact path="/Login" component={LoginCheck} />
      <Route path="/Main/Lecture/:lectureId/Home" component={LectureHome} />
      <Route exact path="/Main/Lecture/:lectureId/Notice" component={LectureNotice} />
      <Route
        exact
        path="/Main/Lecture/:lectureId/Notice/UpdateNotice/:noticeId"
        component={UpdateNotice}
      />
      <Route exact path="/Main/Lecture/:type/:lectureId/Assignment" component={LectureAssignment} />
      <Route
        exact
        path="/Main/Lecture/:type/:lectureId/Assignment/:assignmentId/ProfessorDetail"
        component={ProfessorAssignmentDetail}
      />
      <Route
        exact
        path="/Main/Lecture/:type/:lectureId/Assignment/:assignmentId/ProfessorDetail/:submitId"
        component={StudentSubmitDetail}
      />
      <Route
        exact
        path="/Main/Lecture/:type/:lectureId/Assignment/:assignmentId/StudentDetail"
        component={StudentAssignmentDetail}
      />
      {/* <Route exact path="/Main/Lecture/:lectureId/Assignment/:assignmentId" />  아마도 studentDetail더 들어가는 부분일듯?*/}
      <Route exact path="/Main/Lecture/:lectureId/Assignment/Write" component={WriteAssignment} />
      <Route
        exact
        path="/Main/Lecture/:type/:lectureId/Assignment/Update/:assignmentId"
        component={UpdateAssignment}
      />
      <Route exact path="/Main/Lecture/:lectureId/Notice/WriteNotice" component={WriteNotice} />

      <Route exact path="/Main/Lecture/:lectureId/Attendance" component={LectureAttendance} />
      <Route
        exact
        path="/Main/Lecture/:lectureId/Attendance/:studentId"
        component={ProfessorAttendanceDetail}
      />
      <Route exact path="/Main/Lecture/:lectureId/Score" component={LectureScore} />
      <Route exact path="/Main/Lecture/:lectureId/Lesson" component={LectureLesson} />

      <Route
        exact
        path="/Main/Lecture/:lectureId/Lesson/GenerateLesson"
        component={GenerateLesson}
      />
      <Route
        exact
        path="/Main/Lecture/:lectureId/Lesson/Update/:lessonId"
        component={UpdateLesson}
      />
      <Route
        exact
        path="/Main/Lecture/:lectureId/Lesson/:lessonId/LessonDetail"
        component={LessonDetail}
      />

      <Route exact path="/Main/Lecture/:lectureId/Plan" component={LecturePlan} />
      <Route exact path="/Main/Lecture/:lectureId/Plan/UpLoadPlan" component={WriteLecturePlan} />
    </div>
  );
};

export default Routes;
