import React from 'react';
import LectureSidebar from '../LectureSidebar';
import './LectureScore.scss';
const LectureScore = ({ match }) => {
  const lectureId = match.params.lectureId;
  return (
    <div className="score">
      <nav className="lecture-menu">
        <LectureSidebar lectureId={lectureId} />
      </nav>
      <div className="score-main"></div>
    </div>
  );
};

export default LectureScore;
