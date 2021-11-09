import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      OneBoard에 오신것을 환영합니다
      <Link to="/Login">로그인 하러가기</Link>
    </div>
  );
};

export default Main;
