import React from 'react';
import LectureSidebar from '../LectureSidebar';
import './LectureNotice.scss';
import LectureNoticeContent from './LectureNoticeContent';
import Nav from '../../../Sidebar/Nav';

const LectureNotice = ({ match }) => {
  const Id = match.params.lectureId;

  return (
    <div className="lecture-notice">
      <Nav />
      <div className="notice-main">
        <LectureSidebar lectureId={Id} />
        <div style={{ width: '100%' }}>
          <LectureNoticeContent lectureId={Id} />
        </div>
      </div>
    </div>
  );
};

export default LectureNotice;
