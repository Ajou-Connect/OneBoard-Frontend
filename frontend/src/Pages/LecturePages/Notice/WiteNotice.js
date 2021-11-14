import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import palette from '../../../lib/styles/palette';
import Button from '../../../Component/common/Button';
import { withRouter } from 'react-router';
import moment from 'moment';
//나중에 match추가
// commit for reset 

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

const QuillWrapper = styled.div`
  .ql-editor {
    padding: 0;
    min-height: 320px;
    font-size: 1.125rem;
    line-height: 1.5;
  }
  .ql-editor.ql-blank::before {
    left: 0px;
  }
`;

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

const WriteNotice = ({ history }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState();
  const exposeDt = moment().format('YYYY-MM-DD HH:mm:ss');
  const getTitle = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };

  const onSubmit = () => {
    /// 무언가 들어갈거
    console.log('title : ' + title);
    console.log('content : ' + content);
    axios
      .post('/lecture/1/notice', {
        title: title,
        content: content,
        exposeDt: exposeDt,
      })
      .then((res) => {
        console.log(res);
        return (window.location.href = `/Main/Lecture/LecturePage1/Notice`);
      })
      .catch((res) => {
        console.log('Error : ' + res);
      });
  };

  const onCancel = () => {
    history.goBack();
  };

  return (
    <div>
      <TitleInput onChange={getTitle} placeholder="제목" />
      <CKEditor
        editor={ClassicEditor}
        data=""
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log('Editor is ready to use!', editor);
          editor.editing.view.change((writer) => {
            writer.setStyle('height', '300px', editor.editing.view.document.getRoot());
          });
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setContent(data);
          console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log('Blur.', editor);
        }}
        onFocus={(event, editor) => {
          console.log('Focus.', editor);
        }}
      />
      <WriteAcitonButtonBlock>
        <StyledButton cyan onClick={onSubmit}>
          공지사항 등록
        </StyledButton>
        <StyledButton onClick={onCancel}>취소</StyledButton>
      </WriteAcitonButtonBlock>
    </div>
  );
};

export default withRouter(WriteNotice);
