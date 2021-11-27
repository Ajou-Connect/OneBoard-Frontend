import React, { useState } from 'react';
import axios from 'axios'
import './Popup.css'
import Set from './Set'
import { Modal , Button, InputNumber, Radio} from "antd";


interface PopProps {
    setOptions: Function
    socket: any
    type: number
}

function Popup(props: PopProps) {
    const socket = props.socket;
    const [isModalVisible, setIsModalVisible] = useState(true);
    const [value, setValue] = React.useState(1);
    const [html_, sethtml_] = useState<Array<any>>([]);
    const [cnt, setcnt] = useState<number>(1);
    const [time, settime] = useState(1);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
        axios.post('/api/quiz/create', {
            name: "quiz",
            subjectId: 2,
            answerSheets: [
                {
                    question: "",
                    answer: ""
                }
            ],
            type: props.type
        }).then(res => {
            const obj = {
                purpose: 'survey',
                type: props.type,
                deadline: time,
                id : res.data.quiz._id
            }
            props.setOptions(time, obj);
            socket.emit('quiz', obj);
        })
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        props.setOptions();
    };

  

    return (
           <Modal
            title="퀴즈 출제"
            visible={isModalVisible}
            onCancel={handleCancel}
            onOk={handleOk}
            okText="확인"
            wrapClassName={"quiz"}
        >
            <div className="deadContainer">
                <div>제한시간을 입력해주세요!</div>
                <div className="timeContainer">
                    <InputNumber style={{ display: 'block' }} min={1} max={60} defaultValue={1} onChange={(value: any) => {
                        settime(value);
                    }} />
                    <span>분</span>
                </div>
            </div>
        </Modal>
    )
}

export default Popup