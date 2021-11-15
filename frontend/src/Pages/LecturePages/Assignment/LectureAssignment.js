import React from 'react';
import LectureSidebar from '../LectureSidebar';
import axios from 'axios';
import moment from 'moment';
import styled from 'styled-components';
import './LectureAssignment.scss';
import ProfessorAssignmentList from './ProfessorAssignmentList';

const LectureAssignment = ({ match }) => {
  const lectureId = match.params.lectureId;
  const userType = match.params.userType;
  return (
    <div className="lectureAssignment">
      <nav className="lecture-sidebar">
        <LectureSidebar lectureId={lectureId} />
      </nav>
      <div className="assignment-content">
        <ProfessorAssignmentList lectureId={lectureId} userType={userType} />
      </div>
    </div>
  );
};

export default LectureAssignment;
