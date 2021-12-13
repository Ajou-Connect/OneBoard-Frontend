import React, { useState } from 'react';
import LectureSidebar from '../LectureSidebar';
import './LectureScore.scss';
import styled from 'styled-components';
import ProfessorLectureScore from './ProfessorLectureScore';
import StudentLectureScore from './StudentLectureScore';
import Nav from '../../../Sidebar/Nav';
const LectureScore = ({ match }) => {
  const user = JSON.parse(localStorage.userInfo);
  const userType = user.userType;
  const lectureId = match.params.lectureId;
  return (
    <div className="score">
      <Nav />
      <div className="score-main">
        <LectureSidebar lectureId={lectureId} />
        <div style={{ width: '100%' }}>
          {userType === 'T' ? (
            <ProfessorLectureScore lectureId={lectureId} />
          ) : (
            <StudentLectureScore lectureId={lectureId} />
          )}
        </div>
      </div>
    </div>
  );
};

export default LectureScore;
