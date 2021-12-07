import React, { useState } from 'react';
import moment from 'moment';
import axios from 'axios';
import palette from '../../../lib/styles/palette';
import Button from '../../../Component/common/Button';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';

const TitleInput = styled.input`
  font-size: 2rem;
  outline: none;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  border: none;
  border-radius: 5px;
  border-bottom: 1px solid ${palette.gray[4]};
  margin-bottom: 2rem;
  margin-top: 10px;
  width: 100%;
`;

const WriteAcitonButtonBlock = styled.div`
  margin-top: 3rem;
  margin-bottom: 5rem;
  display: flex;
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
const Container = styled.div`
  width: 97%;
  display: block;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  padding: 0 20px;
  margin-bottom: 50px;
`;

const WriteNotice = ({ history, match }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [exposeDt, setExposeDt] = useState('');
  const lectureId = match.params.lectureId;
  const { RangePicker } = DatePicker;

  const onChange = (value, dateString) => {
    console.log(value);
    console.log(dateString);
    setExposeDt(dateString);
  };

  const onOk = (value) => {
    console.log(value);
  };

  const getTitle = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };

  const onSubmit = () => {
    /// 무언가 들어갈거
    console.log('title : ' + title);
    console.log('content : ' + content);

    axios
      .post(`/lecture/${lectureId}/notice`, {
        title: title,
        content: content,
        exposeDt: exposeDt,
      })
      .then((res) => {
        console.log(res);
        //LectureId 넣어줘야됨
        return (window.location.href = `/Main/Lecture/${lectureId}/Notice`);
      })
      .catch((res) => {
        console.log('Error : ' + res);
      });
  };

  const onCancel = () => {
    history.goBack();
  };

  const modules = {
    toolbar: [
      //[{ 'font': [] }],
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      ['link', 'image'],
      [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
      ['clean'],
    ],
  };

  const format = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'align',
    'color',
    'background',
  ];

  const handleText = (editor) => {
    console.log(editor);
    setContent(editor);
  };

  return (
    <Container>
      <TitleInput onChange={getTitle} placeholder="제목" />
      <div style={{ display: 'flex' }}>
        <div style={{ fontWeight: 'bold', fontSize: '1rem', marginRight: '1rem' }}>개시 날짜 :</div>{' '}
        <DatePicker showTime onChange={onChange} onOk={onOk} />
      </div>
      <br />
      <div style={{ backgroundColor: 'white' }}>
        <ReactQuill
          style={{ height: '650px' }}
          theme="snow"
          modules={modules}
          formats={format}
          value={content}
          onChange={(content, delta, source, editor) => handleText(editor.getHTML())}
        />

        <WriteAcitonButtonBlock>
          <StyledButton cyan onClick={onSubmit}>
            공지사항 등록
          </StyledButton>
          <StyledButton onClick={onCancel}>취소</StyledButton>
        </WriteAcitonButtonBlock>
      </div>
    </Container>
  );
};

export default withRouter(WriteNotice);
