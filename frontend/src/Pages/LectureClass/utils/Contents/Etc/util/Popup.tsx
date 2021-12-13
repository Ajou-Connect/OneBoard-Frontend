import React, { useState, useEffect } from 'react';
import { Modal, Button, Radio } from 'antd';
import styled from 'styled-components'
import './Style.css'
import axios from 'axios';

interface QuestionType {
    purpose : String
    type: number
    deadline: number
    id : number
}

interface PopProps {
    socket: any,
    data: QuestionType,
    setOptions: Function
}

const TimerCnt = styled.div`
display : flex;
justify-content: flex-end;
align-items: center;
`

const Questions = styled.div`
margin-bottom : 5px;
`

const AnswerInput = styled.textarea`
width : 100%;
margin-bottom : 15px;
outline : none;
border : 1px solid black;
border-radius : 5px;
`

function Index(props: PopProps) {

    const socket = props.socket;

    const [isModalVisible, setIsModalVisible] = useState(true);
    const [value, setValue] = React.useState(1);
    const [html_, sethtml_] = useState<Array<any>>([])
    const [timer, settimer] = useState(props.data.deadline * 60);
    const [minStr, setminStr] = useState("");
    const [secStr, setsecStr] = useState("");
    const [min, setmin] = useState(props.data.deadline);
    const [sec, setsec] = useState(0);
    const [strVal, setstrVal] = useState("");
    const [multipleVal, setmultipleVal] = useState(1);
    const [tfVal, settfVal] = useState(1);

    const showModal = () => {
        setIsModalVisible(true);
    };

    function sendAnswer(num:any){
        axios.put('/api/quiz/submit', {
            quizId: props.data.id,
            response: [
                {
                    answer: num
                }
            ]
        }).then(res=>{console.log(res)});
    }

    const handleOk = () => {
        setIsModalVisible(false);
        let data;
        if (props.data.type == 1) {
            data = strVal;
        } else if (props.data.type == 2) {
            data = multipleVal;
            sendAnswer(data);
        } else {
            data = tfVal;
            sendAnswer(tfVal);
        }
        props.setOptions();
    };

    const strOnchange = (e: any) => {
        setstrVal(e.target.value);
    }

    const multipleOnchange = (e: any) => {
        setmultipleVal(e.target.value);
    }

    const tfOnchange = (e: any) => {
        settfVal(e.target.value);
    }

    useEffect(() => {
        setTimeout(() => {
            setIsModalVisible(false);
            props.setOptions();
        }, props.data.deadline * 60000);
    }, [])

    useEffect(() => {
        console.log('interval');
        const interval = setInterval(() => {
            settimer(timer - 1);
            if (timer <= 0) {
                clearInterval(interval);
                setIsModalVisible(false);
                alert('제한시간이 완료되었습니다.');
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [timer])

    useEffect(() => {
        let min = Math.floor(timer / 60);
        let sec = timer % 60;
        if (min < 10) {
            setminStr(`0${min}`);
        } else {
            setminStr(min.toString());
        }
        if (sec < 10) {
            setsecStr(`0${sec}`);
        } else {
            setsecStr(sec.toString());
        }
    }, [timer])

    useEffect(() => {
    }, [])

    function renderContent() {
        if (props.data.type == 1) {
            return (
                <>
                    <Questions>정답 : </Questions>
                    <AnswerInput onChange={strOnchange} rows={2} placeholder="정답을 적어주세요" />
                </>
            )
        } else if (props.data.type == 2) {
            return (
                <>
                    <Questions>정답 : </Questions>
                    <Radio.Group onChange={multipleOnchange} value={multipleVal}>
                        <Radio value={1}>A</Radio>
                        <Radio value={2}>B</Radio>
                        <Radio value={3}>C</Radio>
                        <Radio value={4}>D</Radio>
                        <Radio value={5}>E</Radio>
                    </Radio.Group>
                </>
            );
        } else {
            return (
                <>
                    <Questions>정답 : </Questions>
                    <Radio.Group onChange={tfOnchange} value={tfVal}>
                        <Radio value={1}>O</Radio>
                        <Radio value={2}>X</Radio>
                    </Radio.Group>
                </>
            );
        }
    }

    return (
        <Modal
            title="Pop 퀴즈"
            visible={isModalVisible}
            closable={false}
            onOk={handleOk}
            okText="제출"
            wrapClassName={"quizRec"}
        >
            <TimerCnt>
                {minStr}:{secStr}
            </TimerCnt>
            {renderContent()}
        </Modal>
    )
}

export default Index