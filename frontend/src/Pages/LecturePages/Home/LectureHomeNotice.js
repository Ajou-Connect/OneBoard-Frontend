import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import moment from 'moment';

const Container = styled.div`
  border: 1px solid #cdcdcd;
  margin: 10px;
  width: 90%;
  height: 450px;
  background-color: #eef8f7;
  border-radius: 5px;
  box-shadow: 3px 3px 3px gray;
`;

const LectureHomeNotice = (props) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [latestNotice, setLatestNotice] = useState({});
  const lectureId = props.lectureId;
  const today = moment();
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
            setLatestNotice(result.filter((list) => moment(list.exposeDt) <= today)[0]);
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
      {latestNotice === undefined ? (
        <Container>
          <div
            style={{
              fontSize: '20px',
              fontWeight: 'bold',
              margin: '2rem 0 3rem 2rem',
            }}
          >
            등록된 공지사항이 없습니다
          </div>
        </Container>
      ) : (
        <Container>
          <div style={{ margin: '5px', display: 'flex', fontSize: '1.3rem' }}>
            제목 : <div style={{ marginLeft: '5px', fontWeight: 'bold' }}>{latestNotice.title}</div>
          </div>
          <div style={{ margin: '5px' }}>작성 날짜 : {latestNotice.exposeDt}</div>
          <hr style={{ width: '97%', borderColor: '#ffffff' }} />
          <div
            dangerouslySetInnerHTML={{ __html: latestNotice.content }}
            style={{ margin: '5px' }}
          />
        </Container>
      )}
    </div>
  );
};

export default LectureHomeNotice;
