import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  width: 97%;
  height: 100%;
  display: block;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  padding: 0 20px;
`;
const Containers = styled.div`
  width: 100%;
  height: 30%;
  display: inline-block;
  //overflow-y: auto;
  //align-items : center;
  //justify-content : center;
`;
const Title = styled.div`
  font-size: 30px;
  border-bottom: 1px solid #f7f9fc;
  height: 40px;
  line-height: 40px;
  font-style: italic;
`;
const SubTitless = styled.div`
  display: block;
  color: ${(props) => props.theme.color.gray1};
  font-size: 16px;
  margin-bottom: 15px;
  font-weight: 1000;
`;
const SubTitle = styled.div`
  float: left;
  margin-top: 3px;
  margin-right: 20px;
  color: #8b8b8b;
  font-size: 13px;
  font-weight: 400;
`;
const Box = styled.div`
  padding-left: 30%;
  padding-top: 5%;
`;

const Desc = styled.div`
  font-size: 20px;
  color: ${(props) => props.theme.color.gray1};
  margin-bottom: 10px;
`;
const LinkBox = styled.div`
  width: 60%;
  height: 120px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.color.gray7};
  box-shadow: 10px 5px 5px ${(props) => props.theme.color.gray7};
  padding: 1.5rem;
  display: block;
  margin-bottom: 15px;
`;

const Link = styled.div`
  border-bottom: 1px solid black;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SubmitBtn = styled.button`
  width: 60%;
  height: 40px;
  background-color: #407ad6;
  color: white;
  text-align: center;
  line-height: 40px;
  border-radius: 10px;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 13px;
  border-bottom: 1px solid black;
`;

function Index() {
  const [code, setCode] = useState('');

  const onChangeCode = (e) => {
    setCode(e.target.value);
    console.log(code);
  };

  const submitHandler = () => {
    axios
      .put('/api/subject/join', {
        code: code,
      })
      .then((response) => {
        const result = response.data;
        console.log(result);
        alert(result.subject.name + '에 성공적으로 참여하였습니다.');
        return (window.location.href = '/main');
      })
      .catch((response) => {
        console.log('Error!');
        console.log(response);
      });
  };

  return (
    <Container>
      <Containers>
        <Title>Enter Lecture</Title>
        <div style={{ width: '100%', display: 'block' }}>
          <SubTitle>강의 / 강의 참가</SubTitle>
        </div>
        <hr
          style={{
            width: '100%',
            margin: '30px 0px',
            marginTop: '50px',
            display: 'block',
            borderColor: '#ffffff',
          }}
        />
      </Containers>
      <Box>
        <LinkBox>
          <SubTitless>강의 링크</SubTitless>
          <Input placeholder="강의 링크를 입력하세요" onChange={onChangeCode} />
        </LinkBox>
        <SubmitBtn onClick={submitHandler}>강의 참여</SubmitBtn>
      </Box>
    </Container>
  );
}

export default Index;
