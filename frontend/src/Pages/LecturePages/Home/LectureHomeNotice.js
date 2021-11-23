import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid #cdcdcd;
  margin: 10px;
  width: 90%;
  height: 450px;
`;

export const LectureHomeNotice = (props) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const lectureId = props.lectureId;
  const [latestNotice, setLatestNotice] = useState({});
  useEffect(() => {
    const fetchNotice = async () => {
      try {
        setError(null);
        setLoading(true);
        //lectureID부분 나중에 `${lectureId}` 로 바꾸기
        await axios
          .get('/lecture/' + lectureId + '/notices')
          .then((res) => {
            const result = res.data.data;
            console.log(result.length);
            setLatestNotice(result[0]);
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
    fetchNotice();
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
    <div style={{ width: '50%', height: '500px' }}>
      <div style={{ margin: '10px', fontWeight: 'bold', fontSize: '1.3rem' }}>최신 공지사항</div>
      <Container>
        <div style={{ margin: '5px', display: 'flex', fontSize: '1.3rem' }}>
          제목 : <div style={{ marginLeft: '5px', fontWeight: 'bold' }}>{latestNotice.title}</div>
        </div>
        <div style={{ margin: '5px' }}>작성 날짜 : {latestNotice.exposeDt}</div>
        <hr style={{ width: '97%', borderColor: '#ffffff' }} />
        <div
          dangerouslySetInnerHTML={{ __html: latestNotice.content }}
          style={{ margin: '5px' }}
        ></div>
      </Container>
    </div>
  );
};

export default LectureHomeNotice;
