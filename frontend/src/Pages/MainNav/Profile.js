import React, { useEffect, useState } from 'react';
import './Profile.scss';
import axios from 'axios';

const Profile = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const user = sessionStorage.getItem('email');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setError(null);
        setUsers(null);
        setLoading(true);
        const res = await axios.get('/member');
        console.log(res.data[1].id);
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].email === user) {
            setUsers(res.data[i]);
          }
        }
        console.log(res.data[1]);
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
      <section>
        <h2>사용자정보</h2>
        <ul>
          <li className="data-row">
            <div className="data-container">
              <span className="data-title">성명</span>
              <div className="data-value">{users.name}</div>
            </div>
          </li>
          <li className="data-row">
            <div className="data-container">
              <span className="data-title">학번</span>
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
      </section>
    </div>
  );
};

export default Profile;
