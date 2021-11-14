import React from 'react';
import LectureSidebar from '../LectureSidebar';

const LecturePlan = ({ match }) => {
  const lectureId = match.params.lectureId;

  return (
    <div>
      <nav>
        <LectureSidebar lectureId={lectureId} />
      </nav>
    </div>
  );
};

export default LecturePlan;
