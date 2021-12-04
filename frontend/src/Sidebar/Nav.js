import React, { useEffect, useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { IconContext } from 'react-icons';
import { SidebarData } from './SidebarData';
import './Nav.scss';

const Nav = () => {
  const user = JSON.parse(sessionStorage.userInfo);
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const [name, setName] = useState(null);
  const [studentNumber, setStudentNumber] = useState(null);

  const logout = () => {
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userInfo');
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setName(user.name);
        setStudentNumber(user.studentNumber);
      } catch (e) {
        console.log(e);
      }
    };
    fetchUser();
  }, [user]);

  return (
    <div className="navbar-container">
      <div
        className="navbar"
        style={{ boxShadow: '5px 5px 10px gray', backgroundColor: '#1c5ba4', color: 'white' }}
      >
        <div className="icons" style={{ marginLeft: '1.1rem', display: 'flex', color: 'white' }}>
          <Link to="/Main/Home" className="menu-bars" style={{ fontSize: '1.1rem' }}>
            HOME
          </Link>
          <Link to="/Main/Profile" className="menu-bars" style={{ fontSize: '1.1rem' }}>
            프로필
          </Link>
          <Link to="/Main/Lecture" className="menu-bars" style={{ fontSize: '1.1rem' }}>
            과목목록
          </Link>
        </div>
        <div style={{ display: 'flex', marginLeft: 'auto', color: 'white' }}>
          <Link to="/Login" className="menu-bars">
            <div onClick={logout} style={{ fontSize: '1.1rem' }}>
              로그아웃
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
