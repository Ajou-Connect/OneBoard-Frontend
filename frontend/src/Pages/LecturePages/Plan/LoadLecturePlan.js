import React from 'react';
import styled from 'styled-components';

const WriteBtn = styled.button`
  font-size: 12px;
  padding: 5px;
  margin-top: 10px;
  margin-bottom: 15px;
  margin-right: 5px;
  background-color: #ececec;
  color: #3e3e3e;
  border-radius: 5px;
  font-weight: bold;
  &:hover {
    background-color: #bfbfbf;
  }
`;

const Title = styled.div`
  font-size: 30px;
  margin-left: 15px;
  border-bottom: 1px solid #f7f9fc;
  height: 40px;
  line-height: 40px;
  font-style: italic;
  text-align: left;
`;
export const LoadLecturePlan = (props) => {
  const lectureId = props.lectureId;
  const Url = `https://docs.google.com/gview?embedded=true&url=http://115.85.182.194:8080/lecture/${lectureId}/plan`;

  return (
    <div>
      <Title>강의 계획서</Title>
      <hr style={{ width: '100%', margin: '10px 0px', display: 'block', borderColor: '#ffffff' }} />
      <div
        style={{
          textAlign: 'center',
          margin: '30px',
          marginTop: '10px',
          fontWeight: 'bold',
          fontSize: '2rem',
        }}
      >
        <iframe id="plan" src={Url} style={{ width: '80%', height: '600px', marginTop: '10px' }} />
      </div>
    </div>
  );
};

export default LoadLecturePlan;
