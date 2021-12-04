import React, { useState } from 'react';
import LectureSidebar from '../LectureSidebar';
import './LectureScore.scss';
import styled from 'styled-components';
import ProfessorLectureScore from './ProfessorLectureScore';
import StudentLectureScore from './StudentLectureScore';

const LectureScore = ({ match }) => {
  const user = JSON.parse(sessionStorage.userInfo);
  const userType = user.userType;
  const lectureId = match.params.lectureId;
  return (
    <div className="score">
      <nav className="lecture-menu">
        <LectureSidebar lectureId={lectureId} />
      </nav>
      <div className="score-main">
        {userType === 'T' ? (
          <ProfessorLectureScore lectureId={lectureId} />
        ) : (
          <StudentLectureScore lectureId={lectureId} />
        )}
      </div>
    </div>
  );
};

export default LectureScore;
