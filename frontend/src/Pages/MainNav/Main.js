import React from 'react';
import { Link } from 'react-router-dom';
import mainImg from '../../img/MainImage2.png';
import styled from 'styled-components';
import './Main.scss';
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
      <div className="into-main" style={{ width: '100%', height: '700px' }}>
        <center>
          <Link
            to="/Login"
            style={{
              fontSize: '2rem',
              cursor: 'pointer',
              textDecoration: 'underline',
              color: '#EDF3F8',
            }}
          >
            로그인 하러가기
          </Link>
        </center>
      </div>
    </div>
  );
};

export default Main;
