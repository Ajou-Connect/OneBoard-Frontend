import React from 'react';
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
  const lectureId = match.params.lectureId;
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
              <th style={{ padding: '10px 0', width: '25%' }}>날짜</th>
              <th style={{ padding: '10px 0', width: '25%' }}>학생 이름</th>
              <th style={{ padding: '10px 0', width: '25%' }}>강의 시간</th>
              <th style={{ padding: '10px 0', width: '25%' }}>출결 상태</th>
            </tr>
          </thead>
          <tbody>
            {/* 여기에 map함수로 attendance List 뿌려주기 */}
            <TabletrColor>
              <td style={{ padding: '10px 0', borderBottom: '1px solid #D5D5D5' }}>test date</td>
              <td style={{ padding: '10px 0', borderBottom: '1px solid #D5D5D5' }}>김동현</td>
              <td style={{ padding: '10px 0', borderBottom: '1px solid #D5D5D5' }}>시간</td>
              <td style={{ padding: '10px 0', borderBottom: '1px solid #D5D5D5' }}>결석</td>
            </TabletrColor>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LectureAttendance;
