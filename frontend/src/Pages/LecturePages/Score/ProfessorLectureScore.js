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

const ProfessorLectureScore = (props) => {
  const [studentsScore, setStudentScore] = useState([]);
  const [scoreRatio, setScoreRatio] = useState(0);
  const [isScore, setIsScore] = useState(false);

  const lectureId = props.lectureId;

  const onDetail = (e, studentId) => {
    return (window.location.href = `/Main/Lecture/${lectureId}/Score/ScoreDetail/${studentId}`);
  };

  const getScoreData = () => {
    return new Promise((resolve, reject) => {
      axios
        .get(`/lecture/${lectureId}/grade/list`)
        .then((res) => {
          const result = res.data.data;
          console.log(result);
          setStudentScore(result);
          if (result !== null) {
            setIsScore(true);
          }
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  };

  const getScoreRatioData = () => {
    return new Promise((resolve, reject) => {
      axios
        .get(`/lecture/${lectureId}/grade/ratio`)
        .then((res) => {
          const result = res.data.data;
          console.log(res);
          setScoreRatio(result);
          if (result !== null) {
            setIsScore(true);
          }
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  };

  useEffect(() => {
    getScoreData();
    getScoreRatioData();
  }, []);

  return (
    <div>
      <div>
        <Title>성적 확인</Title>
      </div>

      <Line />
      {isScore === true ? (
        <div>
          <div style={{ display: 'flex' }}>
            <SubTitle>학점 비율 </SubTitle>
            <SubTitle style={{ marginLeft: 'auto', marginRight: '1rem' }}>
              A : {scoreRatio.aratio}% B : {scoreRatio.bratio}%
            </SubTitle>
          </div>
          <table style={{ width: '100%', borderTop: '1px solid #D5D5D5', textAlign: 'center' }}>
            <thead
              style={{
                borderBottom: '1px solid #D5D5D5',
                fontWeight: 'bold',
                backgroundColor: '#f3f3f3',
              }}
            >
              <tr>
                <th style={{ padding: '10px 0', width: 'auto' }}>학생이름</th>
                <th style={{ padding: '10px 0', width: 'auto' }}>과제/시험 점수</th>
                <th style={{ padding: '10px 0', width: 'auto' }}>출석 점수</th>
                <th style={{ padding: '10px 0', width: 'auto' }}>총 점수</th>
                <th style={{ padding: '10px 0', width: 'auto' }}>학점</th>
              </tr>
            </thead>
            <tbody>
              {studentsScore.map((studentScore, index) => (
                <TabletrColor key={index}>
                  <td
                    style={{
                      padding: '10px 0',
                      borderBottom: '1px solid #D5D5D5',
                      fontWeight: 'bold',
                      textDecoration: 'underline',
                      cursor: 'pointer',
                    }}
                    onClick={(e) => onDetail(e, studentScore.userId)}
                  >
                    {studentScore.userName}
                  </td>
                  <td
                    style={{
                      padding: '10px 0',
                      borderBottom: '1px solid #D5D5D5',
                    }}
                  >
                    {studentScore.submitScore}
                  </td>
                  <td
                    style={{
                      padding: '10px 0',
                      borderBottom: '1px solid #D5D5D5',
                    }}
                  >
                    {studentScore.attendScore}
                  </td>
                  <td
                    style={{
                      padding: '10px 0',
                      borderBottom: '1px solid #D5D5D5',
                    }}
                  >
                    {studentScore.totalScore}
                  </td>
                  <td
                    style={{
                      padding: '10px 0',
                      borderBottom: '1px solid #D5D5D5',
                    }}
                  >
                    {studentScore.result}
                  </td>
                </TabletrColor>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <center style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
            등록된 성적이 없습니다.
          </center>
        </div>
      )}
    </div>
  );
};

export default ProfessorLectureScore;
