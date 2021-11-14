import React, { useEffect, useState } from 'react';
import './Profile.scss';

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
  }, [user]);

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
