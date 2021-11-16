import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import moment from 'moment';

const WriteBtn = styled.button`
  font-size: 12px;
  padding: 5px;
  margin-top: 10px;
  margin-bottom: 5px;
  margin-left: 30px auto;
  background-color: #ececec;
  color: #3e3e3e;
  border-radius: 5px;
  &:hover {
    background-color: #bfbfbf;
  }
  display: inline-block;
  float: right;
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
`;
const SubTitle = styled.div`
  float: left;
  margin-top: 3px;
  margin-right: 20px;
  color: #8b8b8b;
  font-size: 13px;
  font-weight: 400;
`;

const StateColorCircle = styled.div`
  width: 20px;
  height: 20px;
  display: inline-block;
  float: right;
  border-radius: 75px;
`;
const StateDescript = styled.div`
  height: 20px;
  display: inline-block;
  float: right;
  font-size: 14px;
  margin-left: 5px;
  margin-right: 10px;
`;
const StateBox = styled.div`
  justify-content: center;
  margin: 0px auto;
  display: block;
  border-radius: 50px;
  padding: 10px;
  width: 50%;
`;

const ProfessorAssignmentList = (props) => {
  const user = JSON.parse(sessionStorage.userInfo);
  const userType = user.userType;
  const lectureId = props.lectureId;
  const [assignments, setAssignments] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    const fetchAssignment = async () => {
      try {
        setError(null);
        setLoading(true);
        //axios.get
        await axios
          .get(`/lecture/${lectureId}/assignments`)
          .then((res) => {
            const result = res.data.data;
            console.log('몇번째 : ' + result);
            setAssignments(result);
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
    fetchAssignment();
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
        에러가 발생했습니다. 과제목록을 불러올수 없습니다.
      </div>
    );

  const goWrite = () => {
    return (window.location.href = `/Main/Lecture/${lectureId}/Assignment/Write`);
  };

  const goDetail = (e, assignmentId) => {
    //해당 assignment에 해당하는 페이지로 라우팅
    return (window.location.href = `/Main/Lecture/${userType}/${lectureId}/Assignment/${assignmentId}/ProfessorDetail`);
  };

  const onDelete = (e, assignmentId) => {
    axios.delete(`/lecture/${lectureId}/assignment/` + assignmentId);
    window.location.href = `/Main/Lecture/${userType}/${lectureId}/Assignment`;
  };

  return (
    <div>
      <Container>
        <Title>Assignment</Title>
        <div style={{ width: '100%', display: 'block' }}>
          <SubTitle>과제</SubTitle>
          <WriteBtn onClick={(e) => goWrite(e)}>작성하기</WriteBtn>
        </div>
        <div style={{ width: '100%', display: 'block', height: '20px' }}>
          <StateDescript>마감</StateDescript>{' '}
          <StateColorCircle style={{ backgroundColor: '#E24C4B' }} />
          <StateDescript>진행 중</StateDescript>{' '}
          <StateColorCircle style={{ backgroundColor: '#66FF33' }} />
        </div>
      </Container>
      <div>
        <table
          style={{
            width: '100%',
            margin: '10px auto',
            borderTop: '1px solid #D5D5D5',
            textAlign: 'center',
            borderSpacing: '0px 10px',
            borderCollapse: 'separate',
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
              <th style={{ padding: '10px 0', width: '20%' }}>과제 명</th>
              <th style={{ padding: '10px 0', width: '20%' }}>과제 기간</th>
              <th style={{ padding: '10px 0', width: '20%' }}>진행 상태</th>
              <th style={{ padding: '10px 0', width: '20%' }}>마감 완료</th>
              <th style={{ padding: '10px 0', width: '20%' }}>수정/삭제</th>
            </tr>
          </thead>
          <tbody>
            {assignments.length === 0 ? (
              <div
                style={{
                  display: 'flex',
                  textAlign: 'center',
                  marginLeft: '400px',
                  fontSize: '30px',
                  fontStyle: 'italic',
                  fontWeight: 'bold',
                }}
              >
                등록된 과제가 없습니다.
              </div>
            ) : (
              assignments.map((assignmentList, index) => {
                return (
                  <tr
                    style={{
                      borderRadius: '5px',
                      boxShadow: '0px 2px 2px 1px #eeeeee',
                      cursor: 'pointer',
                    }}
                  >
                    <td
                      style={{
                        padding: '10px 0',
                        backgroundColor: 'white',
                        borderRadius: '5px 0 0 5px',
                        width: '20%',
                      }}
                    >
                      <div
                        key={index}
                        style={{
                          fontSize: '20px',
                          fontWeight: '700',
                          color: '#3E3E3E',
                          display: 'block',
                        }}
                        onClick={(e) => goDetail(e, assignmentList.id)}
                      >
                        {assignmentList.title}
                      </div>
                    </td>
                    <td style={{ padding: '10px 0', backgroundColor: 'white', width: '20%' }}>
                      {assignmentList.startDt} ~ {assignmentList.endDt}
                    </td>
                    <td style={{ padding: '10px 0', backgroundColor: 'white', width: '20%' }}>
                      몇일 남았는지
                    </td>
                    <td
                      style={{
                        padding: '10px 0',
                        backgroundColor: 'white',
                        paddingRight: '150px',
                        width: '20%',
                      }}
                    >
                      {assignmentList.endDt === 'endDate' ? (
                        <StateColorCircle style={{ backgroundColor: '#E24C4B' }} />
                      ) : (
                        <StateColorCircle style={{ backgroundColor: '#66FF33' }} />
                      )}
                    </td>
                    <td
                      style={{
                        padding: '10px 0',
                        backgroundColor: 'white',
                        width: '20%',
                      }}
                    >
                      <Btn
                        onClick={(e) => {
                          goWrite();
                        }}
                      >
                        수정하기
                      </Btn>
                      <Btn
                        onClick={(e) => {
                          onDelete(e, assignmentList.id);
                        }}
                      >
                        삭제하기
                      </Btn>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfessorAssignmentList;
