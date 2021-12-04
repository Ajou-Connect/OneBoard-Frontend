import React from 'react';
import './Home.scss';
import { Nav } from 'reactstrap';
import mainimage from "../../img/MainImage.png";


const Home = () => {
  return (
    <div className="home" style={{height:"810px",justifyContent:"center"}}>      
      <nav>
        <Nav />
      </nav>
      <div style={{width:"1600px" , height:"700px"}} className="home-main">
          
      </div>
    </div>
  );
};

export default Home;
