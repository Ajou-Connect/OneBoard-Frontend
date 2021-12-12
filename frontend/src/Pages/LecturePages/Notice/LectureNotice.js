import React from 'react';
import LectureSidebar from '../LectureSidebar';
import './LectureNotice.scss';
import Nav from '../../../Sidebar/Nav';
import LectureProfessorNoticeContent from './LectureProfessorNoticeContent';
import LectureStudentNoticeContent from './LectureStudentNoticeContent';

const LectureNotice = ({ match }) => {
  const Id = match.params.lectureId;
  const user = JSON.parse(localStorage.userInfo);
  const userType = user.userType;

  return (
    <div className="lecture-notice">
      <Nav />
      <div className="notice-main">
        <LectureSidebar lectureId={Id} />
        <div style={{ width: '100%' }}>
          {userType === 'T' ? (
            <LectureProfessorNoticeContent lectureId={Id} />
          ) : (
            <LectureStudentNoticeContent lectureId={Id} />
          )}
        </div>
      </div>
    </div>
  );
};

export default LectureNotice;
