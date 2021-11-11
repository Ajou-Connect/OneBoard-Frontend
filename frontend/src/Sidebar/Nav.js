import React, { useEffect, useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './Nav.scss';
import { IconContext } from 'react-icons';
import { SidebarData } from './SidebarData';
import axios from 'axios';
// import UserData from '../Pages/UserData';

const Nav = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const [users, setUsers] = useState(null);
  const user = sessionStorage.getItem('token');

  const logout = () => {
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('token');
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get('/user', { headers: { 'X-AUTH-TOKEN': `${user}` } });
        console.log(res.data);
        setUsers(res.data.data);
        // for (let i = 0; i < res.data.length; i++) {
        //   if (res.data[i].email === user) {
        //     setUsers(res.data[i]);
        //   }
        // }
        // console.log(res.data[1]);
      } catch (e) {
        console.log(e);
      }
    };
    fetchUsers();
  }, []);

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
                <div className="navbar-toggle-profile-name">
                  {users.name}
                  <br />
                  {users.studentNumber}
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
