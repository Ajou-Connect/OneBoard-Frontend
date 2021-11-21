import React from 'react';
import axios from 'axios';
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

export const UpLoadPlan = (props) => {
  const lectureId = props.lectureId;

  const onUploadPlan = () => {
    return (window.location.href = `/Main/Lecture/${lectureId}/Plan/UpLoadPlan`);
  };

  return (
    <div>
      <Title>강의 계획서</Title>
      <hr style={{ width: '100%', margin: '10px 0px', display: 'block', borderColor: '#ffffff' }} />
      <div style={{ textAlign: 'center', margin: '50px', fontWeight: 'bold', fontSize: '2rem' }}>
        현재 등록된 강의노트가 없습니다.
      </div>
      <WriteBtn style={{ marginLeft: '20px' }} onClick={onUploadPlan}>
        강의노트 등록하기
      </WriteBtn>
    </div>
  );
};

export default UpLoadPlan;
