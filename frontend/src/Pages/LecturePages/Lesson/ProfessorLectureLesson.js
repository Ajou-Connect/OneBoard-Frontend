import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';
import Button from '../../../Component/common/Button';
import axios from 'axios';

const Title = styled.div`
  margin-top: 1.5rem;
  margin-left: 20px;
  font-size: 30px;
  border-bottom: 1px solid #f7f9fc;
  height: 40px;
  line-height: 40px;
  font-weight: bold;
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

const TabletrColor = styled.tr`
  &:nth-child(even) {
    background: #f7f9fc;
  }
`;

const ProfessorLectureLesson = (props) => {
  const lectureId = props.lectureId;
  const [lessonLists, setLessonLists] = useState([]);

  const getLessonData = () => {
    return new Promise((resolve, reject) => {
      axios
        .get(`/lecture/${lectureId}/lessons`)
        .then((res) => {
          const result = res.data.data;
          setLessonLists(result);
          console.log(result);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  };

  useEffect(() => {
    getLessonData();
  }, []);

  const onDetail = (e, lessonId) => {
    console.log(lessonId);
    return (window.location.href = `/Main/Lecture/${lectureId}/Lesson/${lessonId}/LessonDetail`);
  };

  const onDelete = (e, lessonId) => {
    axios.delete(`lecture/${lectureId}/lesson/${lessonId}`).then((res) => {
      const result = res.data;
      console.log(result);
      window.location.href = `/Main/Lecture/${lectureId}/Lesson`;
    });
  };

  const onGenerate = () => {
    return (window.location.href = `/Main/Lecture/${lectureId}/Lesson/GenerateLesson`);
  };

  const onUpdate = (e, lessonId) => {
    return (window.location.href = `/Main/Lecture/${lectureId}/Lesson/Update/${lessonId}`);
  };
  return (
    <div style={{ marginBottom: '5rem' }}>
      <Title>수업</Title>
      <hr style={{ width: '100%', margin: '10px 0px', display: 'block', borderColor: '#ffffff' }} />
      <table
        style={{
          width: '100%',
          borderTop: '1px solid #D5D5D5',
          textAlign: 'center',
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
            <th style={{ padding: '10px 0', width: 'auto' }}>회차</th>
            <th style={{ padding: '10px 0', width: 'auto' }}>수업 이름</th>
            <th style={{ padding: '10px 0', width: 'auto' }}>강의 날짜</th>
            <th style={{ padding: '10px 0', width: 'auto' }}>수업 타입</th>
            <th style={{ padding: '10px 0', width: 'auto' }}>수정/삭제</th>
          </tr>
        </thead>
        <tbody>
          {lessonLists.map((lessonList, index) => (
            <TabletrColor key={index}>
              <td
                style={{
                  padding: '10px 0',
                  borderBottom: '1px solid #D5D5D5',
                }}
              >
                {index + 1}
              </td>
              <td
                style={{
                  padding: '10px 0',
                  borderBottom: '1px solid #D5D5D5',
                  fontWeight: 'bold',
                  textDecoration: 'underline',
                  fontSize: '1rem',
                  cursor: 'pointer',
                }}
                onClick={(e) => onDetail(e, lessonList.lessonId)}
              >
                {lessonList.title}
              </td>
              <td
                style={{
                  padding: '10px 0',
                  borderBottom: '1px solid #D5D5D5',
                }}
              >
                {lessonList.date}
              </td>
              <td
                style={{
                  padding: '10px 0',
                  borderBottom: '1px solid #D5D5D5',
                }}
              >
                {lessonList.type === 2 ? (
                  <div>대면 강의</div>
                ) : lessonList.type === 1 ? (
                  <div>비대면 실시간 강의</div>
                ) : (
                  <div>녹화 강의</div>
                )}
              </td>
              <td
                style={{
                  padding: '10px 0',
                  borderBottom: '1px solid #D5D5D5',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <WriteAcitonButtonBlock>
                  <StyledButton cyan onClick={(e) => onUpdate(e, lessonList.lessonId)}>
                    수정하기
                  </StyledButton>
                  <StyledButton cyan onClick={(e) => onDelete(e, lessonList.lessonId)}>
                    삭제하기
                  </StyledButton>
                </WriteAcitonButtonBlock>
              </td>
            </TabletrColor>
          ))}
        </tbody>
      </table>
      <StyledButton cyan style={{ marginTop: '0.5rem' }} onClick={onGenerate}>
        수업 생성하기
      </StyledButton>
    </div>
  );
};

export default ProfessorLectureLesson;
