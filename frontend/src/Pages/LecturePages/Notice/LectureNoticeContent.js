import React, { useEffect, useState } from 'react';
import moment from 'moment';
import './LectureNoticeContent.scss';
import axios from 'axios';
const LectureNoticeContent = (props) => {
  const user = JSON.parse(sessionStorage.userInfo);
  const isProfessor = user.userType === 'T';
  const [notices, setNotices] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(isProfessor);

    const fetchNotice = async () => {
      try {
        setError(null);
        setLoading(true);
        //lectureID부분 나중에 `${lectureId}` 로 바꾸기
        await axios
          .get('/lecture/1/notices')
          .then((res) => {
            const result = res.data.data;
            console.log(result);
            setNotices(result);
            console.log(notices[0].id);
          })
          .catch((e) => {
            console.log(e);
          });
      } catch (e) {
        setError(e);
        console.log(e);
      }
    };
    fetchNotice();
  }, []);

  const onWriteClick = () => {
    // 글쓰기 눌렀을 때 writepage로 이동
  };

  const onUpdataClick = () => {
    //수정 눌렀을때 updatepage로 이동
  };

  const onDeleteClick = () => {
    //delete눌렀을때 axios.delete로 공지사항 목록 하나 삭제
  };

  return (
    <div id="content" className="contentBox">
      <div id="pageTitleDiv" className="pageTitle clearfix">
        <div id="pageTitleBar" className="pageTitleIcon">
          <h1 id="pageTitleHeader">
            <span id="pageTitleText">공지사항</span>
          </h1>
        </div>
      </div>

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
                등록된 공지사항이 없습니다{' '}
              </div>
            ) : (
              notices.map((notice, index) => {
                return (
                  <li key={index} className="claerfix">
                    <h3 className="notice-title">{notice.title}</h3>
                    <div className="details">
                      <p>
                        <span>{notice.exposeDt}</span>
                      </p>
                      <div className="notice-content">{notice.content}</div>
                    </div>
                    <div className="noticeInfo">
                      <p>
                        <span>작성자 : {notice.id}</span>
                      </p>
                    </div>
                  </li>
                );
              })
            )}
          </ul>
        </form>
      </div>
    </div>
  );
};

export default LectureNoticeContent;
