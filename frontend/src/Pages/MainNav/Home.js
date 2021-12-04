import React, { useEffect, useState } from 'react';
import './Home.scss';

import mainimage from "../../img/MainImage.png";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { SidebarData } from '../../Sidebar/SidebarData';


const Home = () => {
  const user = JSON.parse(sessionStorage.userInfo);
  const [isSidebar, setIsSidebar] = useState(false);
  const [name, setName] = useState("");
  const [studentNumber, setStudentNumber] = useState("");

  const showSidebar = () => {
    setIsSidebar(!isSidebar);
  }

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
    <div className="home" style={{ height: "810px", justifyContent: "center" }}>
       <IconContext.Provider value={{ color: '#131111' }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <div style={{display:"flex"}}>
        <nav className={isSidebar ? 'nav-menu active' : 'nav-menu'}>
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
              <Link to="/Login" onClick={logout}>
                <span className="menuList">Logout</span>
              </Link>
            </li>
          </ul>
            </nav>
     
      <div style={{ width: "100%", height: "700px" }} className="home-main" />
      </div>
       </IconContext.Provider>
    </div>
  );
};

export default Home;
