import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Iframe from 'react-iframe';
import Button from '../../../Component/common/Button';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';

const TTitle = styled.div`
  font-size: 30px;
  margin-left: 15px;
  margin-top: 15px;
  border-bottom: 1px solid #f7f9fc;
  height: 40px;
  line-height: 40px;
  font-style: italic;
  text-align: left;
`;

const StyledButton = styled(Button)`
  height: 2.3rem;
  margin-left: 1rem;
  & + & {
    margin-left: 0.5rem;
  }
`;

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const LessonDetail = ({ match }) => {
  const lessonId = match.params.lessonId;
  const lectureId = match.params.lectureId;
  const [lessonDetails, setLessonDetails] = useState([]);

  const user = JSON.parse(sessionStorage.userInfo);
  const userType = user.userType;
  const Url = `https://docs.google.com/gview?embedded=true&url=https://115.85.182.194:8080/lecture/${lectureId}/lesson/${lessonId}/note`;
  const FileURL = `https://115.85.182.194:8080/lecture/${lectureId}/lesson/${lessonId}/note`;
  const labels = ['출석', '결석', '지각'];
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

  const getLessonAttendanceData = () => {
    return new Promise((resolve, reject) => {
      axios
        .get(`lecture/${lectureId}/lesson/${lessonId}/attendances`)
        .then((res) => {
          const result = res.data.data;
          console.log(result);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar chart example',
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'dataset 1',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'red',
      },
      {
        label: 'dataset 2',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'blue',
      },
    ],
  };

  useEffect(() => {
    getLessonData();
    getLessonAttendanceData();
  }, []);

  const onCancel = () => {
    return (window.location.href = `/Main/Lecture/${lectureId}/Lesson`);
  };

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <TTitle>{lessonDetails.title}</TTitle>
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
            <div style={{ marginLeft: '15px' }}>대면 수업</div>
          ) : lessonDetails.type === 1 ? (
            <div style={{ marginLeft: '15px' }}>비대면 실시간 수업</div>
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
            <div
              style={{
                textDecoration: 'underline',
                color: 'skyblue',
                marginLeft: '1rem',
              }}
            >
              <a href={FileURL}>{lessonDetails.title} 강의노트 다운로드</a>
              <div>
                <Iframe url={Url} width="700px" height="400px" />
              </div>
            </div>
          )}
        </div>
        {lessonDetails.type === 1 ? (
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
            <a href="/class/st">실시간 수업입장</a>
            {/* 실시간 수업 입장 : {lessonDetails.meetingId} */}
          </div>
        ) : lessonDetails.type === 2 ? (
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
            강의실 정보 : {lessonDetails.room}
          </div>
        ) : (
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
            녹화 강의 : {lessonDetails.videoUrl}
          </div>
        )}
      </div>

      <hr style={{ width: '100%', margin: '10px 0px', display: 'block', borderColor: '#ffffff' }} />
      <div>
        <Bar options={options} data={data} />
      </div>
      <hr style={{ width: '100%', margin: '10px 0px', display: 'block', borderColor: '#ffffff' }} />

      <StyledButton cyan onClick={onCancel}>
        뒤로가기
      </StyledButton>
    </div>
  );
};

export default LessonDetail;
