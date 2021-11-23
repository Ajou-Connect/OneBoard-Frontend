import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid #cdcdcd;
  margin: 10px;
  margin-left: 0px;
  width: 90%;
  height: 500px;
`;

export const LectureHomePlan = () => {
  return (
    <div style={{ width: '50%', height: '500px' }}>
      <div style={{ margin: '10px', marginLeft: '0px', fontWeight: 'bold', fontSize: '1.3rem' }}>
        강의계획서
      </div>
      <Container>home Plan page</Container>
    </div>
  );
};

export default LectureHomePlan;
