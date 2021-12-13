import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import moment from 'moment';
import Button from '../../../Component/common/Button';

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
  margin-top: 1.5rem;
  margin-left: 20px;
  font-size: 30px;
  border-bottom: 1px solid #f7f9fc;
  height: 40px;
  line-height: 40px;
  font-weight: bold;
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

const ProfessorAssignmentList = (props) => {
  const user = JSON.parse(localStorage.userInfo);
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
            console.log(result);
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

  const stateDisplay = (startDate, endDate) => {
    let today = moment();

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
          <StateColorCircle style={{ backgroundColor: '#66FF33' }} />
        </div>
      );
    } else {
      return (
        <div style={{ color: '#E24C4B', fontWeight: '700' }}>
          <StateColorCircle style={{ backgroundColor: '#E24C4B' }} />
        </div>
      );
    }
  };

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

  const goUpdate = (e, assignmentId) => {
    return (window.location.href = `/Main/Lecture/${userType}/${lectureId}/Assignment/Update/${assignmentId}`);
  };

  const goDetail = (e, assignmentId) => {
    //해당 assignment에 해당하는 페이지로 라우팅
    return (window.location.href = `/Main/Lecture/${userType}/${lectureId}/Assignment/${assignmentId}/ProfessorDetail`);
  };

  const onDelete = (e, assignmentId) => {
    console.log(assignmentId);
    console.log(lectureId);
    axios
      .delete(`/lecture/${lectureId}/assignment/${assignmentId}`)
      .then((res) => {
        window.location.href = `/Main/Lecture/${userType}/${lectureId}/Assignment`;
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <Title>Assignment</Title>
      <div style={{ width: '100%', display: 'block' }}>
        <div style={{ width: '100%', display: 'block', height: '20px' }}>
          <StateDescript>마감</StateDescript>{' '}
          <StateColorCircle style={{ backgroundColor: '#E24C4B' }} />
          <StateDescript>진행 중</StateDescript>{' '}
          <StateColorCircle style={{ backgroundColor: '#66FF33' }} />
        </div>
      </div>

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
              <th style={{ padding: '10px 0', width: '10% ' }}>ID</th>
              <th style={{ padding: '10px 0', width: '20% ' }}>과제 명</th>
              <th style={{ padding: '10px 0', width: '40% ' }}>과제 기간</th>
              <th style={{ padding: '10px 0', width: '10% ' }}>배점</th>
              <th style={{ padding: '10px 0', width: '5% ' }}>진행 상태</th>
              <th style={{ padding: '10px 0', width: '20% ' }}>수정/삭제</th>
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
                    }}
                    key={index}
                  >
                    <td
                      style={{
                        padding: '15px 0',
                        borderBottom: '1px solid #D5D5D5',
                      }}
                    >
                      {index + 1}
                    </td>
                    <td
                      style={{
                        padding: '15px 0',
                        borderBottom: '1px solid #D5D5D5',
                      }}
                    >
                      <div
                        key={index}
                        style={{
                          fontSize: '20px',
                          fontWeight: '700',
                          color: '#3E3E3E',
                          display: 'block',
                          cursor: 'pointer',
                          textDecoration: 'underline',
                        }}
                        onClick={(e) => goDetail(e, assignmentList.assignmentId)}
                      >
                        {assignmentList.title}
                      </div>
                    </td>
                    <td
                      style={{
                        padding: '15px 0',
                        borderBottom: '1px solid #D5D5D5',
                      }}
                    >
                      {assignmentList.startDt} ~ {assignmentList.endDt}
                    </td>
                    <td
                      style={{
                        padding: '15px 0',
                        borderBottom: '1px solid #D5D5D5',
                      }}
                    >
                      {assignmentList.score}
                    </td>

                    <td
                      style={{
                        padding: '20px',
                        borderBottom: '1px solid #D5D5D5',
                        justifyContent: 'center',
                      }}
                    >
                      {stateDisplay(moment(assignmentList.startDt), moment(assignmentList.endDt))}
                    </td>
                    <td
                      style={{
                        padding: '15px 0',
                        borderBottom: '1px solid #D5D5D5',
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      <WriteAcitonButtonBlock>
                        <StyledButton
                          cyan
                          onClick={(e) => {
                            goUpdate(e, assignmentList.assignmentId);
                          }}
                        >
                          수정
                        </StyledButton>
                        <StyledButton
                          cyan
                          onClick={(e) => {
                            onDelete(e, assignmentList.assignmentId);
                          }}
                        >
                          삭제
                        </StyledButton>
                      </WriteAcitonButtonBlock>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
      <div style={{ marginLeft: '1rem' }}>
        <StyledButton cyan onClick={(e) => goWrite(e)}>
          작성하기
        </StyledButton>
      </div>
    </div>
  );
};

export default ProfessorAssignmentList;
