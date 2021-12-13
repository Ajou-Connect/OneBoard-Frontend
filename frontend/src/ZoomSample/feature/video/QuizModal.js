import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import axios from "axios";

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
`

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
`

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
  height:500px;
  text-align: center;
`
const CloseBtn = styled.button`
  height: 3rem;
  width:100px;
  color: red;
  margin-left: auto;
  margin-right: 2rem;
  margin-top: 150px;
`
const OkBtn = styled.button`
  height: 3rem;
  width:100px;
  color: red;
  margin-left: auto;
  margin-right: 2rem;
  margin-top: 150px;
`

QuizModal.propTypes = {
  visible: PropTypes.bool,
}

function QuizModal({ className,
  onClose,
  maskClosable,
  closable,
  visible,
  children,
  lessonId,
  sessionId,
  lectureId,
  }) {
  
   const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e)
    }
  }

  const close = (e) => {
    if (onClose) {
      onClose(e)
    }
  }

  const onSubmit = () => {
     axios.post(`/lecture/${lectureId}/lesson/${lessonId}/live/quiz/professor`, {
      "question": "김동현",
      "answer1": "test1",
      "answer2": "test1",
      "answer3": "test1",
      "answer4": "test1",
      "answer5": "test1",
      "answer": 1,
      
    }, { params: { session: `${sessionId}` } })
      .then((res) => {
        console.log(res.data.data);
        const result = res.data.data
      })
      .catch((error) => {
      console.log(error);
      
    })
  }

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
          <div>
            <div>
          {children}
          </div>
              <br />
              <div style={{marginTop:"1rem"}}>1.</div>
              <div style={{marginTop:"1rem"}}>2.</div>
              <div style={{marginTop:"1rem"}}>3.</div>
              <div style={{marginTop:"1rem"}}>4.</div>
              <div style={{marginTop:"1rem"}}>5.</div>
              <div style={{marginTop:"1rem"}}>정답 번호 체크</div>
              
          <div style={{display:"flex"}}>
                {closable && <OkBtn className="modal-ok" onClick={onSubmit}>확인</OkBtn>}
                {closable && <CloseBtn className="modal-close" onClick={close} >취소</CloseBtn>}
          </div>
          </div>
        </ModalInner>
      </ModalWrapper>
        </>
    )
}

export default QuizModal;
