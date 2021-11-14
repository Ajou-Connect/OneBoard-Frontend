import React from 'react';
import LectureSidebar from '../LectureSidebar';
import './LectureHome.scss';

const LectureHome = ({ match }) => {
  const lectureId = match.params.lectureId;
  console.log(lectureId);
  return (
    <div className="lecture-home">
      <div className="lecture-sidebar">
        <LectureSidebar lectureId={lectureId} />
      </div>
      <div className="lecture-content">
        <div className="content-box">??</div>
      </div>
    </div>
  );
};

export default LectureHome;
