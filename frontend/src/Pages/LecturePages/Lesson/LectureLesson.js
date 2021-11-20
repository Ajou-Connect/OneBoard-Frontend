import React, { useEffect, useState } from 'react';
import LectureSidebar from '../LectureSidebar';
import './LectureLesson.scss';
import ProfessorLectureLesson from './ProfessorLectureLesson';
import StudentLectureLesson from './StudentLectureLesson';

const LectureLesson = ({ match }) => {
  const lectureId = match.params.lectureId;
  const user = JSON.parse(sessionStorage.userInfo);
  const userType = user.userType;
  const [isProfessor, setIsProfessor] = useState(false);

  useEffect(() => {
    setIsProfessor(userType);
  }, []);

  return (
    <div className="lesson">
      <nav className="lecture-sidebar">
        <LectureSidebar lectureId={lectureId} />
      </nav>
      <div className="lesson-content">
        {isProfessor === 'T' ? (
          <ProfessorLectureLesson lectureId={lectureId} />
        ) : (
          <StudentLectureLesson lectureId={lectureId} />
        )}
      </div>
    </div>
  );
};

export default LectureLesson;
