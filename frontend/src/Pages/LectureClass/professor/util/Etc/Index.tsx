import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Popup from './util/Popup'
import axios from 'axios'
import './style.css'
import ResPop from './util/ResultPopup.js'

const QuizContainer = styled.div`
height : 36vh;
width : 100%;
overflow-y: scroll;
::-webkit-scrollbar {
    display: none;
}
`

const FlexContainer = styled.div`
width : 100%;
display : flex;
flex-direction : column;
justify-content : center;
align-items : center;
margin-bottom: 15px;
`

const QuizBox = styled.div`
position : relative;
width : 95%;
margin-bottom : 1vh;
height : 6vh;
border : 1px solid #70707090;
border-radius : 4px;
display : flex;
justify-content : space-between;
align-items : center;
padding : 5px 10px;
font-size : 0.9rem;
color : #707070;
`

const SubmitBtn = styled.button`
width : 20%;
border : 1px solid #70707090;
border-radius : 4px;
height : 90%;
z-index : 99;
`

const Background = styled.div`
z-index : 98;
height : 100%;
position: absolute;
background-color: #ddfab1;
left : 0;
border-radius : 4px;
&.active{
    animation-name: slidein;
    animation-duration: 5s;
}
`

const ResultBox = styled.div`
width : 95%;
height : fit-content;
`
const ResultContent = styled.button`
width : 50%;
margin-bottom: 5px;
border : 1px solid #70707090;
border-radius : 4px;
`


interface QuizProps {
    socket: any
}

function Index(props: QuizProps) {

    const socket = props.socket;

    const [popup, setpopup] = useState(false);
    const [isListening, setisListening] = useState(false);
    const [listeningTime, setlisteningTime] = useState(0);
    const [quizType, setquizType] = useState(0);
    const [resultRef, setresultRef] = useState(React.createRef());
    const [backRef, setBackRef] = useState(React.createRef());
    const [results, setresults] = useState<Array<any>>([]);
    const [currentResNum, setcurrentResNum] = useState(-1);
    const [showRes, setshowRes] = useState(false);
    const [currentType, setcurrentType] = useState(-1)

    function submitQuiz(e: any) {
        if (isListening) {
            alert('퀴즈가 진행중입니다!');
            return;
        }
        setquizType(e.target.parentNode.id);
        setpopup(true);
    }

    function renderQuizTypes() {
        const names = ['주관식 퀴즈', '객관식 퀴즈', 'OX 퀴즈', '사전 준비 퀴즈1'];
        return names.map((name, idx) => (
            <QuizBox className="quizTypes" id={(idx + 1).toString()}>
                <span style={{ zIndex: 99 }}>{names[idx]}</span>
                <SubmitBtn id="quizSubmit" onClick={submitQuiz}>제출</SubmitBtn>
                <Background id="quizBackground"></Background>
            </QuizBox>
        ))
    }

    function openPop(e:any){
        setcurrentResNum(e.target.id);
        setcurrentType(e.target.dataset.type);
        setshowRes(true);
    }

    function setShowResFalse(){
        setshowRes(false);
        const quizBackground = document.querySelectorAll('#quizBackground')[quizType - 1] as HTMLElement;
        quizBackground.style.removeProperty('animationName');
        quizBackground.style.removeProperty('animationDuration');
    }

    function set(time: number, obj: any) {
        console.log(obj);
        setpopup(false);
        setisListening(true);
        setTimeout(() => {
            setisListening(false);
            setresults(results.concat([<ResultContent data-type = {obj.type} id={obj.id} onClick = {openPop} >퀴즈{results.length + 1}</ResultContent>]));
        }, time * 10000);
        const quizBackground = document.querySelectorAll('#quizBackground')[quizType - 1] as HTMLElement;
        quizBackground.style.animationName = 'slidein';
        quizBackground.style.animationDuration = `${time * 10}s`;
    }

    return (
        <QuizContainer>
            <FlexContainer id="quizFlexCnt">
                {renderQuizTypes()}
                <ResultBox id="quizResultBox">
                    결과 :
                    {results}
                </ResultBox>
            </FlexContainer>
            {popup && <Popup type={quizType} socket={props.socket} setOptions={(time: number, obj: any) => {
                set(time, obj);
            }} />}
            {showRes && <ResPop setShowResFalse = {setShowResFalse} type = {currentType} quiz_id = {currentResNum}></ResPop>}
        </QuizContainer>
    )
}

export default Index