import React, { useEffect, useState } from 'react';
import LectureSidebar from '../LectureSidebar';
import './LectureAttendance.scss';
import ProfessorAttendance from './ProfessorAttendance';
import StudentAttendance from './StudentAttendance';

const LectureAttendance = ({ match }) => {
  const [attendances, setAttendances] = useState([]);
  const lectureId = match.params.lectureId;
  const user = JSON.parse(sessionStorage.userInfo);
  const userType = user.userType;
  const [isProfessor, setIsProfessor] = useState(false);

  useEffect(() => {
    setIsProfessor(userType);
  }, []);

  return (
    <div className="LectureAttendance">
      <nav className="lecture-sidebar">
        <LectureSidebar lectureId={lectureId} />
      </nav>
      <div className="attendance-main">
        {isProfessor === 'T' ? (
          <ProfessorAttendance lectureId={lectureId} />
        ) : (
          <StudentAttendance lectureId={lectureId} />
        )}
      </div>
    </div>
  );
};

export default LectureAttendance;
