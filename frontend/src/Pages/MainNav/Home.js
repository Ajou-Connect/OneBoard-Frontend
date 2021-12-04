import React, { useEffect, useState } from 'react';
import './Home.scss';
import Nav from '../../Sidebar/Nav';
import mainimage from '../../img/MainImage.png';

const Home = () => {
  const user = JSON.parse(sessionStorage.userInfo);
  const [isSidebar, setIsSidebar] = useState(false);
  const [name, setName] = useState('');
  const [studentNumber, setStudentNumber] = useState('');

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
    <div className="home">
      <Nav />
      <div style={{ width: '100%', height: '700px', marginTop: '20px' }} className="home-main" />
    </div>
  );
};

export default Home;
