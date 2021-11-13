import React from 'react';
import EditorContainer from './EditorContainer';
import Responsive from '../../../Component/common/Responsive';
import WriteActionButtons from './NoticeWriteAction';

const NoticeWrite = () => {
  return (
    <Responsive>
      <EditorContainer />
      <WriteActionButtons />
    </Responsive>
  );
};

export default NoticeWrite;
