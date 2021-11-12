import React from 'react';
import EditorContainer from './EditorContainer';
import Responsive from '../../../Component/common/Responsive';
import TagBox from './NoticeTagBox';
import WriteActionButtons from './NoticeWriteAction';

const NoticeWrite = () => {
  return (
    <Responsive>
      <EditorContainer />
      <TagBox />
      <WriteActionButtons />
    </Responsive>
  );
};

export default NoticeWrite;
