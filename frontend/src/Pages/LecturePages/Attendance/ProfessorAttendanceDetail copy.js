import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import palette from '../../../lib/styles/palette';
import 'antd/dist/antd.css';
import { Radio } from 'antd';
import Button from '../../../Component/common/Button';

const WriteAcitonButtonBlock = styled.div`
  margin-top: 1rem;
  margin-bottom: 2rem;
  margin-left: 1rem;
  height: 5rem;
  display: flex;
  button + button {
    margin-left: 0.5rem;
  }
`;

const StyledButton = styled(Button)`
  height: 2.125rem;
  & + & {
    margin-left: 0.5rem;
  }
`;

const Container = styled.div`
  width: 97%;
  display: block;
  justify-content: center;
  align-items: center;
  margin: 10px;
  margin-bottom: 5rem;
  padding: 0 20px;
`;
const Title = styled.div`
  font-size: 30px;
  border-bottom: 1px solid #f7f9fc;
  height: 40px;
  line-height: 40px;
  font-style: italic;
  text-align: left;
  display: flex;
`;
const SubTitle = styled.div`
  font-size: 20px;
  border-bottom: 1px solid #f7f9fc;
  height: 30px;
  line-height: 30px;
  text-align: left;
`;

const Btn = styled.button`
  padding: 5px;
  background-color: rgba(215, 226, 185, 0.596);
  color: #3e3e3e;
  border-radius: 7px;
  cursor: pointer;
  &:hover {
    background-color: #bfbfbf;
  }
`;

const StatusBtn = styled.button`
  padding: 5px;
  margin: 2px;
  width: 30%;
  background-color: #eadfd3;
  color: #3e3e3e;
  border-radius: 7px;
  cursor: pointer;
  &:hover {
    background-color: #bfbfbf;
  }
`;

const TabletrColor = styled.tr`
  &:nth-child(even) {
    background: #f7f9fc;
  }
`;

const ProfessorAttendanceDetail = ({ match }) => {
  const studentDetailId = parseInt(match.params.studentId);
  const lectureId = match.params.lectureId;
  const [attendances, setAttendances] = useState([]);
  const [studentInfo, setStudentInfo] = useState([
    {
      attendanceList: [],
      studentId: 0,
      studentName: '',
      studentNumber: '',
    },
  ]);
  const [attendanceListInfo, setAttendanceListInfo] = useState([
    {
      lessonId: 0,
      lessonDate: '',
      status: 0,
    },
  ]);

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        await axios
          .get(`/lecture/${lectureId}/attendances`)
          .then((res) => {
            const result = res.data.data;
            setAttendances(result);
            setStudentInfo(result.filter((list) => list.studentId === studentDetailId));
            console.log(result);
          })
          .catch((e) => {
            console.log(e);
          });
      } catch (e) {
        console.log(e);
      }
    };
    fetchAttendance();
  }, []);

  const onStatusChange = (e, data, statusId) => {
    alert('?????? ???????????? ??????????????? ??????????????? ???????????????');
    setAttendanceListInfo([
      {
        lessonId: data.lessonId,
        lessonDate: data.lessonDate,
        status: statusId,
      },
    ]);

    console.log(attendanceListInfo);
  };

  const onConfirm = () => {
    console.log('lessonId : ' + studentDetailId);
    axios
      .put(`/lecture/${lectureId}/attendances`, {
        updateDataList: [
          {
            studentId: studentDetailId,
            lessonId: attendanceListInfo[0].lessonId,
            status: attendanceListInfo[0].status,
          },
        ],
      })
      .then((res) => {
        console.log(res);
        return (window.location.href = `/Main/Lecture/${lectureId}/Attendance/${studentDetailId}`);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const onCancel = () => {
    return (window.location.href = `/Main/Lecture/${lectureId}/Attendance`);
  };

  const onSubmit = () => {
    if (window.confirm('?????????????????????????')) {
      onConfirm();
    }
  };

  return (
    <Container>
      <Title>?????? ?????????</Title>
      <hr style={{ width: '100%', margin: '10px 0px', display: 'block', borderColor: '#ffffff' }} />
      <div style={{ display: 'flex' }}>
        <SubTitle>{studentInfo.map((student) => student.studentName)}</SubTitle>
      </div>
      <hr style={{ width: '100%', margin: '10px 0px', display: 'block', borderColor: '#ffffff' }} />
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <div style={{ paddingRight: '10px', fontSize: '20px', color: '#22CE41' }}>
          {studentInfo[0].attendanceList.filter((list) => list.status === 2).length}??? ??????
        </div>
        <div style={{ paddingRight: '10px', fontSize: '20px', color: '#ECB807' }}>
          / {studentInfo[0].attendanceList.filter((list) => list.status === 1).length} ??? ??????
        </div>
        <div style={{ paddingRight: '10px', fontSize: '20px', color: 'red' }}>
          {' '}
          / {studentInfo[0].attendanceList.filter((list) => list.status === 0).length} ??? ??????
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
            <th style={{ padding: '10px 0', width: '10%' }}>ID</th>
            <th style={{ padding: '10px 0', width: '40%' }}>?????? ??????</th>
            <th style={{ padding: '10px 0', width: '20%' }}>?????? ??????</th>
            <th style={{ padding: '10px 0', width: '20%' }}>?????? ??????</th>
          </tr>
        </thead>
        <tbody>
          {studentInfo.map((student) =>
            student.attendanceList.map((list, index) => (
              <TabletrColor key={index}>
                <td style={{ padding: '15px 0', borderBottom: '1px solid #D5D5D5' }}>
                  {index + 1}
                </td>
                <td style={{ padding: '15px 0', borderBottom: '1px solid #D5D5D5' }}>
                  {list.lessonDate}
                </td>
                <td style={{ padding: '15px 0', borderBottom: '1px solid #D5D5D5' }}>
                  {list.status === 2 ? (
                    <div style={{ color: '#22CE41', fontWeight: 'bold' }}>??????</div>
                  ) : list.status === 1 ? (
                    <div style={{ color: '#ECB807', fontWeight: 'bold' }}>??????</div>
                  ) : (
                    <div style={{ color: 'red', fontWeight: 'bold' }}>??????</div>
                  )}
                </td>
                <td
                  style={{ padding: '15px 0', borderBottom: '1px solid #D5D5D5', display: 'flex' }}
                >
                  <StatusBtn onClick={(e) => onStatusChange(e, list, 2)}>??????</StatusBtn>
                  <StatusBtn onClick={(e) => onStatusChange(e, list, 1)}>??????</StatusBtn>
                  <StatusBtn onClick={(e) => onStatusChange(e, list, 0)}>??????</StatusBtn>
                </td>
              </TabletrColor>
            )),
          )}
        </tbody>
      </table>
      <hr style={{ width: '100%', margin: '10px 0px', display: 'block', borderColor: '#ffffff' }} />
      <WriteAcitonButtonBlock>
        <StyledButton cyan onClick={onCancel}>
          ????????????
        </StyledButton>
        <StyledButton cyan onClick={onSubmit} style={{ marginLeft: 'auto' }}>
          ????????????
        </StyledButton>
      </WriteAcitonButtonBlock>
    </Container>
  );
};

export default ProfessorAttendanceDetail;
