import React from 'react';
import { Link } from 'react-router-dom';
import mainImg from '../../img/MainImage2.png';
import styled from 'styled-components';
import './Main.scss';
import Header from "../../Header";
const Title = styled.div`
  font-size: 30px;
  margin-left: 1rem;
  border-bottom: 1px solid #f7f9fc;
  height: 40px;
  line-height: 40px;
  text-align: left;
`;

const Main = () => {
  return (
    <div>
      <Header/>
      <div className="into-main" style={{ width: '100%', height: '700px' }} />
      <center>
      <div style={{ display: "flex" }}>
      <div style={{
              fontSize: '2rem',
              cursor: 'pointer',
              textDecoration: 'underline',
          marginLeft: "5rem",
              marginRight:"1rem"
            }}><a href="https://www.notion.so/OneBoard-04940c8dee0e4fdf8ea1174075fe566c">더 알아보기 </a></div>
      
          <Link
            to="/Login"
            style={{
              fontSize: '2rem',
              cursor: 'pointer',
              textDecoration: 'underline',
              
            }}
          >
            로그인 하러가기
          </Link>
        
        </div>
        </center>
    </div>
  );
};

export default Main;
