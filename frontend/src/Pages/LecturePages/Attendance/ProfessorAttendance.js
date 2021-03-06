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

const TabletrColor = styled.tr`
  &:nth-child(even) {
    background: #f7f9fc;
  }
`;

const ProfessorAttendance = (props) => {
  const [attendances, setAttendances] = useState([]);
  const lectureId = props.lectureId;
  const user = JSON.parse(localStorage.userInfo);
  const userType = user.userType;

  const getAttendanceData = () => {
    return new Promise((resolve, reject) => {
      axios
        .get(`lecture/${lectureId}/attendances`)
        .then((res) => {
          const result = res.data.data;
          setAttendances(result);
          console.log(result);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  };

  useEffect(() => {
    getAttendanceData();
  }, []);

  const onDetail = (e, studentId) => {
    console.log(studentId);
    return (window.location.href = `/Main/Lecture/${lectureId}/Attendance/${studentId}`);
  };

  return (
    <div>
      <Title>출석현황</Title>
      <hr style={{ width: '100%', margin: '10px 0px', display: 'block', borderColor: '#ffffff' }} />
      <table
        style={{
          width: '100%',
          borderTop: '1px solid #D5D5D5',
          textAlign: 'center',
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
            <th style={{ padding: '10px 0', width: 'auto' }}>학생 이름</th>
            <th style={{ padding: '10px 0', width: 'auto' }}>학번</th>
            <th style={{ padding: '10px 0', width: 'auto' }}>출석횟수</th>
            <th style={{ padding: '10px 0', width: 'auto' }}>전체 수업 수</th>
          </tr>
        </thead>
        <tbody>
          {attendances.map((attendance, index) => (
            <TabletrColor key={index}>
              <td
                style={{
                  padding: '10px 0',
                  borderBottom: '1px solid #D5D5D5',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  textDecoration: 'underline',
                }}
                onClick={(e) => onDetail(e, attendance.studentId)}
              >
                {attendance.studentName}
              </td>
              <td style={{ padding: '10px 0', borderBottom: '1px solid #D5D5D5' }}>
                {attendance.studentNumber}
              </td>
              <td
                style={{
                  padding: '10px 0',
                  borderBottom: '1px solid #D5D5D5',
                  color: '#0C7E82',
                  fontWeight: 'bold',
                  fontSize: '1.2rem',
                }}
              >
                {attendance.attendanceList.filter((list) => list.status === 2).length}
              </td>
              <td
                style={{
                  padding: '10px 0',
                  borderBottom: '1px solid #D5D5D5',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                }}
              >
                / {attendance.attendanceList.length}
              </td>
            </TabletrColor>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProfessorAttendance;
