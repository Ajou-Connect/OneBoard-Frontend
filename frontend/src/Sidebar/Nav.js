import React, { useEffect, useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './Nav.scss';
import { IconContext } from 'react-icons';
import { SidebarData } from './SidebarData';

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
  }, []);

  return (
    <div className="navbar-container">
      <IconContext.Provider value={{ color: '#131111' }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
              <div className="navbar-toggle-text">
                <div className="navbar-toggle-profile-name">
                  {name} {studentNumber}
                </div>
              </div>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span className="menuList">{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <li className="nav-text">
              <span className="menuList">
                <Link to="/Login" onClick={logout}>
                  Logout
                </Link>
              </span>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
};

export default Nav;
