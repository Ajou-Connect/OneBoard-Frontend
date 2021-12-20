import React, { useEffect, useState } from 'react';
import './LectureStudentNoticeContent.scss';
import axios from 'axios';
import styled from 'styled-components';
import Button from '../../../Component/common/Button';
import moment from 'moment';

const Title = styled.div`
  margin-top: 1.5rem;
  margin-left: 20px;
  font-size: 30px;
  border-bottom: 1px solid #f7f9fc;
  height: 40px;
  line-height: 40px;
  font-weight: bold;
`;

const LectureStudentNoticeContent = (props) => {
  const user = JSON.parse(localStorage.userInfo);

  const [notices, setNotices] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
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
            console.log(result);
            setNotices(result);
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

  const onWriteClick = (e) => {
    e.preventDefault();
    return (window.location.href = `/Main/Lecture/${lectureId}/Notice/WriteNotice`);
    // 글쓰기 눌렀을 때 writepage로 이동
  };

  const onUpdateClick = (e, noticeid) => {
    e.preventDefault();
    return (window.location.href = `/Main/Lecture/${lectureId}/Notice/UpdateNotice/${noticeid}`);
    //수정 눌렀을때 updatepage로 이동
  };

  const onDeleteClick = (e, noticeid) => {
    //delete눌렀을때 axios.delete로 공지사항 목록 하나 삭제
    if (window.confirm('정말 삭제하시겠습니까?')) {
      axios.delete(`/lecture/${lectureId}/notice/` + noticeid).then((res) => {
        const result = res.data;
        console.log(result);
      });
    } else {
      e.preventDefault();
    }
  };

  return (
    <div id="content" className="contentBox">
      <Title>공지사항</Title>
      <div className="container clearfix" id="containerdiv">
        <form name="noticeForm" id="noticeForm">
          <ul id="announcementList" className="announcementList announcementList-read">
            {notices.length === 0 ? (
              <div
                style={{
                  textAlign: 'center',
                  marginTop: '200px',
                  fontSize: '30px',
                  fontStyle: 'italic',
                  fontWeight: 'bold',
                }}
              >
                등록된 공지사항이 없습니다.
              </div>
            ) : (
              notices.map((notice, index) => {
                return moment(notice.exposeDt) <= today ? (
                  <li key={index} className="claerfix">
                    <h3 className="notice-title">{notice.title}</h3>
                    <div className="details">
                      <p>
                        <span>개시일 : {notice.exposeDt}</span>
                      </p>
                      <div
                        className="notice-content"
                        dangerouslySetInnerHTML={{ __html: notice.content }}
                      ></div>
                    </div>
                    <div className="noticeInfo">
                      <div style={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                        
                      </div>
                    </div>
                  </li>
                ) : (
                  <div></div>
                );
              })
            )}
          </ul>
        </form>
      </div>
    </div>
  );
};

export default LectureStudentNoticeContent;
