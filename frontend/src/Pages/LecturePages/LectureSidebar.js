import React from 'react';
import './LectureSidebar.scss';
import { Link } from 'react-router-dom';
const LectureSidebar = (props) => {
  console.log('props값 : ' + props.lectureId);
  return (
    <div className="LecturePage">
      <nav className="menu">
        <ul className="menu-item-list">
          <div className="Lecture-profile">Lecture profile something</div>
          <li className="menu-item">
            <div className="menu-text">
              <Link to={`/Main/Lecture/${props.lectureId}/Home`} className="menu-text">
                홈
              </Link>
            </div>
          </li>
          <li className="menu-item">
            <div className="menu-text">
              <Link to={`/Main/Lecture/${props.lectureId}/Plan`} className="menu-text">
                강의계획서
              </Link>
            </div>
          </li>
          <li className="menu-item">
            <div className="menu-text">
              <Link to={`/Main/Lecture/${props.lectureId}/Notice`} className="menu-text">
                공지사항
              </Link>
            </div>
          </li>
          <li className="menu-item">
            <div className="menu-text">
              <Link to={`/Main/Lecture/${props.lectureId}/Lesson`} className="menu-text">
                수업 목록
              </Link>
            </div>
          </li>
          <li className="menu-item">
            <div className="menu-text">
              <Link to={`/Main/Lecture/${props.lectureId}/Score`} className="menu-text">
                성적
              </Link>
            </div>
          </li>
          <li className="menu-item">
            <div className="menu-text">
              <Link to={`/Main/Lecture/${props.lectureId}/Attendance`} className="menu-text">
                출석 관리
              </Link>
            </div>
          </li>
          <li className="menu-item">
            <div className="menu-text">
              <Link to="/Main/Lecture" className="menu-text">
                과목 선택
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LectureSidebar;
