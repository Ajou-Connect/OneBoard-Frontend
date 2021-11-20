import React from 'react';
import LectureSidebar from '../LectureSidebar';
import './LectureHome.scss';

const LectureHome = ({ match }) => {
  const lectureId = match.params.lectureId;

  return (
    <div className="home">
      <nav className="lecture-sidebar">
        <LectureSidebar lectureId={lectureId} />
      </nav>
      <div className="home-content">Home</div>
    </div>
  );
};

export default LectureHome;
