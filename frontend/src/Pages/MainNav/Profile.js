import React, { useEffect, useState } from 'react';
import './Profile.scss';
import { Link } from 'react-router-dom';

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

    const logout = () => {
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userInfo');
  };

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return null;
  return (
    <div className="user-information">
      <div className="navbar" style={{boxShadow:"5px 5px 10px gray",backgroundColor:"#1c5ba4",color:"white"}}>
          <div className="icons" style={{ marginLeft:"1.1rem", display: "flex" , color:"white"}}>
            <Link to="/Main/Home" className="menu-bars" style={{color:"white"}}>HOME</Link>  
            <Link to="/Main/Profile" className="menu-bars" style={{color:"white"}}>프로필</Link>
          <Link to="/Main/Lecture" className="menu-bars" style={{color:"white"}}>강의목록</Link>
          </div>  
            <div style={{display:"flex",marginLeft:"auto",color:"white"}}>
            <Link to="/Login" className="menu-bars" >
              <div onClick={logout} style={{color:"white"}}>
                로그아웃
                </div>
              </Link>
            </div>
          
        </div>
      <section style={{marginTop:"1rem"}}>
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
              <span className="data-title">사번</span>
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
