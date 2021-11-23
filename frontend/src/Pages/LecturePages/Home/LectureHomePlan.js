import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid #cdcdcd;
  margin: 10px;
  margin-left: 0px;
  width: 90%;
  height: 450px;
`;

export const LectureHomePlan = (props) => {
  const lectureId = props.lectureId;
  const [isPlan, setIsPlan] = useState(false);
  const Url = `https://docs.google.com/gview?embedded=true&url=http://115.85.182.194:8080/lecture/${lectureId}/plan`;
  const FileURL = `http://115.85.182.194:8080/lecture/${lectureId}/plan`;
  const getPlan = () => {
    return new Promise((resolve, reject) => {
      axios
        .get(`/lecture/${lectureId}/plan`)
        .then((res) => {
          const result = res.data;
          console.log(result);

          if (result.data !== null) {
            setIsPlan(true);
          }
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  };

  useEffect(() => {
    getPlan();
  }, []);
  return (
    <div style={{ width: '50%', height: '500px' }}>
      <div style={{ margin: '10px', marginLeft: '0px', fontWeight: 'bold', fontSize: '1.3rem' }}>
        강의계획서
      </div>
      <Container>
        {isPlan !== true ? (
          <div>현재 등록된 강의계획서가 없습니다</div>
        ) : (
          <iframe
            id="plan"
            src={Url}
            style={{ width: '100%', height: '400px', marginTop: '10px' }}
          />
        )}
      </Container>
    </div>
  );
};

export default LectureHomePlan;
