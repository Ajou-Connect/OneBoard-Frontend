import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import moment from 'moment';
import ReactHtmlParser from 'react-html-parser';
import Iframe from 'react-iframe';

const Container = styled.div`
  width: 100%;
  display: inline-block;
  margin: 10px auto;
  padding: 0px 20px;
  //overflow-y: auto;
  //align-items : center;
  //justify-content : center;
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

const UpdateBtn = styled.button`
  font-size: 12px;
  font-weight: bold;
  padding: 5px;
  margin-top: 10px;
  margin-bottom: 5px;
  margin-right: 30px;
  background-color: #f83636;
  color: #3e3e3e;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #bfbfbf;
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
  const [submitData, setSubmitData] = useState({});
  const [submitFile, setSubmitFile] = useState('');
  const [studentSubmitFile, setStudentSubmitFile] = useState('');
  const [onSubmit, setOnSubmit] = useState(false);
  const Url = `https://docs.google.com/gview?embedded=true&url=https://oneboard.connect.o-r.kr:8080/lecture/${lectureId}/assignment/${assignmentId}/file`;
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
    console.log(token);
    console.log(lectureId);
    console.log(assignmentId);
    return new Promise((resolve, reject) => {
      axios
        .get(`/lecture/${lectureId}/assignment/${assignmentId}/submit`, {
          headers: { 'X-AUTH-TOKEN': `${token}` },
        })
        .then((res) => {
          const result = res.data.data;
          console.log(result);
          if (result !== null) {
            setSubmitData(result);
            setSubmitFile(result.fileUrl);
            setOnSubmit(true);
          } else {
            console.log(result);
          }
        })
        .catch((e) => {
          console.log(e);
          reject(e);
        });
    });
  };

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

  const headersConfig = {
    'X-AUTH-TOKEN': `${token}`,
    'Content-Type': 'multipart/form-data',
  };

  //수정 필요
  const submitAssignment = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('content', studentAnswer);
    formData.append('file', studentSubmitFile);
    axios
      .post(`/lecture/${lectureId}/assignment/${assignmentId}/submit`, formData, {
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

  const onUpdate = () => {
    return (window.location.href = `/Main/Lecture/${userType}/${lectureId}/Assignment/${assignmentId}/StudentDetail/Update`);
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
          {onGoing === false ? (
            <ProblemTitle>제출물</ProblemTitle>
          ) : onSubmit ? (
            <ProblemTitle>제출물</ProblemTitle>
          ) : (
            <div>
              <ProblemTitle>과제 제출 작성</ProblemTitle>
              <Btn onClick={submitAssignment}>제출하기</Btn>
            </div>
          )}
        </div>
        <hr
          style={{ width: '100%', margin: '10px 0px', display: 'block', borderColor: '#ffffff' }}
        />
        {onGoing === false ? (
          <div>
            <div style={{ display: 'flex' }}>
              <ProblemTitle>{assignments.title}</ProblemTitle>
              <div style={{ fontWeight: '600', fontSize: '20px', marginLeft: 'auto' }}>
                점수 : {submitData.score} / {assignments.score}
              </div>
            </div>
            <hr
              style={{
                width: '100%',
                margin: '10px 0px',
                display: 'block',
                borderColor: '#ffffff',
              }}
            />
            <div>
              <div>{submitData.content}</div>
              <div>
                {submitFile === null ? (
                  <div style={{ marginTop: '10px', fontWeight: 'bold', fontSize: '1.1rem' }}>
                    제출된 과제파일이 없습니다
                  </div>
                ) : (
                  <div style={{ display: 'flex' }}>
                    <div style={{ marginRight: 'auto' }}>
                      <Iframe url={Url} width="500px" height="500px" />
                    </div>
                    <a
                      href={submitFile}
                      style={{
                        marginTop: '10px',
                        fontWeight: 'bold',
                        fontSize: '1.1rem',
                        textDecoration: 'underline',
                      }}
                    >
                      제출된 과제파일
                    </a>
                  </div>
                )}
              </div>
            </div>
            <hr
              style={{
                width: '100%',
                margin: '10px 0px',
                display: 'block',
                borderColor: '#ffffff',
              }}
            />
            <div style={{ fontWeight: '600', fontSize: '20px', color: 'skyblue' }}>
              피드백 :
              <br />
              <br />
              <div style={{ color: 'black' }}>{submitData.feedback}</div>
            </div>
          </div>
        ) : onSubmit ? (
          <div>
            <div style={{ display: 'flex' }}>
              <ProblemTitle>{assignments.title}</ProblemTitle>
              <div style={{ fontWeight: '600', fontSize: '20px', marginLeft: 'auto' }}>
                점수 : {submitData.score} / {assignments.score}
              </div>
            </div>
            <hr
              style={{
                width: '100%',
                margin: '10px 0px',
                display: 'block',
                borderColor: '#ffffff',
              }}
            />
            <div>
              <div style={{ fontSize: '1.0rem' }}>{submitData.content}</div>
              <div>
                {submitFile === null ? (
                  <div style={{ marginTop: '10px', fontWeight: 'bold', fontSize: '1.1rem' }}>
                    제출된 과제파일이 없습니다
                  </div>
                ) : (
                  <div style={{ display: 'flex' }}>
                    <div style={{ marginRight: 'auto' }}>
                      <Iframe url={Url} width="500px" height="500px" />
                    </div>
                    <a
                      href={submitFile}
                      style={{
                        marginTop: '10px',
                        fontWeight: 'bold',
                        fontSize: '1.1rem',
                        textDecoration: 'underline',
                      }}
                    >
                      제출된 과제파일
                    </a>
                  </div>
                )}
              </div>
            </div>
            <hr
              style={{
                width: '100%',
                margin: '10px 0px',
                display: 'block',
                borderColor: '#ffffff',
              }}
            />
            <div style={{ fontWeight: '600', fontSize: '20px', color: 'skyblue' }}>
              피드백 :
              <br />
              <br />
              <div style={{ color: 'black' }}>{submitData.feedback}</div>
            </div>
          </div>
        ) : (
          <div>
            <AnswerInput placeholder="과제 답안 작성" onChange={onChangeAnswer} />
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '5px 0' }}>
              <div style={{ paddingLeft: '5px', lineHeight: '41.6px' }}>파일 첨부</div>
              <form name="noteFile" encType="multipart/form-data">
                <input
                  type="file"
                  onChange={onFileChange}
                  style={{ height: '41.6px', padding: '5px', margin: '10px', cursor: 'pointer' }}
                />
              </form>
            </div>
          </div>
        )}
      </ProblemContainer>
      <div style={{ display: 'flex' }}>
        <WriteBtn onClick={onCancel}>뒤로가기</WriteBtn>
        {onSubmit ? <UpdateBtn onClick={onUpdate}>수정하기</UpdateBtn> : <div></div>}
      </div>
    </div>
  );
};

export default StudentAssignmentDetail;
