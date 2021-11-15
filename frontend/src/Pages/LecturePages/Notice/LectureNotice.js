import React from 'react';
import LectureSidebar from '../LectureSidebar';
import './LectureNotice.scss';
import LectureNoticeContent from './LectureNoticeContent';

const LectureNotice = ({ match }) => {
  const Id = match.params.lectureId;

  return (
    <div className="notice">
      <nav className="lecture-menu">
        <LectureSidebar lectureId={Id} />
      </nav>
      <div className="notice-main">
        <LectureNoticeContent lectureId={Id} />
      </div>
    </div>
  );
};

export default LectureNotice;
