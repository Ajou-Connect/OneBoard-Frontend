import React, { useEffect, useState } from 'react';
import moment from 'moment';
import './LectureNoticeContent.scss';
import axios from 'axios';
const LectureNoticeContent = (props) => {
  const user = JSON.parse(sessionStorage.userInfo);
  const isProfessor = user.userType === 'T';
  const [notices, setNotices] = useState({
    id: 0,
    title: "",
    content: "",
    lectureId: 0,
    exposeDt: null,
    updataDt : null,
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    console.log(isProfessor);

    const fetchNotice = async () => {
      try {
        
      }
    };
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
