import React from 'react';
import styled from 'styled-components';
import Button from '../../../Component/common/Button';
import { withRouter } from 'react-router';
import { useSelector } from 'react-redux';

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

const WriteActionButtons = ({ history }) => {
  const onPublish = () => {
    //axios post 부분 들어가야댐
  };

  const onCancel = () => {
    history.goBack();
  };

  return (
    <WriteAcitonButtonBlock>
      <StyledButton cyan onClick={onPublish}>
        공지사항 등록
      </StyledButton>
      <StyledButton onClick={onCancel}>취소</StyledButton>
    </WriteAcitonButtonBlock>
  );
};

export default withRouter(WriteActionButtons);
