import React from 'react';
import LectureSidebar from '../LectureSidebar';
import './LectureAttendance.scss';

const LectureAttendance = ({ match }) => {
  const lectureId = match.params.lectureId;
  return (
    <div className="LectureAttendance">
      <div className="lecture-sidebar">
        <LectureSidebar lectureId={lectureId} />
      </div>
      <div>hiqwrqwrwqr</div>
    </div>
  );
};

export default LectureAttendance;
