import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import StudentSubmit from './StudentSubmit';
import ReactHtmlParser from 'react-html-parser';
import moment from 'moment';

const Container = styled.div`
  width: 100%;
  display: inline-block;
  margin: 10px auto;
  padding: 0px 20px;
  //overflow-y: auto;
  //align-items : center;
  //justify-content : center;
`;
const Title = styled.div`
  margin-top: 20px;
  margin-left: 20px;
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
const Btn = styled.button`
  font-size: 2px;
  padding: 5px;
  margin-top: 50px;
  margin-right: 10px;
  background-color: rgba(215, 226, 185, 0.596);
  color: #3e3e3e;
  border-radius: 7px;
  &:hover {
    background-color: #bfbfbf;
  }
`;
const ProblemContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 30px 15px;
  margin: 0 auto;
  width: 100%;
  box-shadow: 0 5px 5px 0 #eeeeee;
`;
const ProblemTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
const ProblemContent = styled.div`
  width: 100%;
  margin: 10px auto;
  padding: 0 5px;
`;
const AnswerInput = styled.textarea`
  height: 60px;
  width: 100%;
  resize: none;
  border: 1px solid #d9d9d9;
  &:focus {
    border: 1px solid #40a9ff;
    box-shadow: 0 0 0 2px #1890ff 20%;
    outline: 0;
  }
`;

const StudentSubmitDetail = ({ match }) => {
  const [score, setScore] = useState(0);
  const [submitAssignments, setSubmitAssignments] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const lectureId = match.params.lectureId;
  const assignmentId = match.params.assignmentId;

  // const submitId = match.params.submitId;

  const stateDisplay = (startDate, endDate) => {
    const today = moment();

    if (today.isBefore(startDate)) {
      return (
        <div style={{ color: '#BFBFBF', fontWeight: '700' }}>
          {moment(startDate).format('M월 D일 HH:mm')} - {moment(endDate).format('M월 D일 HH:mm')}{' '}
          (예정)
        </div>
      );
    } else if (today.isBefore(endDate)) {
      return (
        <div style={{ color: '#61C679', fontWeight: '700' }}>
          {moment(startDate).format('M월 D일 HH:mm')} - {moment(endDate).format('M월 D일 HH:mm')}{' '}
          (진행중)
        </div>
      );
    } else {
      return (
        <div style={{ color: '#E24C4B', fontWeight: '700' }}>
          {moment(startDate).format('M월 D일 HH:mm')} - {moment(endDate).format('M월 D일 HH:mm')}{' '}
          (마감)
        </div>
      );
    }
  };

  const getSubmitAssignmentData = () => {
    return new Promise((resolve, reject) => {
      //submit ID 수정해주기
      axios.get(`/lecture/${lectureId}/assignment/${assignmentId}/submit/1`).then((res) => {
        const result = res.data.data;
        console.log(result);
        setSubmitAssignments(result);
      });
    });
  };

  const getAssignmentData = () => {
    return new Promise((resolve, reject) => {
      axios
        .get(`/lecture/${lectureId}/assignment/${assignmentId}`)
        .then((res) => {
          const assignmentResult = res.data.data;
          setAssignments(assignmentResult);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  };

  useEffect(() => {
    getAssignmentData();
  }, []);

  return (
    <Container>
      <Title>Assignment</Title>
      <hr
        style={{
          width: '100%',
          margin: '30px 0px',
          marginTop: '50px',
          display: 'block',
          borderColor: '#ffffff',
        }}
      />
      <ProblemContainer>
        <ProblemTitle>{assignments.title}</ProblemTitle>
        <hr
          style={{ width: '100%', margin: '10px 0px', display: 'block', borderColor: '#ffffff' }}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            margin: '0',
            padding: '0px 5px',
            fontWeight: '700',
          }}
        >
          <div>{stateDisplay(moment(assignments.startDt), moment(assignments.endDt))}</div>
          <div>배점 {assignments.score}</div>
        </div>
        <ProblemContent>{ReactHtmlParser(assignments.content)}</ProblemContent>
        <hr
          style={{ width: '100%', margin: '10px 0px', display: 'block', borderColor: '#ffffff' }}
        />
      </ProblemContainer>
      {/* 여기에 이제 학생 제출물 수정하는 부분 들어가주면 됨  */}
    </Container>
  );
};

export default StudentSubmitDetail;
