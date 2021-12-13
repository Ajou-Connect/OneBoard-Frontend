import React, { useEffect, useState } from 'react';
import LectureSidebar from '../LectureSidebar';
import './LectureLesson.scss';
import ProfessorLectureLesson from './ProfessorLectureLesson';
import StudentLectureLesson from './StudentLectureLesson';
import Nav from '../../../Sidebar/Nav';
const LectureLesson = ({ match }) => {
  const lectureId = match.params.lectureId;
  const user = JSON.parse(localStorage.userInfo);
  const userType = user.userType;
  const [isProfessor, setIsProfessor] = useState(false);

  useEffect(() => {
    setIsProfessor(userType);
  }, []);

  return (
    <div className="lecture-lesson">
      <Nav />
      <div className="lesson-content">
        <LectureSidebar lectureId={lectureId} />
        <div style={{ width: '100%' }}>
          {isProfessor === 'T' ? (
            <ProfessorLectureLesson lectureId={lectureId} />
          ) : (
            <StudentLectureLesson lectureId={lectureId} />
          )}
        </div>
      </div>
    </div>
  );
};

export default LectureLesson;
