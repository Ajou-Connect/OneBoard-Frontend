import React, { useEffect, useState } from 'react';
import './LectureSidebar.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
const LectureSidebar = (props) => {
  const user = JSON.parse(sessionStorage.userInfo);
  const userType = user.userType;
  const lectureId = props.lectureId;
  const [lectureInfo, setLectureInfo] = useState({});

  const getLectureInfo = () => {
    axios
      .get(`/lecture/${lectureId}`)
      .then((res) => {
        const result = res.data.data;
        setLectureInfo(result);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getLectureInfo();
  }, []);

  return (
    <div className="LecturePage">
      <nav className="menu">
        <ul className="menu-item-list">
          <div
            className="Lecture-profile"
            style={{
              marginTop: '15px',
              paddingBottom: '15px',
              borderBottom: '1px solid #CDCDCD',
              fontWeight: 'bold',
              color: 'black',
            }}
          >
            교수 : {lectureInfo.professor}
            <br />
            과목 : {lectureInfo.title}
          </div>
          <li className="menu-item">
            <div className="menu-text">
              <Link to={`/Main/Lecture/${props.lectureId}/Home`} className="menu-text">
                과목 홈
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
              <Link
                to={`/Main/Lecture/${userType}/${props.lectureId}/Assignment`}
                className="menu-text"
              >
                과제/시험
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
