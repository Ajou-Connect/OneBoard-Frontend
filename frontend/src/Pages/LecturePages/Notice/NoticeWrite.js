import React from 'react';
import EditorContainer from './EditorContainer';
import Responsive from '../../../Component/common/Responsive';
import WriteActionButtons from './NoticeWriteAction';
import TagBoxContainer from './NoticeTagBoxContainer';

const NoticeWrite = () => {
  return (
    <Responsive>
      <EditorContainer />
      <TagBoxContainer />
      <WriteActionButtons />
    </Responsive>
  );
};

export default NoticeWrite;
