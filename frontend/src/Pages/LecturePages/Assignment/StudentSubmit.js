import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ProblemTitle = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: 600;
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
  background-color: #22e2cf;
  color: white;
  border-radius: 5px;
`;

const StudentSubmit = ({ lectureId, assignmentId, assignmentsScore }) => {
  const [studentScore, setStudentScore] = useState(0);
  const [submitAssignments, setSubmitAssignments] = useState([]);
  const user = JSON.parse(localStorage.userInfo);
  const userType = user.userType;

  const onChangeScore = (e) => {
    //점수만 바꿔서 저장 해주기
  };

  const getSubmitData = () => {
    return new Promise((resolve, reject) => {
      axios
        .get(`/lecture/${lectureId}/assignment/${assignmentId}/submits`)
        .then((res) => {
          const result = res.data.data;
          setSubmitAssignments(result);
          console.log(result);
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

  const onSubmitAssignment = (e, submitId) => {
    return (window.location.href = `/Main/Lecture/${userType}/${lectureId}/Assignment/${assignmentId}/ProfessorDetail/${submitId}`);
  };

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
              <td
                style={{
                  padding: '10px 0',
                  backgroundColor: 'white',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  textDecoration: 'underline',
                }}
                onClick={(e) => onSubmitAssignment(e, submitAssignment.submitId)}
              >
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
                  <div style={{ paddingLeft: '100px' }}>
                    <ScoreInput onChange={onChangeScore} placeholder={submitAssignment.score} />
                    <span style={{ width: '20%' }}> / {assignmentsScore}</span>
                  </div>
                  <ScoreButton onClick={(e) => onChangeScore(index, studentScore)}>
                    수정
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
