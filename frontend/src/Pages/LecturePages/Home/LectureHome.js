import React from 'react';
import LectureSidebar from '../LectureSidebar';
import './LectureHome.scss';

const LectureHome = ({ match }) => {
  const lectureId = match.params.lectureId;
  console.log(lectureId);
  return (
    <div className="home">
      <div className="lecture-sidebar">
        <LectureSidebar lectureId={lectureId} />
      </div>
      <div style={{ fontWeight: 'bold', fontSize: '150px' }} className="home-content">
        Home
      </div>
    </div>
  );
};

export default LectureHome;
