import React from 'react';
import LectureSidebar from '../LectureSidebar';
import './LectureHome.scss';
import LectureHomeNotice from './LectureHomeNotice';
import LectureHomePlan from './LectureHomePlan';
import styled from 'styled-components';

const Title = styled.div`
  margin-top: 10px;
  margin-left: 20px;
  font-size: 30px;
  border-bottom: 1px solid #f7f9fc;
  height: 40px;
  line-height: 40px;
  font-style: italic;
`;

const LectureHome = ({ match }) => {
  const lectureId = match.params.lectureId;

  return (
    <div className="lecture-home">
      <nav className="lecture-sidebar">
        <LectureSidebar lectureId={lectureId} />
      </nav>
      <div className="home-content">
        <Title>Home</Title>
        <hr
          style={{
            width: '100%',
            margin: '10px 0px',
            display: 'block',
            borderColor: '#ffffff',
          }}
        />
        <div style={{ display: 'flex' }}>
          <LectureHomeNotice lectureId={lectureId} />
          <LectureHomePlan lectureId={lectureId} />
        </div>
      </div>
    </div>
  );
};

export default LectureHome;
