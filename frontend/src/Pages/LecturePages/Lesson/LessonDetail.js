import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import palette from '../../../lib/styles/palette';

const Title = styled.div`
  font-size: 30px;
  margin-left: 15px;
  margin-top: 15px;
  border-bottom: 1px solid #f7f9fc;
  height: 40px;
  line-height: 40px;
  font-style: italic;
  text-align: left;
`;

const TitleInput = styled.input`
  font-size: 1rem;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[4]};
  margin-bottom: 2rem;
  margin-top: 10px;
  width: 70%;
`;
const RoomInput = styled.input`
  font-size: 1rem;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[4]};
  margin-bottom: 2rem;
  margin-top: 10px;
  width: 70%;
`;
const MeetInput = styled.input`
  font-size: 1rem;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[4]};
  margin-bottom: 2rem;
  margin-top: 10px;
  width: 70%;
`;

const Btn = styled.button`
  font-size: 2px;
  padding: 5px;
  margin-right: 10px;
  background-color: rgba(215, 226, 185, 0.596);
  color: #3e3e3e;
  border-radius: 7px;
  &:hover {
    background-color: #bfbfbf;
  }
`;

const WriteBtn = styled.button`
  font-size: 20px;
  padding: 5px;
  margin-left: 20px;
  background-color: #ececec;
  color: #3e3e3e;
  border-radius: 5px;
  &:hover {
    background-color: #bfbfbf;
  }
`;

const LessonDetail = ({ match }) => {
  const lessonId = match.params.lessonId;
  const lectureId = match.params.lectureId;
  const [lessonDetails, setLessonDetails] = useState([]);
  const user = JSON.parse(sessionStorage.userInfo);
  const userType = user.userType;
  const getLessonData = () => {
    return new Promise((resolve, reject) => {
      axios
        .get(`lecture/${lectureId}/lesson/${lessonId}`)
        .then((res) => {
          const result = res.data.data;
          setLessonDetails(result);
          console.log(result);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  };

  useEffect(() => {
    getLessonData();
  }, []);

  const onCancel = () => {
    return (window.location.href = `/Main/Lecture/${lectureId}/Lesson`);
  };

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <Title>{lessonDetails.title}</Title>
        <div
          style={{
            fontSize: '1.3rem',
            marginTop: '1.5rem',
            marginRight: '15px',
            marginLeft: '2rem',
          }}
        >
          강의 날짜 : {lessonDetails.date}
        </div>
        <div
          style={{
            fontSize: '1.3rem',
            marginTop: '1.5rem',
            marginRight: '15px',
            marginLeft: '2rem',
            display: 'flex',
          }}
        >
          수업 타입 :
          {lessonDetails.type === 2 ? (
            <div style={{ marginLeft: '15px' }}>비대면 실시간 수업</div>
          ) : lessonDetails.type === 1 ? (
            <div style={{ marginLeft: '15px' }}>대면 수업</div>
          ) : (
            <div style={{ marginLeft: '15px' }}>녹화 강의</div>
          )}
        </div>
        {userType === 'S' ? (
          <div
            style={{
              fontSize: '1.3rem',
              marginTop: '1.5rem',
              marginRight: '50px',
              marginLeft: 'auto',
            }}
          >
            출석 정보
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <hr style={{ width: '100%', margin: '10px 0px', display: 'block', borderColor: '#ffffff' }} />

      <div style={{ display: 'flex', marginLeft: '1rem' }}>
        <div
          style={{
            fontSize: '1rem',
            paddingBottom: '0.5rem',
            marginBottom: '2rem',
            marginTop: '15px',
            marginRight: '15px',
            fontWeight: 'bold',
            display: 'flex',
          }}
        >
          강의 노트 :{' '}
          {lessonDetails.noteUrl === null ? (
            <div style={{ color: 'red', marginLeft: '1rem' }}>등록된 강의노트가 없습니다</div>
          ) : (
            <div style={{ textDecoration: 'underline', color: 'skyblue', marginLeft: '1rem' }}>
              {lessonDetails.noteUrl}
            </div>
          )}
        </div>
      </div>
      <div>
        <iframe style={{ marginLeft: '1.5rem', width: '50%', height: '400px' }}></iframe>
      </div>

      <hr style={{ width: '100%', margin: '10px 0px', display: 'block', borderColor: '#ffffff' }} />
      <div style={{ display: 'flex' }}>
        <div
          style={{
            fontSize: '1rem',
            paddingBottom: '0.5rem',
            marginBottom: '2rem',
            marginTop: '15px',
            marginRight: '15px',
            fontWeight: 'bold',
            marginLeft: '15px',
            display: 'flex',
          }}
        >
          {lessonDetails.type === 2 ? (
            <div>실시간 수업 입장 : {lessonDetails.meetingId}</div>
          ) : lessonDetails.type === 1 ? (
            <div>강의실 정보 : {lessonDetails.room}</div>
          ) : (
            <div>녹화 강의 : {lessonDetails.videoUrl}</div>
          )}
        </div>
      </div>
      <WriteBtn onClick={onCancel}>뒤로가기</WriteBtn>
    </div>
  );
};

export default LessonDetail;
