import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import StudentSubmit from './StudentSubmit';
import ReactHtmlParser from 'react-html-parser';
import moment from 'moment';
import Button from '../../../Component/common/Button';
const Container = styled.div`
  width: 100%;
  display: inline-block;
  margin: 10px auto;
  padding: 0px 20px;
  //overflow-y: auto;
  //align-items : center;
  //justify-content : center;
`;
const WriteAcitonButtonBlock = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
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

const Title = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  font-size: 30px;
  border-bottom: 1px solid #f7f9fc;
  height: 40px;
  line-height: 40px;
  font-style: italic;
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
const FeedbackInput = styled.textarea`
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

const ScoreInput = styled.input`
  width: 50px;
  border: 1px solid #d9d9d9;
  padding: 10px;
  display: inline-block;
`;

const StudentSubmitDetail = ({ match }) => {
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [submitAssignments, setSubmitAssignments] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const lectureId = match.params.lectureId;
  const submitId = match.params.submitId;
  const assignmentId = match.params.assignmentId;
  const user = JSON.parse(localStorage.userInfo);
  const userType = user.userType;

  // const submitId = match.params.submitId;

  const stateDisplay = (startDate, endDate) => {
    const today = moment();

    if (today.isBefore(startDate)) {
      return (
        <div style={{ color: '#BFBFBF', fontWeight: '700' }}>
          {moment(startDate).format('M??? D??? HH:mm')} - {moment(endDate).format('M??? D??? HH:mm')}{' '}
          (??????)
        </div>
      );
    } else if (today.isBefore(endDate)) {
      return (
        <div style={{ color: '#61C679', fontWeight: '700' }}>
          {moment(startDate).format('M??? D??? HH:mm')} - {moment(endDate).format('M??? D??? HH:mm')}{' '}
          (?????????)
        </div>
      );
    } else {
      return (
        <div style={{ color: '#E24C4B', fontWeight: '700' }}>
          {moment(startDate).format('M??? D??? HH:mm')} - {moment(endDate).format('M??? D??? HH:mm')}{' '}
          (??????)
        </div>
      );
    }
  };

  const getSubmitAssignmentData = () => {
    return new Promise((resolve, reject) => {
      //submit ID ???????????????
      axios
        .get(`/lecture/${lectureId}/assignment/${assignmentId}/submit/${submitId}`)
        .then((res) => {
          const result = res.data.data;
          console.log(result);
          setSubmitAssignments(result);
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
          setAssignments(assignmentResult);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  };

  useEffect(() => {
    getSubmitAssignmentData();
    getAssignmentData();
    console.log(submitId);
  }, []);

  const onCancel = () => {
    return (window.location.href = `/Main/Lecture/${userType}/${lectureId}/Assignment/${assignmentId}/ProfessorDetail`);
  };

  const onSubmit = () => {
    //post ??????
    axios
      .post(`/lecture/${lectureId}/assignment/${assignmentId}/submit/${submitId}`, {
        score: score,
        feedback: feedback,
      })
      .then((res) => {
        console.log(res);
        return (window.location.href = `/Main/Lecture/${userType}/${lectureId}/Assignment/${assignmentId}/ProfessorDetail`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getFeedback = (e) => {
    setFeedback(e.target.value);

    console.log(feedback);
  };

  const getScore = (e) => {
    if (e.target.value > assignments.score) {
      alert('???????????? ?????? ????????? ????????? ??? ????????????.');
      window.location.reload();
    } else {
      setScore(e.target.value);
    }
    console.log(score);
  };

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
          <div>?????? {assignments.score}</div>
        </div>
        <ProblemContent>{ReactHtmlParser(assignments.content)}</ProblemContent>
        <hr
          style={{ width: '100%', margin: '10px 0px', display: 'block', borderColor: '#ffffff' }}
        />
      </ProblemContainer>
      <hr style={{ width: '100%', margin: '10px 0px', display: 'block', borderColor: '#ffffff' }} />
      {/* ????????? ?????? ?????? ????????? ?????? ?????? ??????????????? ???  */}
      <hr style={{ width: '100%', margin: '10px 0px', display: 'block', borderColor: '#ffffff' }} />
      <div>
        <ScoreInput onChange={getScore} /> / {assignments.score}
      </div>
      <hr style={{ width: '100%', margin: '10px 0px', display: 'block', borderColor: '#ffffff' }} />
      <FeedbackInput onChange={getFeedback} placeholder="????????? ?????? ???????????? ??????????????????" />
      <WriteAcitonButtonBlock>
        <StyledButton onClick={onSubmit}>??????</StyledButton>
        <StyledButton onClick={onCancel}>????????????</StyledButton>
      </WriteAcitonButtonBlock>
    </Container>
  );
};

export default StudentSubmitDetail;
