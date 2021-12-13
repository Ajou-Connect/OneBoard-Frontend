import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';

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
  height: 300px;
  text-align: center;
`;
const CloseBtn = styled.button`
  height: 3rem;
  width: 100px;
  font-weight: bold;
  font-size: 1.3rem;
  margin-left: auto;
  margin-right: 2rem;
  margin-top: 150px;
`;
const OkBtn = styled.button`
  height: 3rem;
  width: 100px;
  font-weight: bold;
  font-size: 1.3rem;
  margin-left: auto;
  margin-right: 2rem;
  margin-top: 150px;
`;

UnderStandModal.propTypes = {
  visible: PropTypes.bool,
};

function UnderStandModal({
  className,
  onClose,
  maskClosable,
  closable,
  visible,
  children,
  lessonId,
  sessionId,
  lectureId,
  underStandId,
}) {
  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  const onSubmit = (e, response) => {
    console.log(sessionId);
    console.log(underStandId);
    const resp = parseInt(response);
    axios
      .post(
        `/lecture/${lectureId}/lesson/${lessonId}/live/understanding/120/student`,
        {
          response: resp,
        },
        { params: { session: `${sessionId}` } },
      )
      .then((res) => {
        console.log(res);
        const result = res.data.data;
        onClose(e);
      })
      .catch((error) => {
        console.log(error);
      });
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
          <div>
            <div style={{ fontSize: '1rem', fontWeight: 'bold' }}>{children}</div>
            <br />
            수업에 대해 이해가 되었나요?
            <div style={{ display: 'flex' }}>
              {closable && (
                <OkBtn className="modal-ok" onClick={(e) => onSubmit(e, 1)}>
                  o
                </OkBtn>
              )}
              {closable && (
                <OkBtn className="modal-ok" onClick={(e) => onSubmit(e, 0)}>
                  x
                </OkBtn>
              )}
            </div>
          </div>
        </ModalInner>
      </ModalWrapper>
    </>
  );
}

export default UnderStandModal;
