import React, { useEffect, useState } from 'react';
import './LectureList.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Nav from '../../Sidebar/Nav';
const LectureList = () => {
  const token = localStorage.getItem('token');
  const [lectures, setLectures] = useState([]);
  // 최초 렌더링 후 보여줄 함수 작성
  //await async 로 lecture id 호출

  const getLectureData = () => {
    axios
      .get('/lectures', { headers: { 'X-AUTH-TOKEN': `${token}` } })
      .then((res) => {
        const result = res.data.data;
        setLectures(result);
        console.log(result);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getLectureData();
  }, []);

  return (
    <div>
      <Nav />
      <div className="term" style={{ marginTop: '20px' }}>
        <h2 className="semester active-term">2021-2학기</h2>
      </div>
      <div id="course-columns-current" className="course-columns list-columns-view">
        <div className="Lecture-list">
          <div className="term-name">
            2021-2학기
            {lectures.length === 0 ? (
              <div
                style={{
                  textAlign: 'center',
                  marginTop: '200px',
                  fontSize: '30px',
                  fontStyle: 'italic',
                  fontWeight: 'bold',
                }}
              >
                등록된 과목이 없습니다.
              </div>
            ) : (
              lectures.map((lecture, index) => {
                return (
                  <a href={`/Main/Lecture/${lecture.id}/Home`}>
                    <div
                      key={index}
                      className="element-card course-element-card highlight pointer bar js-course-details child-is-invokable course-color-classic"
                      style={{ marginBottom: '10px' }}
                    >
                      <div className="element-details summary">
                        <div className="small-12">
                          <div className="course-id">
                            <span>
                              과목 ID : {lecture.id}
                              &nbsp;&nbsp; &nbsp; {lecture.semester}학기
                            </span>
                          </div>
                        </div>
                        <div className="a-tag later">{lecture.title}</div>
                        <div className="small-status">
                          <div className="basic-info">담당 교수 : {lecture.professor}</div>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LectureList;
