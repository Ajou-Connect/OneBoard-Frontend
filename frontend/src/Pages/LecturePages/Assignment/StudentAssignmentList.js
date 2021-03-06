import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import moment from 'moment';
const WriteBtn = styled.button`
  font-size: 12px;
  padding: 5px;
  margin-top: 10px;
  margin-bottom: 5px;
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
const StateBox = styled.div`
  justify-content: center;
  margin: 0px auto;
  display: block;
  border-radius: 50px;
  padding: 10px;
  width: 50%;
`;

const StudentAssignmentList = (props) => {
  const lectureId = props.lectureId;
  const [assignments, setAssignments] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const user = JSON.parse(localStorage.userInfo);
  const userType = user.userType;

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
      } catch (e) {
        setError(e);
        console.log(e);
      }
      setLoading(false);
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

  const goDetail = (e, assignmentId) => {
    return (window.location.href = `/Main/Lecture/${userType}/${lectureId}/Assignment/${assignmentId}/StudentDetail`);
  };

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

  return (
    <div>
      <Title>Assignment</Title>
      <div style={{ width: '100%', display: 'block', height: '20px', marginRight: '20px' }}>
        <StateDescript>??????</StateDescript>{' '}
        <StateColorCircle style={{ backgroundColor: '#E24C4B' }} />
        <StateDescript>?????? ???</StateDescript>{' '}
        <StateColorCircle style={{ backgroundColor: '#66FF33' }} />
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
                      cursor: 'pointer',
                      backgroundColor: 'white',
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
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      {stateDisplay(moment(assignmentList.startDt), moment(assignmentList.endDt))}
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

export default StudentAssignmentList;
