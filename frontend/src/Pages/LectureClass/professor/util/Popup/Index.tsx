import React, { useState } from 'react';
import { Modal, Button, Radio } from 'antd';
import './style.css'

interface PopProps {
    setOptions: Function
}

function Index(props: PopProps) {

    const [isModalVisible, setIsModalVisible] = useState(true);
    const [value, setValue] = React.useState(1);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
        props.setOptions(value);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onChange = (event: any) => {
        setValue(event.target.value);
    };

    return (
        <Modal
            title="옵션 설정"
            visible={isModalVisible}
            closable = {false}
            onOk={handleOk}
            okText="확인"
        >
            <ul>
                <li>
                    <span>자막 언어</span>
                    <Radio.Group onChange={onChange} value={value}>
                        <Radio value={1}>Korean</Radio>
                        <Radio value={2}>English</Radio>
                    </Radio.Group>
                </li>
            </ul>
        </Modal>
    )
}

export default Index