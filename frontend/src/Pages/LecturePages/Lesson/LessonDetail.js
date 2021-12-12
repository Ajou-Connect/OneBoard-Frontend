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

const TabletrColor = styled.tr`
  &:nth-child(even) {
    background: #f7f9fc;
  }
`;

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const LessonDetail = ({ match }) => {
  const lessonId = match.params.lessonId;
  const lectureId = match.params.lectureId;
  const [isProfessor, setIsProfessor] = useState(false);
  const [lessonDetails, setLessonDetails] = useState([]);
  const [studentInfo, setStudentInfo] = useState([]);
  const [sessionId, setSessionId] = useState("");
  const user = JSON.parse(sessionStorage.userInfo);
  const userType = user.userType;
  const Url = `https://docs.google.com/gview?embedded=true&url=https://115.85.182.194:8080/lecture/${lectureId}/lesson/${lessonId}/note`;
  const FileURL = `https://115.85.182.194:8080/lecture/${lectureId}/lesson/${lessonId}/note`;
  const labels = ['출석', '결석', '지각'];
  const LessonLink = `/class/${lectureId}/${lessonId}/${sessionId}/${userType}`;
  const token = sessionStorage.getItem("token");

  const getLessonData = () => {
    return new Promise((resolve, reject) => {
      axios
        .get(`lecture/${lectureId}/lesson/${lessonId}`)
        .then((res) => {
          const result = res.data.data;
          setLessonDetails(result);
          setSessionId(result.session);
          console.log(result);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  };

  

  const LessonCheck = () => {
    return new Promise((resolve, reject) => {
      axios.get(`/lecture/${lectureId}/lesson/${lessonId}/live/entrance`, { headers: { "X-AUTH-TOKEN": `${token}` }, params: { "session": `${sessionId}` } })
        .then((res) => {
          const result = res;
          console.log(result);
          if (result.data.result === "SUCCESS") {
            return window.location.href = `/class/${lectureId}/${lessonId}/${sessionId}/${userType}`
          }
          else {
            alert("수업에 입장할 수 없습니다.");
          }
      })
        .catch((error) => {
          console.log(error);
          reject(error);
      })
    })
  }

  const getLessonAttendanceData = () => {
    return new Promise((resolve, reject) => {
      axios
        .get(`lecture/${lectureId}/lesson/${lessonId}/attendances`)
        .then((res) => {
          const result = res.data.data;
          console.log(result);
          setStudentInfo(result);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  };

  const checkIsProfessor = () => {
    if (userType === "T") {
      setIsProfessor(true);
    }
    else setIsProfessor(false);

  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: '수업 출석 현황',
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: '학생 수',
        data: [
          studentInfo.filter((ex) => ex.attendanceList[0].status === 2).length,
          studentInfo.filter((ex) => ex.attendanceList[0].status === 0).length,
          studentInfo.filter((ex) => ex.attendanceList[0].status === 1).length,
        ],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  useEffect(() => {
    getLessonData();
    getLessonAttendanceData();
    checkIsProfessor();
    console.log(studentInfo.map((ex, index) => ex.attendanceList.map((ex2, index) => ex2.status)));
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
            {isProfessor ? (<div style={{cursor:"pointer"}} onClick={LessonCheck}>실시간 수업입장</div>) : (<div style={{cursor:"pointer"}} onClick={LessonCheck}>실시간 수업입장</div>)}
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
      {userType === 'S' ? (
        <div></div>
      ) : (
        <>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '50%' }}>
              <Bar options={options} data={data} />
            </div>
            <div style={{ width: '50%', marginLeft: '1rem' }}>
              {/* <WriteAcitonButtonBlock>
                  <StyledButton cyan onClick={}>일괄 결석</StyledButton>
                <StyledButton cyan onClick={}>일괄 출석</StyledButton>
              </WriteAcitonButtonBlock> */}
              <table
                style={{
                  width: '100%',
                  textAlign: 'center',
                  marginRight: '5px',
                  borderRight: '1px solid #D5D5D5',
                }}
              >
                <thead
                  style={{
                    borderBottom: '1px solid #D5D5D5',
                    fontWeight: 'bold',
                    fontWeight: '500',
                    backgroundColor: '#f3f3f3',
                  }}
                >
                  <tr>
                    <th style={{ padding: '10px 0', width: 'auto' }}>이름</th>
                    <th style={{ padding: '10px 0', width: 'auto' }}>학번</th>
                    <th style={{ padding: '10px 0', width: 'auto' }}>출결</th>
                  </tr>
                </thead>
                <tbody>
                  {studentInfo.map((studentList, index) => (
                    <TabletrColor key={index}>
                      <td style={{ padding: '10px 0', borderBottom: '1px solid #D5D5D5' }}>
                        {studentList.studentName}
                      </td>
                      <td style={{ padding: '10px 0', borderBottom: '1px solid #D5D5D5' }}>
                        {studentList.studentNumber}
                      </td>
                      <td style={{ padding: '10px 0', borderBottom: '1px solid #D5D5D5' }}>
                        {studentList.attendanceList[0].status === 2 ? (
                          <div style={{ color: 'green', fontWeight: 'bold' }}>출석</div>
                        ) : studentList.attendanceList[0].status === 1 ? (
                          <div style={{ color: 'yellowgreen', fontWeight: 'bold' }}>지각</div>
                        ) : (
                          <div style={{ color: 'red', fontWeight: 'bold' }}>결석</div>
                        )}
                      </td>
                    </TabletrColor>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <hr
            style={{ width: '100%', margin: '10px 0px', display: 'block', borderColor: '#ffffff' }}
          />
        </>
      )}
      <div style={{ height: '5rem' }}>
        <StyledButton cyan onClick={onCancel}>
          뒤로가기
        </StyledButton>
      </div>
    </div>
  );
};

export default LessonDetail;
