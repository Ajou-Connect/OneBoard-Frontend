import React from 'react';
import LectureSidebar from '../LectureSidebar';
import './LectureNotice.scss';
import LectureNoticeContent from './LectureNoticeContent';

const LectureNotice = () => {
  return (
    <div className="notice">
      <nav className="lecture-menu">
        <LectureSidebar />
      </nav>
      <div className="notice-main">
        <LectureNoticeContent />
      </div>
    </div>
  );
};

export default LectureNotice;
