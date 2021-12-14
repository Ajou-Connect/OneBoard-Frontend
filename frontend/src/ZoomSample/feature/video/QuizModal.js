import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';
import { Radio } from 'antd';

const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 360px;
  max-width: 480px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px+ 20px;
  height: 500px;
  text-align: center;
`;
const CloseBtn = styled.button`
  height: 3rem;
  width: 100px;
  color: red;
  margin-left: auto;
  margin-right: 2rem;
  margin-top: 10px;
`;
const OkBtn = styled.button`
  height: 3rem;
  width: 100px;
  color: red;
  margin-left: auto;
  margin-right: 2rem;
  margin-top: 10px;
`;

QuizModal.propTypes = {
  visible: PropTypes.bool,
};

function QuizModal({
  className,
  onClose,
  maskClosable,
  closable,
  visible,
  children,
  lessonId,
  sessionId,
  lectureId,
  quizId,
}) {

  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");
  const [radioValue, setRadioValue] = useState(1);
  const user = JSON.parse(localStorage.userInfo);
  const userType = user.userType;


  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  const close = (e) => {
    if (onClose) {
      onClose(e);
    }
  };

  const onSubmit = (e) => {
    axios
      .post(
        `/lecture/${lectureId}/lesson/${lessonId}/live/quiz/professor`,
        {
          question: value,
          answer1:  value1,
          answer2: value2,
          answer3: value3,
          answer4: value4,
          answer5: value5,
          answer: radioValue,
        },
        { params: { session: `${sessionId}` } },
      )
      .then((res) => {
        console.log(res.data.data);
        const result = res.data.data;
        onClose(e);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const changeQ = (e) => {
    setValue(e.target.value)
  }
  const change1 = (e) => {
    setValue1(e.target.value)
  }
  const change2 = (e) => {
    setValue2(e.target.value)
  }
  const change3 = (e) => {
    setValue3(e.target.value)
  }
  const change4 = (e) => {
    setValue4(e.target.value)
  }
  const change5 = (e) => {
    setValue5(e.target.value)
  }
  
    const onChange = e => {
    console.log('radio checked', e.target.value);
    setRadioValue(e.target.value);
  };

  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper
        className={className}
        onClick={maskClosable ? onMaskClick : null}
        tabIndex="-1"
        visible={visible}
      >
        <ModalInner tabIndex="0" className="modal-inner">
          {userType === "T" ? (<div>
            <div>{children}</div>
            <br />
            <div style={{ marginTop: '1rem' }}>
              문제 출제 :  
              <input type="text" style={{ width: '70%'}}  onChange={changeQ}/>
            </div>
            <div style={{ marginTop: '1rem' }}>
              1. 
              <input type="text" style={{ width: '90%' }}  onChange={change1}/>
            </div>
            <div style={{ marginTop: '1rem' }}>
              2.
              <input type="text" style={{ width: '90%' }} onChange={change2}/>
            </div>
            <div style={{ marginTop: '1rem' }}>
              3.
              <input type="text" style={{ width: '90%' }} onChange={change3}/>
            </div>
            <div style={{ marginTop: '1rem' }}>
              4.
              <input type="text" style={{ width: '90%' }} onChange={change4}/>
            </div>
            <div style={{ marginTop: '1rem' }}>
              5.
              <input type="text" style={{ width: '90%' }} onChange={change5}/>
            </div>
            <div style={{ marginTop: '1rem' }}>정답 번호 체크</div>
                <Radio.Group onChange={onChange} value={radioValue}>
                  <Radio value={1}>1</Radio>
                  <Radio value={2}>2</Radio>
                  <Radio value={3}>3</Radio>
                  <Radio value={4}>4</Radio>
                  <Radio value={5}>5</Radio>
                </Radio.Group>
            <div style={{ display: 'flex' }}>
              {closable && (
                <OkBtn className="modal-ok" onClick={onSubmit}>
                  확인
                </OkBtn>
              )}
              {closable && (
                <CloseBtn className="modal-close" onClick={close}>
                  취소
                </CloseBtn>
              )}
            </div>
          </div>) : (<div>
              <div>{children}</div>
              <br />
            <div style={{ marginTop: '1rem' }}>
                문제 : {value}
              </div>  
            <div style={{ marginTop: '1rem' }}>
                1. {value1}
              </div>  
            <div style={{ marginTop: '1rem' }}>
                2. {value2}
              </div>  
            <div style={{ marginTop: '1rem' }}>
                3. {value3}
              </div>  
            <div style={{ marginTop: '1rem' }}>
                4. {value4}
              </div>  
            <div style={{ marginTop: '1rem' }}>
                5. {value5}
              </div>  
      </div>)
          
      }
        </ModalInner>
      </ModalWrapper>
    </>
  );
}

export default QuizModal;
