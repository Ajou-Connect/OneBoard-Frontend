import React from 'react';
// import moment from 'moment';
// import { Link } from 'react-router-dom';
// import Pagination from './NoticePagination';
import './LectureNoticeContent.scss';
const LectureNoticeContent = (props) => {
  // const [posts, setPosts] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage] = useState(5);

  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
