import React from 'react';
import Editor from './NoticeEditor';
import Responsive from '../../../Component/common/Responsive';
import TagBox from './NoticeTagBox';

const NoticeWrite = () => {
  return (
    <Responsive>
      <Editor />
      <TagBox />
    </Responsive>
  );
};

export default NoticeWrite;
