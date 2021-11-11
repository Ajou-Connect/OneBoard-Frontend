import React, { useState } from 'react';

import './Login.scss';

const Login = () => {
  const [inputId, setInputId] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPassword = (e) => {
    setInputPassword(e.target.value);
  };

  const onClickLogin = () => {
    console.log('ID : ', inputId);
    console.log('PW : ', inputPassword);
    //axios Post 로 user information 받아오기
    //.then (res) => 아이디 패스워드 인증확인
  };

  return (
    <div>
      <h1 className="Login_logo">
        <div className="Login_text">Login</div>
      </h1>
      <div className="input_ID">
        <input type="text" name="input_id" value={inputId} onChange={handleInputId} />
      </div>
      <div className="Input_PW">
        <input
          type="text"
          name="input_password"
          value={inputPassword}
          onChange={handleInputPassword}
        />
      </div>
      <div>
        <button onClick={onClickLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
