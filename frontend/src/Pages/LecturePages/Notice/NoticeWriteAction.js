import React from 'react';
import styled from 'styled-components';
import Button from '../../../Component/common/Button';

const WriteAcitonButtonBlock = styled.div`
  margin-top: 1rem;
  margin-bottom: 3rem;
  button + button {
    margin-left: 0.5rem;
  }
`;

const StyledButton = styled(Button)`
  height: 2.125rem;
  & + & {
    margin-left: 0.5rem;
  }
`;

const WriteActionButtons = ({ onCancel, onPublish }) => {
  return (
    <WriteAcitonButtonBlock>
      <StyledButton cyan onClick={onPublish}>
        공지사항 등록
      </StyledButton>
      <StyledButton onClick={onCancel}>취소</StyledButton>
    </WriteAcitonButtonBlock>
  );
};

export default WriteActionButtons;
