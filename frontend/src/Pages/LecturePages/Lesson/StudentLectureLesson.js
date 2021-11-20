import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import palette from '../../../lib/styles/palette';
import Button from '../../../Component/common/Button';

const TitleInput = styled.input`
  font-size: 2rem;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[4]};
  margin-bottom: 2rem;
  margin-top: 10px;
  width: 100%;
`;

const WriteAcitonButtonBlock = styled.div`
  margin-top: 3rem;
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

const StudentLectureLesson = () => {
  return (
    <div>
      <div>student</div>
    </div>
  );
};

export default StudentLectureLesson;
