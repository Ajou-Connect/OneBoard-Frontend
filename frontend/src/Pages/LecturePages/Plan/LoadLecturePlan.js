import React, { useState } from 'react';
import styled from 'styled-components';

const WriteBtn = styled.button`
  font-size: 5px;
  padding: 5px;
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
  const [files, setFiles] = useState(null);

  const lectureId = props.lectureId;
  const Url = `https://docs.google.com/gview?embedded=true&url=http://115.85.182.194:8080/lecture/${lectureId}/plan`;
  const FileURL = `http://115.85.182.194:8080/lecture/${lectureId}/plan`;
  const user = JSON.parse(sessionStorage.userInfo);
  const userType = user.userType;

  const onUploadPlan = () => {
    return (window.location.href = `/Main/Lecture/${lectureId}/Plan/UpLoadPlan`);
  };

  return (
    <div>
      <Title>강의 계획서</Title>
      <hr style={{ width: '100%', margin: '10px 0px', display: 'block', borderColor: '#ffffff' }} />
      <div style={{ display: 'flex' }}>
        <a
          href={FileURL}
          style={{
            marginLeft: '20px',
            textDecoration: 'underline',
            fontWeight: 'bold',
          }}
        >
          강의계획서 다운로드
        </a>
        <WriteBtn style={{ marginLeft: 'auto', marginRight: '30px' }} onClick={onUploadPlan}>
          수정하기
        </WriteBtn>
      </div>
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
