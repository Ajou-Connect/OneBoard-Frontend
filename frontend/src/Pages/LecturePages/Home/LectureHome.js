import React from 'react';
import LectureSidebar from '../LectureSidebar';
import './LectureHome.scss';
import LectureHomeNotice from './LectureHomeNotice';
import LectureHomePlan from './LectureHomePlan';
import styled from 'styled-components';
import Nav from '../../../Sidebar/Nav';

const Title = styled.div`
  margin-top: 1.5rem;
  margin-left: 20px;
  font-size: 30px;
  border-bottom: 1px solid #f7f9fc;
  height: 40px;
  line-height: 40px;
  font-weight: bold;
`;

const LectureHome = ({ match }) => {
  const lectureId = match.params.lectureId;

  return (
    <div className="lecture-home">
      <Nav />
      <div className="home-content">
        <LectureSidebar lectureId={lectureId} />
        <div style={{ width: '100%' }}>
          <Title>과목 홈</Title>
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
    </div>
  );
};

export default LectureHome;
