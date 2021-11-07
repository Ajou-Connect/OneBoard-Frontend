import React from 'react';
import './Profile.scss';
import UserData from '../Pages/UserData';

const Profile = () => {

  


  return (
    <div className="user-information">
      <section>
        <h2>사용자정보</h2>
        <ul>
          <li className="data-row">
            <div className="data-container">
              <span className="data-title">성명</span>
              <div className="data-value">이름</div>
            </div>
          </li>
          <li className="data-row">
            <div className="data-container">
              <span className="data-title">학번</span>
              <div className="data-value">학번</div>
            </div>
          </li>
          <li className="data-row">
            <div className="data-container">
              <span className="data-title">이메일 주소</span>
              <div className="data-value">주소</div>
            </div>
          </li>
          <li className="data-row">
            <div className="data-container">
              <span className="data-title">학교</span>
              <div className="data-value">학교이름</div>
            </div>
          </li>
          <li className="data-row">
            <div className="data-container">
              <span className="data-title">학과</span>
              <div className="data-value">학과이름</div>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Profile;
