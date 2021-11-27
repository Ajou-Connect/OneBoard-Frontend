import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

interface chatProps {
    msg: string
    name : string
}

const Container = styled.div`
width : 100%;
display : flex;
justify-content : flex-end;
align-items : center;
margin-bottom : 5px;
`

const Container1 = styled.div`
width : 100%;
display : flex;
justify-content : flex-end;
align-items : center;
`


const Msg = styled.div`
font-size : 1rem;
padding : 2px 3px;
border-radius : 5px;
margin-right : 5px;
background-color : #C0EFFB;
word-break:break-all;
`

const Partcipant = styled.div`
font-size : 0.6rem;
padding : 2px 3px;
margin-right : 5px;
word-break:break-all;
`

const Cont = styled.div`
 &:hover #time {
    display : inline;
  }
`

const TimeSpan = styled.span`
  font-size : 0.6rem;
  display : none;
  margin-right : 5px;
`

function MyChat(props: chatProps) {

    const [cntRef, setcntRef] = useState<any>(React.createRef());

    return (
        <Cont>
            <Container1>
                <Partcipant>{props.name} <span style={{ display: 'none' }} id="chatSpan">03:13PM</span></Partcipant>
            </Container1>
            <Container ref={cntRef} id="msgCnt" style={{ width: '100%' }}>
            <TimeSpan id="time" >03:13PM</TimeSpan>
                <Msg>{props.msg}</Msg>
            </Container>
        </Cont>
    )
}

export default MyChat