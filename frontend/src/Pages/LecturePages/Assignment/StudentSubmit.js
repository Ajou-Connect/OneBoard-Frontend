import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  width: 97%;
  display: block;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  padding: 0 20px;
`;
const Title = styled.div`
  font-size: 30px;
  border-bottom: 1px solid #f7f9fc;
  height: 40px;
  line-height: 40px;
  font-style: italic;
`;
const SubTitle = styled.div`
  float: left;
  margin-top: 3px;
  margin-right: 20px;
  color: #8b8b8b;
  font-size: 13px;
  font-weight: 400;
`;
const WriteBtn = styled.button`
  display: inline-block;
  float: right;
  font-size: 16px;
  padding: 5px;
  background-color: ${(props) => props.theme.color.blue};
  color: white;
  border-radius: 5px;
  margin-right: 5px;
`;
const ProblemContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px 15px;
  margin: 0 auto;
  margin-bottom: 50px;
  width: 100%;
  box-shadow: 0 5px 5px 0 #eeeeee;
`;
const ProblemTitle = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: 600;
`;
const ProblemContent = styled.div`
  width: 100%;
  margin: 10px auto;
  padding: 0 5px;
`;
const ScoreInput = styled.input`
  width: 30%;
  border: 1px solid #d9d9d9;
  padding: 10px;
  display: inline-block;
`;
const ScoreButton = styled.button`
  width: 20%;
  display: inline-block;
  padding: 3px;
  background-color: blue;
  color: white;
  border-radius: 5px;
`;
const CheckBtn = styled.button`
  display: block;
  margin: 10px auto;
  font-size: 16px;
  padding: 5px;
  background-color: ${(props) => props.theme.color.blue};
  color: white;
  border-radius: 5px;
`;

const StudentSubmit = ({ lectureId, assignmentId }) => {
  const [studentScore, setStudentScore] = useState(0);
  const [submitAssignments, setSubmitAssignments] = useState([]);
  const [studentLists, setStudentLists] = useState([]);
  const onChangeScore = (e) => {};

  const getSubmitData = () => {
    return new Promise((resolve, reject) => {
      axios
        .get(`/lecture/${lectureId}/assignment/${assignmentId}/submits`)
        .then((res) => {
          const result = res.data.data;
          setSubmitAssignments(result);
          console.log(result[0].userName);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  };

  useEffect(() => {
    getSubmitData();
  }, []);

  return (
    <div>
      <hr style={{ width: '100%', margin: '10px 0px', display: 'block', borderColor: '#ffffff' }} />
      <ProblemTitle>학생 제출물</ProblemTitle>
      <table
        style={{
          width: '100%',
          margin: '10px auto',
          borderTop: '1px solid #D5D5D5',
          textAlign: 'center',
          borderSpacing: '0px 10px',
          borderCollapse: 'separate',
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
            <th style={{ padding: '10px 0', width: '20%' }}>이름</th>
            <th style={{ padding: '10px 0', width: '30%' }}>내용</th>
            <th style={{ padding: '10px 0', width: '20%' }}>첨부파일</th>
            <th style={{ padding: '10px 0', width: '30%' }}>점수</th>
          </tr>
        </thead>
        <tbody>
          {submitAssignments.map((submitAssignment, index) => (
            <tr
              style={{
                borderRadius: '5px',
                boxShadow: '0px 2px 2px 1px #eeeeee',
                cursor: 'pointer',
              }}
            >
              <td
                style={{
                  padding: '10px 0',
                  backgroundColor: 'white',
                  borderRadius: '5px 0 0 5px',
                }}
              >
                {submitAssignment.userName}
              </td>
              <td style={{ padding: '10px 0', backgroundColor: 'white' }}>
                {submitAssignment.content}
              </td>
              <td style={{ padding: '10px 0', backgroundColor: 'white' }}>
                {submitAssignment.fileUrl}
              </td>
              <td style={{ padding: '10px 0', backgroundColor: 'white' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    margin: '0',
                    padding: '0 5px',
                  }}
                >
                  <div>
                    <ScoreInput onChange={onChangeScore} placeholder={submitAssignment.score} />
                    <span style={{ width: '20%' }}> / 배점</span>
                  </div>
                  <ScoreButton onClick={(e) => onChangeScore(index, studentScore)}>
                    저장
                  </ScoreButton>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentSubmit;
