import React, { useEffect, useState } from 'react'
import Box from './utils/Box'
import styled from 'styled-components'
import socketio from 'socket.io-client'
import axios from 'axios'

const QuestionContainer = styled.div`
width : 100%;
height : 37vh;
::-webkit-scrollbar {
    display: none;
}
`
const ChatContentCnt = styled.div`
width : 100%;
height : 31vh;
overflow-y : scroll;
::-webkit-scrollbar {
    display: none;
}
`
const ChatInputCnt = styled.div`
width : 100%;
height : 5vh;
display : flex;
justify-content : space-between;
align-items : center;
`
const ChatInput = styled.input`
width: 80%;
height : 75%;
border: 1px solid #D4D4D4; 
border-radius: 5px;
padding: 0 0.5rem;
`
const ChatSubmitBtn = styled.button`
font-size :0.8rem;
width : 20%;
text-align : center;
font-weight : bold;
color : #A6C5F3;
`
const user = localStorage && localStorage.userInfo && JSON.parse(window.localStorage.userInfo);
function Index(props: any) {
    const socket = props.socket;

    const [qNum, setqNum] = useState<number>(0);
    const [inputRef, setinputRef] = useState<any>(React.createRef());

    const [questions, setquestions] = useState<Array<any>>([]);

    function mySubmit() {
        console.log('button');
        const qInput = document.querySelector('#qInput') as HTMLInputElement;
        if (qInput.value) {
            const payload = {
                lectureId: props.lecture_id,
                name: user && user.name,
                questionContent: qInput.value
            }
            console.log(payload);
            axios.post('/api/question/create', {
                lectureId: props.lecture_id,
                name: user ? user.name : "",
                questionContent: qInput.value
            }).then((res) => console.log(res));
            console.log(qInput.value);
            socket.emit('question', {
                content: qInput.value,
                qNum: qNum
            })
            setquestions(questions.concat([<Box lecture_id={props.lecture_id} qNum={qNum} socket={socket} msg={qInput.value}></Box>]));
            try {
                const elm = document.querySelector(`.participantsclass#${user.email.split("@")[0]}`) as any;
                console.log(elm.childNodes[1].innerHTML = (parseInt(elm.childNodes[1].innerHTML) + 1).toString());
            }catch(err){
                console.log(err);
            }
        }
        setqNum(qNum + 1);
        inputRef.current.value = '';
    }

    useEffect(() => {
        socket.on('sendQ', (data: any) => {
            console.log(data, "질문 받음");
            setquestions(questions.concat([<Box lecture_id={props.lecture_id} qNum={data.qNum} socket={socket} msg={data.content}></Box>]));
            setqNum(qNum + 1);
            try{
                const elm = document.querySelector(`.participantsclass#${data.email.split("@")[0]}`) as any;
                console.log(elm.childNodes[1].innerHTML = (parseInt(elm.childNodes[1].innerHTML) + 1).toString());
            }catch(err){
                console.log(err);
            }
        })
    }, [questions])

    const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            mySubmit();
        }
    }

    return (
        <QuestionContainer>
            <ChatContentCnt>
                {questions}
            </ChatContentCnt>
            <ChatInputCnt>
                <ChatInput ref={inputRef} onKeyPress={onKeyPress} id="qInput" type="TextArea" placeholder="질문을 입력해주세요" />
                <ChatSubmitBtn onClick={mySubmit}>내전송</ChatSubmitBtn>
            </ChatInputCnt>
        </QuestionContainer>
    )
}

export default Index