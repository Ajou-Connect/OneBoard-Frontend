import { REFUSED } from 'dns';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import './style.css';

const SubContainer = styled.div`
  height: 30vh;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const SubFlexBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const ControlBox = styled.div`
  margin-top: 1vh;
  height: 5vh;
  width: 100%;
  display: flex;
  justify-content: left;
`;

const PlayBtn = styled.button`
  width: 30%;
  border: 1px solid black;
  line-height: 5vh;
`;

const StopBtn = styled.button`
  width: 30%;
  border: 1px solid black;
  line-height: 5vh;
`;

const Listen = styled.div`
  text-align: center;
  width: 30%;
  border: 1px solid black;
  line-height: 5vh;
`;

const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let rec = Recognition && new Recognition();
function Index(props) {
  const socket = props.socket;
  const type = props.type;

  const [flexRef, setflexRef] = useState(React.createRef());
  const [isListening, setisListening] = useState(true);
  const [Sentence, setSentence] = useState('');
  useEffect(() => {
    rec.interimResults = true;
    rec.lang = 'ko-KR';

    rec.onstart = () => {
      if (flexRef.current.text) {
        if (flexRef.current.text.length > 0) {
          console.log(flexRef.current.text, 'started');
          addSub(flexRef.current.text);
          socket.emit('subtitle', {
            time: '11:11',
            content: flexRef.current.text,
          });
          flexRef.current.text = '';
        }
      }
    };
    rec.onend = () => {
      console.log('end');
      startListen();
    };
    rec.onresult = (event) => {
      /*             console.log('onresult');
                        let text = event.results[event.results.length - 1][0].transcript;
                        console.log(text);
                        if (text.charAt(0) == ' ') text = text.substring(1, text.length);
                        addSub(text);
                        axios.put('/api/subtitle/add', {
                            lectureId: props.lectureId,
                            content: text,
                            time: "00:00",
                            subtitleOpt: true
                        }).then(res => {
                            console.log(res);
                        }) */
      let texts = Array.from(event.results)
        .map((results) => results[0].transcript)
        .join('');

      texts.replace(/느낌표|강조|뿅/gi, '❗️');
      flexRef.current.text = texts;
      /* setSentence(texts); */
    };
  }, []);

  const addSub = (str) => {
    const box = document.createElement('div');
    const timeStamp = document.createElement('span');
    const content = document.createElement('span');
    box.setAttribute('class', 'subBox');
    timeStamp.innerHTML = '00:00';
    content.innerHTML = str;
    box.appendChild(timeStamp);
    box.appendChild(content);
    flexRef.current.appendChild(box);
    box.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
    });
  };

  useEffect(() => {
    rec.start();
  }, []);

  function startListen() {
    rec.start();
  }

  function stopListen() {
    rec.stop();
  }

  return (
    <>
      <SubContainer>
        <SubFlexBox ref={flexRef}></SubFlexBox>
      </SubContainer>
      <ControlBox>
        <Listen>녹음중..</Listen>
      </ControlBox>
    </>
  );
}

export default Index;
