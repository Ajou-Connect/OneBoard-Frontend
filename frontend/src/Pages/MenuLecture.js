import React from 'react';
import { Link } from 'react-router-dom';
import './MenuLecture.scss';

const MenuLecture = () => {
  return (
    <div>
      <div className="term">
        <h2 className="semester active-term">2021-2학기</h2>
      </div>
      <div id="course-columns-current" className="course-columns list-columns-view">
        <div className="Lecture-list">
          <div className="term-name">
            2021-2학기
            <div className="element-card course-element-card highlight pointer bar js-course-details child-is-invokable course-color-classic">
              <div className="element-details summary">
                <div className="small-12">
                  <div className="course-id">
                    <span>과목ID</span>
                  </div>
                </div>
                <div className="a-tag later">과목 태그</div>
                <div className="small-status">
                  <div className="basic-info">담당 교수</div>
                </div>
              </div>
            </div>
            <div className="element-card course-element-card highlight pointer bar js-course-details child-is-invokable course-color-classic">
              <div className="element-details summary">
                <div className="small-12">
                  <div className="course-id">
                    <span>과목ID</span>
                  </div>
                </div>
                <div className="a-tag later">
                  <Link to="/Lecture/LecturePage">과목이름</Link>
                </div>
                <div className="small-status">
                  <div className="basic-info">담당 교수</div>
                </div>
              </div>
            </div>
            <div className="element-card course-element-card highlight pointer bar js-course-details child-is-invokable course-color-classic">
              <div className="element-details summary">
                <div className="small-12">
                  <div className="course-id">
                    <span>과목ID</span>
                  </div>
                </div>
                <div className="a-tag later">과목 태그</div>
                <div className="small-status">
                  <div className="basic-info">담당 교수</div>
                </div>
              </div>
            </div>
            <div className="element-card course-element-card highlight pointer bar js-course-details child-is-invokable course-color-classic">
              <div className="element-details summary">
                <div className="small-12">
                  <div className="course-id">
                    <span>과목ID</span>
                  </div>
                </div>
                <div className="a-tag later">과목 태그</div>
                <div className="small-status">
                  <div className="basic-info">담당 교수</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuLecture;
