import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Profile.scss';
import Nav from '../../Sidebar/Nav';
const Profile = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const user = JSON.parse(sessionStorage.userInfo);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setError(null);
        setLoading(true);
        setUsers(user);
      } catch (e) {
        setError(e);
        console.log(e);
      }
      setLoading(false);
    };
    fetchUsers();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return null;
  return (
    <div className="user-information">
      <Nav />
      <section style={{ marginTop: '1rem' }}>
        <h2 style={{ marginLeft: '20px' }}>사용자정보</h2>
        <center>
          <ul>
            <li className="data-row">
              <div className="data-container">
                <span className="data-title">성명</span>
                <div className="data-value">{users.name}</div>
              </div>
            </li>
            <li className="data-row">
              <div className="data-container">
                <span className="data-title">교번</span>
                <div className="data-value">{users.studentNumber}</div>
              </div>
            </li>
            <li className="data-row">
              <div className="data-container">
                <span className="data-title">이메일 주소</span>
                <div className="data-value">{users.email}</div>
              </div>
            </li>
            <li className="data-row">
              <div className="data-container">
                <span className="data-title">학교</span>
                <div className="data-value">{users.university}</div>
              </div>
            </li>
            <li className="data-row">
              <div className="data-container">
                <span className="data-title">학과</span>
                <div className="data-value">{users.major}</div>
              </div>
            </li>
          </ul>
        </center>
      </section>
    </div>
  );
};

export default Profile;
