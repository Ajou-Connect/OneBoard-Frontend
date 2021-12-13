import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
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

const WriteBtn = styled.button`
  font-size: 12px;
  padding: 5px;
  margin-top: 10px;
  margin-bottom: 15px;
  margin-right: 5px;
  background-color: #ececec;
  color: #3e3e3e;
  border-radius: 5px;
  font-weight: bold;
  &:hover {
    background-color: #bfbfbf;
  }
`;

const Title = styled.div`
  font-size: 30px;
  margin-left: 15px;
  border-bottom: 1px solid #f7f9fc;
  margin-top: 15px;
  height: 40px;
  line-height: 40px;
  font-style: italic;
  text-align: left;
`;

const SubTitle = styled.div`
  margin: 10px;
  font-size: 1.3rem;
  font-weight: bold;
`;

export const WriteLecturePlan = ({ match }) => {
  const lectureId = match.params.lectureId;
  const [lectureTitle, setLectureTItle] = useState(null);
  const [files, setFiles] = useState({});

  const getLectureData = () => {
    return new Promise((resolve, reject) => {
      axios
        .get(`/lecture/${lectureId}`)
        .then((res) => {
          const result = res.data.data;
          setLectureTItle(result.title);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  };

  useEffect(() => {
    getLectureData();
  }, []);

  const onFileChange = (e) => {
    e.preventDefault();
    console.log(e.target.files);
    setFiles(e.target.files[0]);
  };

  const onCancel = () => {
    return (window.location.href = `/Main/Lecture/${lectureId}/Plan`);
  };

  const onSubmit = (e) => {
    console.log(files);
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', files, files.name);
    console.log(formData);
    axios
      .post(`/lecture/${lectureId}/plan`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((res) => {
        console.log(res);
        // return (window.location.href = `/Main/lecture/${lectureId}/Plan`);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <Title>강의 계획서</Title>
      <hr style={{ width: '100%', margin: '10px 0px', display: 'block', borderColor: '#ffffff' }} />
      <SubTitle style={{ marginLeft: '20px' }}>{lectureTitle}</SubTitle>
      <hr style={{ width: '100%', margin: '10px 0px', display: 'block', borderColor: '#ffffff' }} />
      <form name="planfile" encType="multipart/form-data" onSubmit={onSubmit}>
        <input style={{ margin: '20px' }} type="file" onChange={onFileChange} />
        <button type="submit" style={{ borderRadius: '5px' }}>
          등록
        </button>
      </form>
      <WriteBtn onClick={onCancel} style={{ marginLeft: '20px', cursor: 'pointer' }}>
        뒤로가기
      </WriteBtn>
    </div>
  );
};

export default WriteLecturePlan;
