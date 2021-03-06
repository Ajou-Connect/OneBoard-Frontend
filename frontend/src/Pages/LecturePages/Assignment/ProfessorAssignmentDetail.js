import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import moment from 'moment';
import ReactHtmlParser from 'react-html-parser';
import StudentSubmit from './StudentSubmit';
import Button from '../../../Component/common/Button';
const Container = styled.div`
  width: 100%;
  display: inline-block;
  margin: 10px auto;
  padding: 0px 20px;
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

const StyledButton = styled(Button)`
  height: 2.125rem;
  & + & {
    margin-left: 0.5rem;
  }
`;
//여기서의 match는 각각의 assignment에 대한 렌더링을 위해서
const ProfessorAssignmentDetail = ({ match }) => {
  const [submitAssignments, setSubmitAssignments] = useState({});
  const [studentScore, setStudentScore] = useState(0);
  const [assignments, setAssignments] = useState({});
  const [onGoing, setOnGoing] = useState(false);
  const today = moment();
  const user = JSON.parse(localStorage.userInfo);
  const userType = user.userType;
  const lectureId = match.params.lectureId;
  const assignmentId = match.params.assignmentId;
  const fileUrl = `https://oneboard.connect.o-r.kr:8080/lecture/${lectureId}/assignment/${assignmentId}/file`;
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

  const getSubmitData = () => {
    return new Promise((resolve, reject) => {
      axios
        .get(`/lecture/${lectureId}/assignment/${assignmentId}/submits`)
        .then((res) => {
          const result = res.data.data;
          setSubmitAssignments(result);
          if (today.isBefore(result.endDt) && today.isAfter(result.startDt)) {
            setOnGoing(true);
          }
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  };

  const getAssignmentData = () => {
    return new Promise((resolve, reject) => {
      axios
        .get(`/lecture/${lectureId}/assignment/${assignmentId}`)
        .then((res) => {
          const assignmentResult = res.data.data;
          console.log(res);
          setAssignments(assignmentResult);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  };

  const onCancel = () => {
    return (window.location.href = `/Main/Lecture/${userType}/${lectureId}/Assignment`);
  };

  useEffect(() => {
    getSubmitData();
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
        <ProblemContent>
          {assignments.fileUrl === null ? (
            <div></div>
          ) : (
            <a
              href={fileUrl}
              style={{ fontWeight: 'bold', textDecoration: 'underline', fontSize: '1.2rem' }}
            >
              과제 파일 다운로드
            </a>
          )}

          <br />
          <br />
          {ReactHtmlParser(assignments.content)}
        </ProblemContent>
        <hr
          style={{ width: '100%', margin: '10px 0px', display: 'block', borderColor: '#ffffff' }}
        />
      </ProblemContainer>
      <StudentSubmit
        lectureId={lectureId}
        assignmentId={assignmentId}
        assignmentsScore={assignments.score}
      />
      <StyledButton onClick={onCancel}>뒤로가기</StyledButton>
    </Container>
  );
};

export default ProfessorAssignmentDetail;
