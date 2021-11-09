import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import Logo from '../../img/OneBoard.png';
import axios from 'axios';

const LoginCheck = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogined, setIsLogined] = useState(false);
  const [error, setError] = useState('');
  const [getAlert, setGetAlert] = useState({ flag: false, message: '' });

  const enterEvent = (e) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem('email')) {
      setIsLogined(true);
    } else {
      setIsLogined(false);
    }
    setGetAlert({ flag: false, message: '' });
  }, []);

  const onChangehandler = (e) => {
    let { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const onSubmit = async (e) => {
    let data = {
      email: email,
      password: password,
    };
    await axios
      .post('/auth/login', data)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container className="SignInContainer">
      <Row>
        <Col className="InputContainer">
          <input
            className="signInInput"
            name="email"
            type="email"
            placeholder="ID"
            required
            value={sessionStorage.getItem('email')}
            onChange={(e) => onChangehandler(e)}
            onKeyPress={(e) => enterEvent(e)}
          />
          <input
            className="signInInput"
            name="password"
            type="password"
            placeholder="Password"
            required
            value={password}
            onKeyPress={(e) => enterEvent(e)}
            onChange={(e) => onChangehandler(e)}
          />
        </Col>
        <Col className="SignInBtnContainer">
          <button className="DoSignIn" onClick={(e) => onSubmit(e)}>
            로그인
          </button>
        </Col>
      </Row>

      <ModalHeader style={{ height: '70px', textAlign: 'center' }}></ModalHeader>
      <ModalBody style={{ height: '90px' }}>
        <div
          style={{
            textAlign: 'center',
            marginTop: '4%',
            marginBottom: '8%',
            fontFamily: 'NanumSquare_acR',
            fontWeight: 'bold',
            fontSize: '18px',
            height: '50px',
          }}
        ></div>
      </ModalBody>
    </Container>
  );
};

export default LoginCheck;
