import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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
  text-alignment: left;
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
  background-color: ${(props) => props.theme.color.blue};
  color: white;
  font-size: 16px;
  width: 80px;
  margin-right: 5px;
  padding: 5px;
  border-radius: 5px;
`;
const SelectCust = styled.select`
  font-size: 16px;
  width: 80px;
  margin-right: 5px;
  padding: 5px;

  border-radius: 5px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;
const Box = styled.td`
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 3px 5px 5px 3px #f5f5f5;
`;
const BoxTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  display: block;
  margin-bottom: 5px;
  text-align: left;
`;
const Icon = styled.img`
  max-height: 14px;
  max-width: 14px;
`;
const BoxText = styled.div`
  display: inline-block;
  font-size: 14px;
  font-weight: normal;
`;
const NumText = styled.div`
  display: inline-block;
  font-size: 24px;
  font-weight: 700;
`;
const AttendBox = styled.div`
  width: 100%;
  margin-bottom: 10px;
  border-radius: 20px;
  padding: 5px;
  padding-left: 10px;
  display: block;
  background-color: #f3f3f3;
`;
const TabletrColor = styled.tr`
  &:nth-child(even) {
    background: #f7f9fc;
  }
`;

const ProfessorAttendance = (props) => {
  const [attendances, setAttendances] = useState([]);
  const lectureId = props.lectureId;
  const user = JSON.parse(sessionStorage.userInfo);
  const userType = user.userType;

  const getAttendanceData = () => {
    return new Promise((resolve, reject) => {
      axios
        .get(`lecture/${lectureId}/attendance`)
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
                  color: '#50CF76',
                  fontWeight: 'bold',
                  fontSize: '1rem',
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
