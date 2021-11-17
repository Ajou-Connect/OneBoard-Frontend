import React, { useEffect, useState } from 'react';
import LectureSidebar from '../LectureSidebar';
import './LectureAttendance.scss';
import axios from 'axios';
import styled from 'styled-components';
import { Progress } from 'antd';
import { rejects } from 'assert';
import { resolve } from 'dns';

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

const LectureAttendance = ({ match }) => {
  const [attendances, setAttendances] = useState([]);
  const lectureId = match.params.lectureId;
  const user = JSON.parse(sessionStorage.userInfo);
  const userType = user.userType;
  const [isProfessor, setIsProfessor] = useState(false);
  const [count, setCount] = useState(0);
  const [attendanceCountList, setAttendanceCountList] = useState([]);
  const getData = async () => {
    try {
      await axios
        .get(`/lecture/${lectureId}/attendance`)
        .then((res) => {
          const result = res.data.data;
          setAttendances(result);
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
    if (userType === 'T') {
      setIsProfessor(true);
    }
  }, []);

  for (let i = 0; i < attendances.length; i++) {
    console.log(i + '바퀴  ');
    for (let j = 0; j < attendances[i].attendanceList.length; j++) {
      console.log(attendances[i].attendanceList[j].status);
    }
  }

  // attendances.map((attendance, index) => {
  //   attendance.attendanceList.map((attendanceLists, index) => {
  //     console.log(attendanceLists.status);
  //   });
  // });

  console.log(count);
  // const CountAttendance = ({ Counter }) => {
  //   console.log('ELdyd : ' + Counter);
  //   let attendanceCount = 0;
  //   for (let i = 0; i < Counter; i++) {
  //     if (attendances[i].attendanceList[i].status === 2) {
  //       attendanceCount += 1;
  //       console.log(attendanceCount);
  //     }
  //   }
  //   return attendanceCount;
  // };

  return (
    <div className="LectureAttendance">
      <nav className="lecture-sidebar">
        <LectureSidebar lectureId={lectureId} />
      </nav>
      <div className="attendance-main">
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
              <th style={{ padding: '10px 0', width: '25%' }}>강의명</th>
              <th style={{ padding: '10px 0', width: '25%' }}>학생 이름</th>
              <th style={{ padding: '10px 0', width: '25%' }}>출석횟수</th>
              <th style={{ padding: '10px 0', width: '25%' }}>전체 수업 수</th>
            </tr>
          </thead>
          <tbody>
            {attendances.map((attendance, index) => (
              <TabletrColor key={index}>
                <td
                  style={{ padding: '10px 0', borderBottom: '1px solid #D5D5D5' }}
                >{`${lectureId}`}</td>
                <td style={{ padding: '10px 0', borderBottom: '1px solid #D5D5D5' }}>
                  {attendance.studentName}
                </td>
                <td style={{ padding: '10px 0', borderBottom: '1px solid #D5D5D5' }}></td>
                <td style={{ padding: '10px 0', borderBottom: '1px solid #D5D5D5' }}>
                  {attendance.attendanceList.length}
                </td>
              </TabletrColor>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LectureAttendance;
