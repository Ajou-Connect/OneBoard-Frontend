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
  margin-top: 1.5rem;
  margin-left: 20px;
  font-size: 30px;
  border-bottom: 1px solid #f7f9fc;
  height: 40px;
  line-height: 40px;
  font-weight: bold;
`;

const SubTitle = styled.div`
  font-size: 20px;
  border-bottom: 1px solid #f7f9fc;
  height: 30px;
  line-height: 30px;
  text-align: left;
  margin-left: 20px;
`;

const Btn = styled.button`
  padding: 5px;
  background-color: rgba(215, 226, 185, 0.596);
  color: #3e3e3e;
  border-radius: 7px;
  &:hover {
    background-color: #bfbfbf;
  }
`;

const WriteBtn = styled.button`
  display: inline-block;
  float: left;
  background-color: whitesmoke;
  color: black;
  font-size: 16px;
  width: 80px;
  margin-right: 5px;
  padding: 5px;
  border-radius: 5px;
  &:hover {
    background-color: #bfbfbf;
  }
`;
const TabletrColor = styled.tr`
  &:nth-child(even) {
    background: #f7f9fc;
  }
`;
const StudentAttendance = (props) => {
  const token = sessionStorage.getItem('token');
  const lectureId = props.lectureId;
  const [attendances, setAttendances] = useState({
    attendanceList: [],
    studentId: 0,
    studentName: '',
    studentNumber: '',
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        setError(null);
        setLoading(true);
        await axios
          .get(`/lecture/${lectureId}/attendances/my`, { headers: { 'X-AUTH-TOKEN': `${token}` } })
          .then((res) => {
            const result = res.data.data;
            setAttendances(result);
            console.log(result);
          })
          .catch((e) => {
            console.log(e);
            setError(e);
          });
        setLoading(false);
      } catch (e) {
        setError(e);
        console.log(e);
      }
    };
    fetchAttendance();
  }, []);

  if (loading)
    return (
      <div
        style={{
          textAlign: 'center',
          fontSize: '30px',
          fontStyle: 'italic',
          fontWeight: 'bold',
        }}
      >
        로딩중 ...
      </div>
    );

  if (error)
    return (
      <div
        style={{
          textAlign: 'center',
          fontSize: '30px',
          fontStyle: 'italic',
          fontWeight: 'bold',
        }}
      >
        에러가 발생했습니다. 출석정보를 불러올수 없습니다.
      </div>
    );

  return (
    <div>
      <Title>개인 출석부</Title>
      <hr style={{ width: '100%', margin: '10px 0px', display: 'block', borderColor: '#ffffff' }} />
      <SubTitle style={{ display: 'flex', marginLeft: '20px' }}>
        이름 : {attendances.studentName} 학번 : {attendances.studentNumber}
      </SubTitle>
      <hr style={{ width: '100%', margin: '10px 0px', display: 'block', borderColor: '#ffffff' }} />
      <SubTitle>강의 이름</SubTitle>
      <hr style={{ width: '100%', margin: '10px 0px', display: 'block', borderColor: '#ffffff' }} />

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <div style={{ paddingRight: '10px', fontSize: '20px', color: '#22CE41' }}>
          {attendances.attendanceList.filter((list) => list.status === 2).length}회 출석
        </div>
        <div style={{ paddingRight: '10px', fontSize: '20px', color: '#ECB807' }}>
          / {attendances.attendanceList.filter((list) => list.status === 1).length} 회 지각
        </div>
        <div style={{ paddingRight: '10px', fontSize: '20px', color: 'red' }}>
          / {attendances.attendanceList.filter((list) => list.status === 0).length} 회 결석
        </div>
      </div>
      <hr style={{ width: '100%', margin: '10px 0px', display: 'block', borderColor: '#ffffff' }} />
      <table style={{ width: '100%', borderTop: '1px solid #D5D5D5', textAlign: 'center' }}>
        <thead
          style={{
            borderBottom: '1px solid #D5D5D5',
            fontStyle: 'bold',
            fontWeight: '500',
            backgroundColor: '#f3f3f3',
          }}
        >
          <tr>
            <th style={{ padding: '10px 0', width: '10%' }}>회차</th>
            <th style={{ padding: '10px 0', width: '40%' }}>수강 날짜</th>
            <th style={{ padding: '10px 0', width: '20%' }}>출결 상태</th>
          </tr>
        </thead>
        <tbody>
          {attendances.attendanceList.map((list, index) => (
            <TabletrColor key={index}>
              <td style={{ padding: '15px 0', borderBottom: '1px solid #D5D5D5' }}>{index + 1}</td>
              <td style={{ padding: '15px 0', borderBottom: '1px solid #D5D5D5' }}>
                {list.lessonDate}
              </td>
              <td style={{ padding: '15px 0', borderBottom: '1px solid #D5D5D5' }}>
                {list.status === 2 ? (
                  <div style={{ color: '#22CE41', fontWeight: 'bold' }}>출석</div>
                ) : list.status === 1 ? (
                  <div style={{ color: '#ECB807', fontWeight: 'bold' }}>지각</div>
                ) : (
                  <div style={{ color: 'red', fontWeight: 'bold' }}>결석</div>
                )}
              </td>
            </TabletrColor>
          ))}
        </tbody>
      </table>
      <hr style={{ width: '100%', margin: '10px 0px', display: 'block', borderColor: '#ffffff' }} />
    </div>
  );
};

export default StudentAttendance;
