import React, { useEffect, useState } from 'react';
import LectureSidebar from '../LectureSidebar';
import './LectureAssignment.scss';
import ProfessorAssignmentList from './ProfessorAssignmentList';
import StudentAssignmentList from './StudentAssignmentList';

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
      <nav className="lecture-sidebar">
        <LectureSidebar lectureId={lectureId} />
      </nav>
      <div className="assignment-content">
        {isProfessor === 'T' ? (
          <ProfessorAssignmentList lectureId={lectureId} userType={userType} />
        ) : (
          <StudentAssignmentList lectureId={lectureId} userType={userType} />
        )}
      </div>
    </div>
  );
};

export default LectureAssignment;
