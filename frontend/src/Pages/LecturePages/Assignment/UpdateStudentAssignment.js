import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import Button from '../../../Component/common/Button';

const Line = styled.hr`
  width: 100%;
  margin: 10px 0px;
  display: block;
  border-color: #ffffff;
`;

const WriteBtn = styled.button`
  font-size: 12px;
  font-weight: bold;
  padding: 5px;
  margin-top: 10px;
  margin-bottom: 5px;
  margin-right: 30px;
  margin-left: 20px;
  background-color: #d3d31c;
  color: #3e3e3e;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #bfbfbf;
  }
`;
const WriteAcitonButtonBlock = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
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
  cursor: pointer;
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
const UpdateStudentAssignment = ({ match }) => {
  const user = JSON.parse(window.localStorage.userInfo);
  const userType = user.userType;
  const token = localStorage.getItem('token');
  const today = moment();
  const lectureId = match.params.lectureId;
  const assignmentId = match.params.assignmentId;
  const [assignments, setAssignments] = useState({});
  const [studentAnswer, setStudentAnswer] = useState('');
  const [submitData, setSubmitData] = useState({});
  const [studentSubmitFile, setStudentSubmitFile] = useState('');
  const getData = () => {
    return new Promise((resolve, reject) => {
      axios
        .get(`/lecture/${lectureId}/assignment/${assignmentId}`)
        .then((res) => {
          const result = res.data.data;
          console.log(result);
          setAssignments(result);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  };

  const getSubmitData = () => {
    return new Promise((resolve, reject) => {
      axios
        .get(`/lecture/${lectureId}/assignment/${assignmentId}/submit`, {
          headers: { 'X-AUTH-TOKEN': `${token}` },
        })
        .then((res) => {
          const result = res.data.data;
          console.log(result);
          setSubmitData(result);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  };

  const stateDisplay = (startDate, endDate) => {
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

  const headersConfig = {
    'X-AUTH-TOKEN': `${token}`,
    'Content-Type': 'multipart/form-data',
  };

  const submitAssignment = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', studentSubmitFile);
    formData.append('content', studentAnswer);
    axios
      .put(`/lecture/${lectureId}/assignment/${assignmentId}/submit`, formData, {
        headers: headersConfig,
      })
      .then((res) => {
        console.log(res);
        return (window.location.href = `/Main/Lecture/${userType}/${lectureId}/Assignment`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onChangeAnswer = (e) => {
    setStudentAnswer(e.target.value);
    console.log(e.target.value);
  };

  const onCancel = () => {
    return (window.location.href = `/Main/Lecture/${userType}/${lectureId}/Assignment`);
  };

  const onFileChange = (e) => {
    e.preventDefault();
    console.log(e.target.files);
    setStudentSubmitFile(e.target.files[0]);
  };

  useEffect(() => {
    getData();
    getSubmitData();
  }, []);

  return (
    <div>
      <Title>Assignment</Title>
      <Line />
      <ProblemContainer>
        <ProblemTitle>?????? : {assignments.title}</ProblemTitle>
        <Line />
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
        <Line />
      </ProblemContainer>
      <ProblemContainer style={{ margin: '10px auto' }}>
        <ProblemTitle>?????? ?????? ??????</ProblemTitle>

        <Line />
        <div>
          <AnswerInput onChange={onChangeAnswer} />
          <div style={{ display: 'flex', justifyContent: 'space-between', margin: '5px 0' }}>
            <div style={{ paddingLeft: '5px', lineHeight: '41.6px' }}>?????? ??????</div>
            <form name="noteFile" encType="multipart/form-data">
              <input
                type="file"
                onChange={onFileChange}
                style={{ height: '41.6px', padding: '5px', margin: '10px', cursor: 'pointer' }}
              />
            </form>
          </div>
        </div>
      </ProblemContainer>
      <div>
        <WriteAcitonButtonBlock>
          <StyledButton onClick={onCancel}>????????????</StyledButton>
          <StyledButton onClick={submitAssignment}>????????????</StyledButton>
        </WriteAcitonButtonBlock>
      </div>
    </div>
  );
};

export default UpdateStudentAssignment;
