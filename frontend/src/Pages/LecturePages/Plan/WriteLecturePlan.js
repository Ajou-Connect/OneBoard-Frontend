import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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

    axios
      .post(`/lecture/${lectureId}/plan`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((res) => {
        console.log(res);
        return (window.location.href = `/Main/lecture/${lectureId}/Plan`);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <Title>강의 계획서</Title>
      <hr style={{ width: '100%', margin: '10px 0px', display: 'block', borderColor: '#ffffff' }} />
      <SubTitle>{lectureTitle}</SubTitle>
      <hr style={{ width: '100%', margin: '10px 0px', display: 'block', borderColor: '#ffffff' }} />
      <form name="planfile" encType="multipart/form-data" onSubmit={onSubmit}>
        <input type="file" onChange={onFileChange} />
        <button type="submit">등록</button>
      </form>
    </div>
  );
};

export default WriteLecturePlan;
