import React from 'react';
import LectureSidebar from '../LectureSidebar';
import axios from 'axios';
import moment from 'moment';
import styled from 'styled-components';

const LectureAssignment = ({ match }) => {
  const lectureId = match.params.lectureId;

  return (
    <div>
      <nav>
        <LectureSidebar lectureId={lectureId} />
      </nav>
    </div>
  );
};

export default LectureAssignment;
