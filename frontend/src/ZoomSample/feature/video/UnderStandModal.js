import React from 'react'
import styled from 'styled-components'
import PropTypes from "prop-types";
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

// UnderStandModal.propTypes = {
//   visible: PropTypes.bool,
// }

// const UnderStandModal = (props) => {




//     return (
//         <>
//             <ModalOverlay visible={visible} />
//             <ModalWrapper
//         className={className}
//         onClick={maskClosable ? onMaskClick : null}
//         tabIndex="-1"
//         visible={visible}
//       >
//           <ModalInner tabIndex="0" className="modal-inner">
//           <div>
//             <div>
//           {children}
//           </div>
//               <br />
//               <div style={{marginTop:"1rem"}}>1.</div>
//               <div style={{marginTop:"1rem"}}>2.</div>
//               <div style={{marginTop:"1rem"}}>3.</div>
//               <div style={{marginTop:"1rem"}}>4.</div>
//               <div style={{marginTop:"1rem"}}>5.</div>
//               <div style={{marginTop:"1rem"}}>정답 번호 체크</div>
              
//           <div style={{display:"flex"}}>
//                 {closable && <OkBtn className="modal-ok" onClick={onSubmit}>확인</OkBtn>}
//                 {closable && <CloseBtn className="modal-close" onClick={close} >취소</CloseBtn>}
//           </div>
//           </div>
//         </ModalInner>
//       </ModalWrapper>
//         </>
//     )
// }

// export default UnderStandModal
        