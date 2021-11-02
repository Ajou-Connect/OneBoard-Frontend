import React from 'react';
import LectureSidebar from '../LectureSidebar';

const LectureHome = () => {
  return (
    <div>
      <div className="lecture-sidebar">
        <LectureSidebar />
      </div>
      <div>내용</div>
    </div>
  );
};

export default LectureHome;
