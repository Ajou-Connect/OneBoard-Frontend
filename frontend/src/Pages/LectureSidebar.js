import React from 'react';
import './LectureSidebar.scss';
import { Link } from 'react-router-dom';
const LectureSidebar = () => {
  return (
    <div className="LecturePage">
      <nav className="menu">
        <ul className="menu-item-list">
          <div className="Lecture-profile">Lecture profile something</div>
          <li className="menu-item">
            <div className="menu-text">
              <Link to="/Lecture/LecturePage1/Home" className="menu-text">
                홈
              </Link>
            </div>
          </li>
          <li className="menu-item">
            <div className="menu-text">강의계획서</div>
          </li>
          <li className="menu-item">
            <div className="menu-text">
              <Link to="/Lecture/LecturePage1/Notice" className="menu-text">
                공지사항
              </Link>
            </div>
          </li>
          <li className="menu-item">
            <div className="menu-text">수업 목록</div>
          </li>
          <li className="menu-item">
            <div className="menu-text">성적</div>
          </li>
          <li className="menu-item">
            <div className="menu-text">출석 관리</div>
          </li>
          <li className="menu-item">
            <div className="menu-text">과목 선택</div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LectureSidebar;
