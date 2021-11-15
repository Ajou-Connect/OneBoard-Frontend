import React from 'react';
import LectureSidebar from '../LectureSidebar';
import axios from 'axios';
import moment from 'moment';
import styled from 'styled-components';

const LectureAssignment = ({ match }) => {
  const lectureId = match.params.lectureId;

  return (
    <div className="lectureAssignment">
      <nav className="lecture-sidebar">
        <LectureSidebar lectureId={lectureId} />
      </nav>
      <div className="assignment-content">here is for content</div>
    </div>
  );
};

export default LectureAssignment;
