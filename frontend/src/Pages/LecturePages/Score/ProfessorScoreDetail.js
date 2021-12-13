import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Radio } from 'antd';
import Button from '../../../Component/common/Button';

const Title = styled.div`
  margin-top: 10px;
  margin-left: 20px;
  font-size: 30px;
  border-bottom: 1px solid #f7f9fc;
  height: 40px;
  line-height: 40px;
  font-style: italic;
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

const StyledButton = styled(Button)`
  height: 2.125rem;
  & + & {
    margin-left: 0.5rem;
  }
`;

const ProfessorScoreDetail = ({ match }) => {
  const lectureId = match.params.lectureId;
  const studentId = match.params.studentId;
  const [isUpdate, setIsUpdate] = useState(false);
  const [radioValue, setRadioValue] = useState('A');
  const [attendanceScore, setAttendanceScore] = useState(0);
  const [studentScoreInfo, setStudentScoreInfo] = useState({});
  const [studentAttendanceLists, setStudentAttendanceLists] = useState([
    {
      lessonDate: '',
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

  const getStudentScoreData = () => {
    return new Promise((resolve, reject) => {
      axios
        .get(`/lecture/${lectureId}/grade/${studentId}`)
        .then((res) => {
          const result = res.data.data;
          console.log(result);
          console.log(result.attendanceList);
          console.log(result.submitList);
          setStudentScoreInfo(result);
          setStudentAttendanceLists(result.attendanceList);
          setStudentSubmitLists(result.submitList);
          setAttendanceScore(result.attendScore);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  };

  useEffect(() => {
    getStudentScoreData();
    console.log(attendanceScore);
  }, []);

  const onUpdateScore = () => {
    setIsUpdate(true);
  };

  const onChangeRadio = (e) => {
    setRadioValue(e.target.value);
  };

  const onChangeScore = () => {
    console.log(radioValue);
    axios
      .post(`/lecture/${lectureId}/grade/${studentId}`, {
        result: radioValue,
      })
      .then((res) => {
        console.log(res);
        return (window.location.href = `/Main/Lecture/${lectureId}/Score/ScoreDetail/${studentId}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onCancel = () => {
    return (window.location.href = `/Main/Lecture/${lectureId}/Score`);
  };

  return (
    <div style={{ overflowX: 'hidden' }}>
      <Title>개인성적 </Title>
      <div style={{ display: 'flex' }}>
        <StyledButton
          cyan
          onClick={onUpdateScore}
          style={{ marginLeft: 'auto', marginRight: '1rem' }}
        >
          학점 수정하기
        </StyledButton>
      </div>
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
          출결 점수 : <div style={{ fontWeight: 'bold', marginLeft: '5px' }}>{attendanceScore}</div>
        </SubTitle>
        <SubTitle style={{ display: 'flex' }}>
          점수 총합 :{' '}
          <div style={{ fontWeight: 'bold', marginLeft: '5px' }}>{studentScoreInfo.totalScore}</div>
        </SubTitle>
        <SubTitle style={{ display: 'flex', marginLeft: 'auto', marginRight: '1rem' }}>
          학점 :{' '}
          {isUpdate === false ? (
            <div style={{ fontWeight: 'bold', marginLeft: '5px' }}>{studentScoreInfo.result}</div>
          ) : (
            <div style={{ display: 'flex' }}>
              <Radio.Group style={{ marginLeft: '1rem' }} onChange={onChangeRadio} defaultValue="A">
                <Radio value="A">A</Radio>
                <Radio value="B">B</Radio>
                <Radio value="C">C</Radio>
                <Radio value="F">F</Radio>
              </Radio.Group>
              <StyledButton cyan onClick={onChangeScore}>
                저장하기
              </StyledButton>
            </div>
          )}
        </SubTitle>
      </div>
      <Line />
      <div style={{ display: 'flex' }}>
        <div style={{ width: '100%' }}>
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
        </div>
        <div style={{ width: '100%' }}>
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
                  <td style={{ padding: '30px 0', borderBottom: '1px solid #D5D5D5' }}>
                    {studentSubmitList.assignmentTitle}
                  </td>
                  <td style={{ padding: '30px 0', borderBottom: '1px solid #D5D5D5' }}>
                    {studentSubmitList.score}
                  </td>
                </TabletrColor>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <StyledButton
        cyan
        onClick={onCancel}
        style={{ marginTop: '0.5rem', marginBottom: '5rem', marginLeft: '1rem' }}
      >
        뒤로가기
      </StyledButton>
    </div>
  );
};

export default ProfessorScoreDetail;
