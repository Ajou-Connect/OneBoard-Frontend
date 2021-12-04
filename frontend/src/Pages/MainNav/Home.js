import React, { useEffect, useState } from 'react';
import './Home.scss';

import mainimage from "../../img/MainImage.png";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as FcIcons from "react-icons/fc";
import * as BsIcons from "react-icons/bs";
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
    <div className="home" style={{ height: "810px", justifyContent: "center", backgroundColor: "#486096" }} >
      
        <div className="navbar" >
          <div className="icons" style={{ marginLeft:"1rem", display: "flex" }}>
            <Link to="/Main/Home" className="menu-bars">HOME</Link>  
            <Link to="/Main/Profile" className="menu-bars">프로필</Link>
          <Link to="/Main/Lecture" className="menu-bars">강의 목록으로 가기</Link>
          </div>
          <div style={{display:"flex",marginLeft:"auto"}}>
            <Link to="/Login" className="menu-bars" >
              <div onClick={logout} >
                로그아웃
                </div>
              </Link>
            </div>
          
        </div>
      <div style={{ width: "100%", height: "700px" }} className="home-main" />
    </div>
  );
};

export default Home;
