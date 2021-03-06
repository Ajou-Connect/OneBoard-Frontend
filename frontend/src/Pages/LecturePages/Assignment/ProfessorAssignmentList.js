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
          {moment(startDate).format('M??? D??? HH:mm')} - {moment(endDate).format('M??? D??? HH:mm')}{' '}
          (??????)
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
        ????????? ...
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
        ????????? ??????????????????. ??????????????? ???????????? ????????????.
      </div>
    );

  const goWrite = () => {
    return (window.location.href = `/Main/Lecture/${lectureId}/Assignment/Write`);
  };

  const goUpdate = (e, assignmentId) => {
    return (window.location.href = `/Main/Lecture/${userType}/${lectureId}/Assignment/Update/${assignmentId}`);
  };

  const goDetail = (e, assignmentId) => {
    //?????? assignment??? ???????????? ???????????? ?????????
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
          <StateDescript>??????</StateDescript>{' '}
          <StateColorCircle style={{ backgroundColor: '#E24C4B' }} />
          <StateDescript>?????? ???</StateDescript>{' '}
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
              <th style={{ padding: '10px 0', width: '20% ' }}>?????? ???</th>
              <th style={{ padding: '10px 0', width: '40% ' }}>?????? ??????</th>
              <th style={{ padding: '10px 0', width: '10% ' }}>??????</th>
              <th style={{ padding: '10px 0', width: '5% ' }}>?????? ??????</th>
              <th style={{ padding: '10px 0', width: '20% ' }}>??????/??????</th>
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
                ????????? ????????? ????????????.
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
                          ??????
                        </StyledButton>
                        <StyledButton
                          cyan
                          onClick={(e) => {
                            onDelete(e, assignmentList.assignmentId);
                          }}
                        >
                          ??????
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
          ????????????
        </StyledButton>
      </div>
    </div>
  );
};

export default ProfessorAssignmentList;
