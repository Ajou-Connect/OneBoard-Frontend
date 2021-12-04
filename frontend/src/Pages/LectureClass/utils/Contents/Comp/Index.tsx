import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const CompupContainer = styled.div`
width : 100%;
display : flex;
justify-content : center;
align-items : center;
`

const Compbtn1 = styled.button`
height : 6.5vh;
width : 70%;
background-size: contain;                      
background-repeat: no-repeat;
background-position: center center;
/* background-color : ${props => props.theme.color.blue}; */
`

const Compbtn2 = styled.button`
height : 6.5vh;
width : 70%;
background-size: contain;                      
background-repeat: no-repeat;
background-position: center center;
/* background-color : ${props => props.theme.color.blue}; */
`

interface CompProps {
    socket: any
    lecture_id: number
    lecture_info: any
}

const user = sessionStorage && sessionStorage.userInfo && JSON.parse(window.sessionStorage.userInfo);

function Index(props: CompProps) {
    const socket = props.socket;

    function upBtnHandler() {
        /* console.log("hi");
        console.log(props.lecture_id.toString());
        console.log(props.lecture_info.start_time);
        console.log(props.lecture_info.options.limit); */
        axios.post('/api/understanding/send', {
            isUnderstood: true,
            lectureId: props.lecture_id,
            lectureStartTime: props.lecture_info.start_time,
            limit: props.lecture_info.options.limit
        }).then(res => {
            console.log(res);
            socket.emit("understandingStu", {
                type: 'up',
                time: res.data.understanding.time
            })
        })
        try{
            const elm = document.querySelector(`.participantsclass#${user.email.split("@")[0]}`) as any;
            console.log(elm.childNodes[1].innerHTML = (parseInt(elm.childNodes[1].innerHTML) + 1).toString());
        }catch(err){
            console.log(err);
        }
    }

    function downBtnHandler() {
        axios.post('/api/understanding/send', {
            isUnderstood: false,
            lectureId: props.lecture_id,
            lectureStartTime: props.lecture_info.start_time,
            limit: props.lecture_info.options.limit
        }).then(res => {
            console.log(res);
            socket.emit("understandingStu", {
                type: 'down',
                time: res.data.understanding.time
            })
        })
        try{
            const elm = document.querySelector(`.participantsclass#${user.email.split("@")[0]}`) as any;
            console.log(elm.childNodes[1].innerHTML = (parseInt(elm.childNodes[1].innerHTML) + 1).toString());
        }catch(err){
            console.log(err);
        }
    }

    return (
        <CompupContainer style={{ height: '35vh' }}>
            <div style={{ height: '15vh', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                <Compbtn1  onClick={upBtnHandler}>up</Compbtn1>
                <Compbtn2  onClick={downBtnHandler}>down</Compbtn2>
            </div>
        </CompupContainer>
    )
}

export default Index