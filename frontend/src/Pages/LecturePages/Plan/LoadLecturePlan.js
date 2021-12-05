import React, { useState } from 'react';
import styled from 'styled-components';
import Iframe from 'react-iframe';
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
  margin-top: 1.5rem;
  margin-left: 20px;
  font-size: 30px;
  border-bottom: 1px solid #f7f9fc;
  height: 40px;
  line-height: 40px;
  font-weight: bold;
`;
export const LoadLecturePlan = (props) => {
  const [files, setFiles] = useState(null);

  const lectureId = props.lectureId;
  const Url = `https://docs.google.com/gview?embedded=true&url=https://115.85.182.194:8080/lecture/${lectureId}/plan`;
  const FileURL = `https://115.85.182.194:8080/lecture/${lectureId}/plan`;
  const user = JSON.parse(sessionStorage.userInfo);
  const userType = user.userType;

  const onUploadPlan = () => {
    return (window.location.href = `/Main/Lecture/${lectureId}/Plan/UpLoadPlan`);
  };

  return (
    <div>
      <Title>강의 계획서</Title>
      <hr style={{ width: '100%', margin: '10px 0px', display: 'block', borderColor: '#ffffff' }} />
      {userType === 'T' ? (
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

          <WriteBtn
            style={{ marginLeft: 'auto', marginRight: '30px', cursor: 'pointer' }}
            onClick={onUploadPlan}
          >
            수정하기
          </WriteBtn>
        </div>
      ) : (
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
        </div>
      )}

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
        <div style={{ margin: '10px', boxShadow: '5px 5px 10px gray', width: '100%' }}>
          <Iframe id="plan" url={Url} width="100%" height="500px" />
        </div>
      </div>
    </div>
  );
};

export default LoadLecturePlan;
