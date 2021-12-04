import React, { useEffect, useState } from 'react';
import moment from 'moment';
import axios from 'axios';
import palette from '../../../lib/styles/palette';
import Button from '../../../Component/common/Button';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

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

const UpdateNotice = ({ history, match }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const exposeDt = moment().format('YYYY-MM-DD HH:mm:ss');

  const noticeId = match.params.noticeId;
  const lectureId = match.params.lectureId;

  console.log(lectureId);
  useEffect(() => {
    console.log('useEffect에서 log : ' + noticeId);
    const fetchUpdateNotice = async () => {
      try {
        setError(null);
        setLoading(true);

        await axios
          .get(`/lecture/${lectureId}/notice/` + noticeId)
          .then((res) => {
            const result = res.data.data;
            console.log('noticeID에 해당하는 notice data : ' + result);
            setTitle(result.title);
            setContent(result.content);
          })
          .catch((e) => {
            console.log(e);
          });
        setLoading(false);
      } catch (e) {
        setError(e);
        console.log(e);
      }
    };
    fetchUpdateNotice();
  }, [noticeId]);

  const getTitle = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };

  const onSubmit = () => {
    /// 무언가 들어갈거
    console.log('title : ' + title);
    console.log('content : ' + content);
    axios
      .put(`/lecture/${lectureId}/notice/` + noticeId, {
        title: title,
        content: content,
        exposeDt: exposeDt,
      })
      .then((res) => {
        console.log(res);
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
    <div>
      <TitleInput onChange={getTitle} value={title} />
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
          공지사항 수정
        </StyledButton>
        <StyledButton onClick={onCancel}>취소</StyledButton>
      </WriteAcitonButtonBlock>
    </div>
  );
};

export default withRouter(UpdateNotice);
