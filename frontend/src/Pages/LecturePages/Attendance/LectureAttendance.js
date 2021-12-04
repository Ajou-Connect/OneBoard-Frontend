import React, { useEffect, useState } from 'react';
import LectureSidebar from '../LectureSidebar';
import './LectureAttendance.scss';
import ProfessorAttendance from './ProfessorAttendance';
import StudentAttendance from './StudentAttendance';
import Nav from '../../../Sidebar/Nav';
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
      <Nav />
      <div className="attendance-main">
        <LectureSidebar lectureId={lectureId} />
        <div style={{ width: '100%' }}>
          <hr
            style={{
              width: '100%',
              margin: '10px 0px',
              display: 'block',
              borderColor: '#ffffff',
            }}
          />
          {isProfessor === 'T' ? (
            <ProfessorAttendance lectureId={lectureId} />
          ) : (
            <StudentAttendance lectureId={lectureId} />
          )}
        </div>
      </div>
    </div>
  );
};

export default LectureAttendance;
