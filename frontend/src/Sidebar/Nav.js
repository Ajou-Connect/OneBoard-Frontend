import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './Nav.scss';
import { IconContext } from 'react-icons';
import { SidebarData } from './SidebarData';
// import UserData from '../Pages/UserData';

const Nav = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const logout = () => {
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('token');
  };

  return (
    <div className="navbar-container">
      <IconContext.Provider value={{ color: '#fff' }}>
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
                {/* {UserData.map((item, index) => {
                  return (
                    <div key={index} className="navbar-toggle-profile-name">
                      {item.name} {item.ID}
                    </div>
                  );
                })} */}
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
