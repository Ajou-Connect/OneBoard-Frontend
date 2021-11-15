import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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

const StudentAssignmentList = (props) => {
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
            const result = res.data;
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
    };
    return () => setLoading(false);
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

  const goDetail = () => {
    //해당 assignment에 해당하는 페이지로 라우팅
  };

  return (
    <div>
      <Container>
        <Title>Assignment</Title>
        <div style={{ width: '100%', display: 'block' }}>
          <SubTitle>과제</SubTitle>
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
              <th style={{ padding: '10px 0', width: '30%' }}>과제 내용</th>
              <th style={{ padding: '10px 0', width: '30%' }}>과제 기간</th>
              <th style={{ padding: '10px 0', width: '30%' }}>진행 상태</th>
              <th style={{ padding: '10px 0', width: '30%' }}>채점 상태</th>
            </tr>
          </thead>
          <tbody>
            {/* map함수로 assignmentList 돌리기 */}
            <tr
              style={{
                borderRadius: '5px',
                boxShadow: '0px 2px 2px 1px #eeeeee',
                cursor: 'pointer',
              }}
              onClick={goDetail}
            >
              <td
                style={{ padding: '10px 0', backgroundColor: 'white', borderRadius: '5px 0 0 5px' }}
              >
                <div
                  style={{
                    fontSize: '20px',
                    fontWeight: '700',
                    color: '#3E3E3E',
                    display: 'block',
                  }}
                >
                  제목
                </div>
              </td>
              <td style={{ padding: '10px 0', backgroundColor: 'white' }}>날짜 22~33</td>
              <td style={{ padding: '10px 0', backgroundColor: 'white' }}>몇일 남았는지</td>
              <td style={{ padding: '10px 0', backgroundColor: 'white' }}>채점 체크표시</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentAssignmentList;
