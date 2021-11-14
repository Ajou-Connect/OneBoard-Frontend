import React from 'react';
import LectureSidebar from '../LectureSidebar';
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

const LectureAssignment = ({ match }) => {
  const lectureId = match.params.lectureId;
  return (
    <div>
      <nav>
        <LectureSidebar lectureId={lectureId} />
      </nav>
    </div>
  );
};

export default LectureAssignment;
