import React, { useEffect, useState } from 'react';
import LectureSidebar from '../LectureSidebar';
import './LectureAssignment.scss';
import ProfessorAssignmentList from './ProfessorAssignmentList';
import StudentAssignmentList from './StudentAssignmentList';
import Nav from '../../../Sidebar/Nav';
const LectureAssignment = ({ match }) => {
  const lectureId = match.params.lectureId;
  const user = JSON.parse(sessionStorage.userInfo);
  const userType = user.userType;
  const [isProfessor, setIsProfessor] = useState('');

  useEffect(() => {
    setIsProfessor(userType);
  }, []);

  return (
    <div className="lectureAssignment">
      <Nav />
      <div className="assignment-content">
        <LectureSidebar lectureId={lectureId} />
        <div style={{ width: '100%' }}>
          {isProfessor === 'T' ? (
            <ProfessorAssignmentList lectureId={lectureId} userType={userType} />
          ) : (
            <StudentAssignmentList lectureId={lectureId} userType={userType} />
          )}
        </div>
      </div>
    </div>
  );
};

export default LectureAssignment;
