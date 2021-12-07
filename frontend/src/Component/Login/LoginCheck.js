import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import axios from 'axios';
import { useHistory } from 'react-router';
import MainLogo from '../../img/OneBoardLogo.png';
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

  const history = useHistory();

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
    } else if (value === '') {
      setEmail('');
      setPassword('');
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
        if (res.data.result === 'FAIL') {
          setIsLogined(false);
          setGetAlert({
            flag: true,
            message: '아이디 혹은 비밀번호가 틀렸거나 없는 사용자 입니다.',
          });
          setTimeout(() => {
            setGetAlert({ flag: false, message: '' });
          }, 1500);
        }

        try {
          setIsLogined(true);
          sessionStorage.setItem('token', res.data.data.token);
          sessionStorage.setItem('email', res.data.data.email);
          const token = sessionStorage.getItem('token');
          console.log(token);
          axios
            .get('/user', { headers: { 'X-AUTH-TOKEN': `${token}` } })
            .then((res) => {
              const info = res.data.data;
              console.log('userinfo : ' + info);
              sessionStorage.setItem('userInfo', JSON.stringify(info));
            })
            .catch((e) => {
              console.log(e);
            });

          setGetAlert({
            flag: true,
            message: '로그인 되었습니다! OneBoard에 오신것을 환영합니다',
          });
          setTimeout(() => {
            history.push('/Main/Home');
          }, 1500);
        } catch (error) {
          setError(error.message);
        }
      })
      .catch((error) => {
        setGetAlert({
          flag: true,
          message: '아이디 혹은 비밀번호가 틀렸거나 없는 사용자 입니다.',
        });
        console.log(error);
      });
  };

  return (
    <div style={{ marginTop: '1.2rem' }}>
      <center>
        <div>
          <img src={MainLogo} style={{ width: '40%', height: '200px' }} />
        </div>
      </center>
      <Row>
        <center>
          <Col className="InputContainer">
            <input
              style={{
                borderRadius: '7px',
                width: '40%',
                height: '80px',
                fontSize: '2rem',
                marginTop: '5rem',
                paddingLeft: '10px',
              }}
              className="signInInput"
              name="email"
              type="email"
              placeholder="ID"
              required
              value={sessionStorage.getItem('email')}
              onChange={(e) => onChangehandler(e)}
              onKeyPress={(e) => enterEvent(e)}
            />
          </Col>
          <Col className="InputContainer">
            <input
              style={{
                marginTop: '15px',
                borderRadius: '7px',
                width: '40%',
                height: '80px',
                fontSize: '2rem',
                paddingLeft: '10px',
              }}
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
            <button
              style={{
                marginTop: '3rem',
                borderRadius: '7px',
                width: '40%',
                height: '80px',
                fontSize: '1.5rem',
                backgroundColor: '#E6F4F1',
                color: 'black',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
              className="DoSignIn"
              onClick={(e) => onSubmit(e)}
            >
              로그인
            </button>
          </Col>
        </center>
      </Row>
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
        >
          {getAlert.message}
        </div>
      </ModalBody>
    </div>
  );
};

export default LoginCheck;
