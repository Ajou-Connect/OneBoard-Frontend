import React, { useEffect } from 'react'
import styled from 'styled-components'

interface chatProps {
    msg: string
    name : string
}

const Container = styled.div`
width : 100%;
display : flex;
justify-content : flex-start;
align-items : center;
margin-bottom : 5px;
`
const Partcipant = styled.div`
font-size : 0.6rem;
padding : 2px 3px;
margin-right : 5px;
word-break:break-all;
`

const Container1 = styled.div`
width : 100%;
display : flex;
justify-content : flex-start;
align-items : center;
`

const Msg = styled.div`
font-size : 1rem;
padding : 2px 3px;
border-radius : 5px;
background-color : #E4E6EB;
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
  margin : 0 5px;
`

function OtherChat(props: chatProps) {

    useEffect(() => {

    }, [])

    return (
        <Cont>
            <Container1>
                <Partcipant>{props.name}<span style={{ display: 'none' }} id="chatSpan">03:13PM</span></Partcipant>
            </Container1>
            <Container id="msgCnt" style={{ width: '100%' }}>
                <Msg>{props.msg}</Msg>
                <TimeSpan id="time" >03:13PM</TimeSpan>
            </Container>
        </Cont>
    )
}

export default OtherChat