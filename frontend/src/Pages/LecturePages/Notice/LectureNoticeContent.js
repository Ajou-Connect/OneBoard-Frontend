import React, { useEffect, useState } from 'react';
import moment from 'moment';
import './LectureNoticeContent.scss';
import axios from 'axios';
const LectureNoticeContent = (props) => {
  const user = sessionStorage.getItem('token');

  // const [users, setUsers] = useState(null);
  const [isProfessor, setIsProfessor] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get('/user', { headers: { 'X-AUTH-TOKEN': `${user}` } });
        console.log(res.data); // user data
        console.log(res.data.data.userType);
        sessionStorage.setItem('userType', res.data.data.userType);
      } catch (e) {
        console.log(e);
      }
    };
    fetchUsers();
    const userType = sessionStorage.getItem('userType');
    if (userType === 'T') {
      setIsProfessor(true);
    }
    console.log(`${isProfessor}`);
  }, []);

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
            <li className="claerfix">
              <h3 className="notice-title">제목</h3>
              <div className="details">
                <p>
                  <span>작성일</span>
                </p>
                <div className="notice-content">게시물 내용</div>
              </div>
              <div className="noticeInfo">
                <p>
                  <span>작성자 :</span>
                </p>
              </div>
            </li>
            <li className="claerfix">
              <h3 className="notice-title">제목</h3>
              <div className="details">
                <p>
                  <span>작성일</span>
                </p>
                <div className="notice-content">게시물 내용</div>
              </div>
              <div className="noticeInfo">
                <p>
                  <span>작성자 :</span>
                </p>
              </div>
            </li>
            <li className="claerfix">
              <h3 className="notice-title">제목</h3>
              <div className="details">
                <p>
                  <span>작성일</span>
                </p>
                <div className="notice-content">게시물 내용</div>
              </div>
              <div className="noticeInfo">
                <p>
                  <span>작성자 :</span>
                </p>
              </div>
            </li>
            <li className="claerfix">
              <h3 className="notice-title">제목</h3>
              <div className="details">
                <p>
                  <span>작성일</span>
                </p>
                <div className="notice-content">게시물 내용</div>
              </div>
              <div className="noticeInfo">
                <p>
                  <span>작성자 :</span>
                </p>
              </div>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default LectureNoticeContent;
