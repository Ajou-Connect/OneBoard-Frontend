import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const WriteBtn = styled.button`
  font-size: 12px;
  padding: 5px;
  margin-top: 10px;
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

const AssignmentList = (props) => {
  const user = JSON.parse(sessionStorage.userInfo);
  const isProfessor = user.userType === 'T';
  const lectureId = props.lectureId;
  console.log(lectureId);

  const [assignments, setAssignments] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  console.log(isProfessor);
  useEffect(() => {
    const fetchAssignment = async () => {
      try {
        setError(null);
        setLoading(true);
        //axios.get
        await axios
          .get(`/lecture/${lectureId}/assignments`)
          .then((res) => {
            const result = res.data;
            console.log(result);
            setAssignments(result);
            console.log('assignment data : ' + assignments);
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
        에러가 발생했습니다. 공지사항을 불러올수 없습니다.
      </div>
    );

  return (
    <div>
      <div>this is for assignment List</div>
    </div>
  );
};

export default AssignmentList;
