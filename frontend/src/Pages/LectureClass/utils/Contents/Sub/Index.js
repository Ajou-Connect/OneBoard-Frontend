import { Socket } from 'dgram';
import { REFUSED } from 'dns';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import './style.css';

const SubCnt = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubContentCnt = styled.div`
  width: 100%;
  height: 30vh;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const SubInputCnt = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SubInput = styled.input`
  padding: 0 0.5rem;
  height: 80%;
  width: 80%;
  border: 1px solid #d4d4d4;
  border-radius: 5px;
`;

const SubSubmitBtn = styled.button`
  font-size: 0.8rem;
  width: 20%;
  text-align: center;
  font-weight: bold;
  color: #a6c5f3;
`;

const SubFlexBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  min-height: 30vh;
`;

function Index(props) {
  const socket = props.socket;

  const [flexRef, setflexRef] = useState(React.createRef());
  const [inputRef, setinputRef] = useState(React.createRef());
  const [subContent, setsubContent] = useState('');

  function addSub(str) {
    const box = document.createElement('div');
    const timeStamp = document.createElement('span');
    const content = document.createElement('span');
    box.setAttribute('class', 'subBox');
    box.setAttribute('id', inputRef.current.num);
    timeStamp.innerHTML = '00:00';
    content.innerHTML = str;
    content.setAttribute('class', 'subContents');
    content.setAttribute('id', inputRef.current.num++);
    box.appendChild(timeStamp);
    box.appendChild(content);
    flexRef.current.appendChild(box);
    box.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
    });
  }

  useEffect(() => {
    inputRef.current.num = 0;
    inputRef.current.total = '';
    inputRef.current.arr = [];
    socket.on('sendSubtitle', function (data) {
      addSub(data.content);
      inputRef.current.total = inputRef.current.total.concat(' ' + data.content);
      inputRef.current.arr.push(' ' + data.content);
    });
  }, []);

  function findAnswer() {
    const payload = {
      context: inputRef.current.total,
      question: inputRef.current.value,
    };
    axios.post(`http://3.37.36.54:5000/mrc_post`, payload).then((response) => {
      console.log(response.data[0].answer);
      const arr = inputRef.current.arr;
      const answer = response.data[0].answer;
      const start = response.data[0].start;
      const end = response.data[0].end;
      arr.forEach((sentence, idx) => {
        if (sentence.includes(answer)) {
          let start = sentence.indexOf(answer);
          const target = document.querySelectorAll(`.subContents`);
          const tmp = target[idx].innerHTML;
          target[idx].innerHTML = '';
          target[idx].append(sentence.substring(0, start));
          const newSpan = document.createElement('span');
          newSpan.style.backgroundColor = 'yellow';
          newSpan.innerHTML = answer;
          target[idx].append(newSpan);
          if (start + answer.length + 1 <= sentence.length)
            target[idx].append(sentence.substring(start + answer.length + 1, sentence.length));
          target[idx].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
          });
          setTimeout(() => {
            while (target[idx].hasChildNodes()) {
              target[idx].removeChild(target[idx].firstChild);
            }
            target[idx].innerHTML = tmp;
          }, 30000);
        }
      });
    });
    inputRef.current.value = '';
  }

  return (
    <SubCnt>
      <SubContentCnt id="chatContentContainer">
        <SubFlexBox ref={flexRef}></SubFlexBox>
      </SubContentCnt>
      <SubInputCnt>
        <SubInput
          ref={inputRef}
          id="chatInput"
          type="TextArea"
          placeholder="질문을 입력해주세요!"
        />
        <SubSubmitBtn onClick={findAnswer}>내전송</SubSubmitBtn>
      </SubInputCnt>
    </SubCnt>
  );
}

export default Index;
