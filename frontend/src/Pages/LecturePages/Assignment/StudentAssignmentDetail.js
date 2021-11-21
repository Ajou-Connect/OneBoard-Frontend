import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import moment from 'moment';
import ReactHtmlParser from 'react-html-parser';

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

//여기서의 match는 각각의 assignment에 대한 렌더링을 위해서
const StudentAssignmentDetail = ({ match }) => {
  const user = JSON.parse(window.sessionStorage.userInfo);
  const userType = user.userType;
  const token = sessionStorage.getItem('token');
  const [assignments, setAssignments] = useState({});
  const [studentFile, setStudentFile] = useState('');
  const [studentAnswer, setStudentAnswer] = useState('');
  const today = moment();
  const assignmentId = match.params.assignmentId;
  const lectureId = match.params.lectureId;
  const [onGoing, setOnGoing] = useState(false);
  const [submitData,setSubmitData] = useState({})
  const getData = () => {
    return new Promise((resolve, reject) => {
      axios
        .get(`/lecture/${lectureId}/assignment/${assignmentId}`)
        .then((res) => {
          const result = res.data.data;
          console.log(result);
          setAssignments(result);
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

  const getSubmitData = () => {
    return new Promise((resolve, reject) => {
      axios.get(`/lecture/${lectureId}/assignment/${assignmentId}/submit`,{headers:{"X-AUTH-TOKEN":`${token}`}})
        .then((res) => {
          const result = res.data.data;
          console.log(result);
          setSubmitData(result);
        })
        .catch((e) => {
          console.log(e);
          reject(e);
      })
    })
  }

  const stateDisplay = (startDate, endDate) => {
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

  useEffect(() => {
    getData();
    getSubmitData();
  }, []);

  const submitAssignment = () => {
    axios
      .post(
        `/lecture/${lectureId}/assignment/${assignmentId}/submit`,
        {
          content: studentAnswer,
          fileUrl: '',
        },
        { headers: { 'X-AUTH-TOKEN': `${token}` } },
      )
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

  const getFile = (e) => {
    console.log(e.target);
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    formData.append('fileName', e.target.files[0].name);
    setStudentFile(formData);
    console.log(formData);
  };

  return (
    <div>
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
        <ProblemTitle>제목 : {assignments.title}</ProblemTitle>
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
      <ProblemContainer style={{ margin: '10px auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {onGoing ? (
            <ProblemTitle>과제 제출 작성</ProblemTitle>
          ) : (
            <ProblemTitle>제출물</ProblemTitle>
          )}
          <Btn onClick={submitAssignment}>제출하기</Btn>
        </div>
        <hr
          style={{ width: '100%', margin: '10px 0px', display: 'block', borderColor: '#ffffff' }}
        />
        {onGoing ? (
          <div>
            <AnswerInput placeholder="과제 답안 작성" onChange={onChangeAnswer} />
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '5px 0' }}>
              <div style={{ paddingLeft: '5px', lineHeight: '41.6px' }}>파일 첨부</div>
              <input type="file" onChange={getFile} style={{ height: '41.6px', padding: '5px' }} />
            </div>
          </div>
        ) : (<div>
            <div style={{display:"flex"}}>
              <ProblemTitle>{assignments.title}</ProblemTitle>
              <div style={{ fontWeight: "600", fontSize: "20px", marginLeft:"20px"}}>점수 : {submitData.score}</div>
              
            </div>
            <div style={{ fontWeight: "600", fontSize: "20px", marginLeft:"20px",color:"skyblue"}}>피드백 : {submitData.feedback}</div>
        </div>
        )}
      </ProblemContainer>
    </div>
  );
};

export default StudentAssignmentDetail;
