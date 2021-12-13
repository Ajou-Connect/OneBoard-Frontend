import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import './LectureAssignment.scss';

const ProblemTitle = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: 600;
`;

const StudentSubmit = ({ lectureId, assignmentId, assignmentsScore }) => {
  const [submitAssignments, setSubmitAssignments] = useState([]);
  const user = JSON.parse(localStorage.userInfo);
  const userType = user.userType;

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

  const DownAssignment = (e, submitId) => {
    axios
      .get(`/lecture/${lectureId}/assignment/${assignmentId}/submit/${submitId}/file`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
              className="table-row"
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
                  fontWeight: 'bold',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                }}
                onClick={(e) => onSubmitAssignment(e, submitAssignment.submitId)}
              >
                {submitAssignment.userName}
              </td>
              <td
                style={{
                  padding: '10px 0',
                  backgroundColor: 'white',
                }}
              >
                {submitAssignment.content}
              </td>
              <td style={{ padding: '10px 0', backgroundColor: 'white' }}>
                {submitAssignment.fileUrl === null ? (
                  <div></div>
                ) : (
                  <div
                    style={{ textDecoration: 'underline', fontWeight: 'bold', cursor: 'pointer' }}
                    onClick={(e) => DownAssignment(e, submitAssignment.submitId)}
                  >
                    제출 파일 다운로드
                  </div>
                )}
              </td>
              <td style={{ padding: '10px 0', backgroundColor: 'white', justifyContent: 'center' }}>
                <center>
                  <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#1BC612' }}>
                    {submitAssignment.score} / {assignmentsScore}
                  </div>
                </center>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentSubmit;
