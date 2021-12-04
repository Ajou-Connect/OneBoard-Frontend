import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Title = styled.div`
  margin-top: 1.5rem;
  margin-left: 20px;
  font-size: 30px;
  border-bottom: 1px solid #f7f9fc;
  height: 40px;
  line-height: 40px;
  font-weight: bold;
`;

const SubTitle = styled.div`
  margin-top: 10px;
  margin-left: 20px;
  font-size: 18px;
  border-bottom: 1px solid #f7f9fc;
  height: 30px;
  line-height: 30px;
`;

const Line = styled.hr`
  width: 100%;
  margin: 10px 0px;
  display: block;
  border-color: #ffffff;
`;
const TabletrColor = styled.tr`
  &:nth-child(even) {
    background: #f7f9fc;
  }
`;

const UpdateBtn = styled.button`
  background-color: #ececec;
  color: #3e3e3e;
  font-size: 12px;
  width: auto;
  margin: 0px;
  margin-right: 5px;
  border-radius: 5px;
  margin-left: auto;
  padding: 5px;
  cursor: pointer;
`;

const BackBtn = styled.button`
  background-color: #6e1345;
  color: #f2e9ee;
  font-size: 12px;
  margin: 1.3rem;
  margin-right: 5px;
  border-radius: 5px;
  margin-left: 1.3rem;
  padding: 5px;
  cursor: pointer;
`;

const WriteBtn = styled.button`
  font-size: 10px;
  margin-left: 10px;
  background-color: #c3cbc2;
  color: #3e3e3e;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #bfbfbf;
  }
`;
const StudentLectureScore = (props) => {
  const lectureId = props.lectureId;
  const [studentScoreInfo, setStudentScoreInfo] = useState({});
  const [studentAttendanceLists, setStudentAttendanceLists] = useState([
    {
      lessonDae: '',
      lessonId: 0,
      status: 0,
    },
  ]);
  const [studentSubmitLists, setStudentSubmitLists] = useState([
    {
      assignmentId: 0,
      assignmentTitle: '',
      score: 0,
      submitId: 0,
    },
  ]);
  const token = sessionStorage.getItem('token');

  const getStudentScoreData = () => {
    return new Promise((resolve, reject) => {
      axios
        .get(`/lecture/${lectureId}/grade`, { headers: { 'X-AUTH-TOKEN': `${token}` } })
        .then((res) => {
          const result = res.data.data;
          console.log(result);
          console.log(result.submitList);
          console.log(result.attendanceList);
          setStudentScoreInfo(result);
          setStudentSubmitLists(result.submitList);
          setStudentAttendanceLists(result.attendanceList);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  };

  useEffect(() => {
    getStudentScoreData();
  }, []);

  return (
    <div>
      <Title>성적확인</Title>
      <div style={{ display: 'flex' }}>
        <SubTitle style={{ display: 'flex' }}>
          이름 :{' '}
          <div style={{ fontWeight: 'bold', marginLeft: '5px' }}>{studentScoreInfo.userName}</div>
        </SubTitle>
        <SubTitle style={{ display: 'flex' }}>
          학번 :{' '}
          <div style={{ fontWeight: 'bold', marginLeft: '5px' }}>
            {studentScoreInfo.studentNumber}
          </div>
        </SubTitle>
        <SubTitle style={{ display: 'flex' }}>
          점수 총합 :{' '}
          <div style={{ fontWeight: 'bold', marginLeft: '5px' }}>{studentScoreInfo.totalScore}</div>
        </SubTitle>
        <SubTitle style={{ display: 'flex', marginLeft: 'auto', marginRight: '1rem' }}>
          학점 :{' '}
          <div style={{ fontWeight: 'bold', marginLeft: '5px' }}>{studentScoreInfo.result}</div>
        </SubTitle>
      </div>
      <Line />
      <div style={{ display: 'flex' }}>
        <table
          style={{
            width: '50%',
            textAlign: 'center',
            marginRight: '5px',
            borderRight: '1px solid #D5D5D5',
          }}
        >
          <thead
            style={{
              borderBottom: '1px solid #D5D5D5',
              fontStyle: 'bold',
              fontWeight: '500',
              backgroundColor: '#f3f3f3',
            }}
          >
            <tr>
              <th style={{ padding: '10px 0', width: '70%' }}>수강 날짜</th>
              <th style={{ padding: '10px 0', width: '30%' }}>출결 상태</th>
            </tr>
          </thead>
          <tbody>
            {studentAttendanceLists.map((studentAttendanceList, index) => (
              <TabletrColor key={index} style={{ height: '30px' }}>
                <td style={{ padding: '15px 0', borderBottom: '1px solid #D5D5D5' }}>
                  {studentAttendanceList.lessonDate}
                </td>
                <td style={{ padding: '15px 0', borderBottom: '1px solid #D5D5D5' }}>
                  {studentAttendanceList.status === 2 ? (
                    <div style={{ color: '#22CE41', fontWeight: 'bold' }}>출석</div>
                  ) : studentAttendanceList.status === 1 ? (
                    <div style={{ color: '#ECB807', fontWeight: 'bold' }}>지각</div>
                  ) : (
                    <div style={{ color: 'red', fontWeight: 'bold' }}>결석</div>
                  )}
                </td>
              </TabletrColor>
            ))}
          </tbody>
        </table>
        <table
          style={{
            width: '50%',
            textAlign: 'center',
            marginRight: '5px',
            borderRight: '1px solid #D5D5D5',
          }}
        >
          <thead
            style={{
              borderBottom: '1px solid #D5D5D5',
              fontStyle: 'bold',
              fontWeight: '500',
              backgroundColor: '#f3f3f3',
            }}
          >
            <tr>
              <th style={{ padding: '10px 0', width: '70%' }}>과제 제목</th>
              <th style={{ padding: '10px 0', width: '30%' }}>점수</th>
            </tr>
          </thead>
          <tbody style={{ maxHeight: '100px' }}>
            {studentSubmitLists.map((studentSubmitList, index) => (
              <TabletrColor key={index}>
                <td style={{ padding: '15px 0', borderBottom: '1px solid #D5D5D5' }}>
                  {studentSubmitList.assignmentTitle}
                </td>
                <td style={{ padding: '15px 0', borderBottom: '1px solid #D5D5D5' }}>
                  {studentSubmitList.score}
                </td>
              </TabletrColor>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentLectureScore;
