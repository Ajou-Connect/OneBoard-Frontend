import React from 'react';
import LectureSidebar from '../LectureSidebar';
import axios from 'axios';
import moment from 'moment';
import styled from 'styled-components';
import './LectureAssignment.scss';
import AssignmentList from './AssignmentList';

const LectureAssignment = ({ match }) => {
  const lectureId = match.params.lectureId;

  return (
    <div className="lectureAssignment">
      <nav className="lecture-sidebar">
        <LectureSidebar lectureId={lectureId} />
      </nav>
      <div className="assignment-content">
        <AssignmentList lectureId={lectureId} />
      </div>
    </div>
  );
};

export default LectureAssignment;
