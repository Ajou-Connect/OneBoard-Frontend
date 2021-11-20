import React, { useEffect, useState } from 'react';
import moment from 'moment';
import axios from 'axios';
import palette from '../../../lib/styles/palette';
import Button from '../../../Component/common/Button';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'antd/dist/antd.css';
import { DatePicker, Space } from 'antd';

const { RangePicker } = DatePicker;
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

const ScoreInput = styled.input`
  margin: 5px 0px;
  border-radius: 3px;
  height: 31.6px;
  border: 1px solid #d9d9d9;
  padding: 0px 10px;
  &:focus {
    border: 1px solid #40a9ff;
    box-shadow: 0 0 0 2px #1890ff 20%;
    outline: 0;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const ListContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 15px;
  margin: 0 auto;
  width: 80%;
  box-shadow: 0 5px 5px 0 #eeeeee;
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

const WriteAssignment = ({ history, match }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [period, setPeriod] = useState('');
  const [fileUrl, setFileUrl] = useState('');
  const [exposeDt, setExposeDt] = useState('');
  const [score, setScore] = useState('');
  const lectureId = match.params.lectureId;
  const assignmentId = match.params.assignmentId;
  const user = JSON.parse(sessionStorage.userInfo);
  const userType = user.userType;
  const [assignmentScore, setAssignmentScore] = useState('');

  useEffect(() => {
    const fetchUpdateAssignment = async () => {
      try {
        await axios
          .get(`/lecture/${lectureId}/assignment/` + assignmentId)
          .then((res) => {
            const result = res.data.data;
            setTitle(result.title);
            setContent(result.content);
            setAssignmentScore(result.score);
            console.log(result);
          })
          .catch((e) => {
            console.log(e);
          });
      } catch (e) {
        console.log(e);
      }
    };
    fetchUpdateAssignment();
  }, []);

  const getTitle = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };

  const onChangePeriod = (e, dateString) => {
    setPeriod({
      ...period,
      start: dateString[0],
      end: dateString[1],
    });
  };

  const onSubmit = () => {
    console.log('title : ' + title);
    console.log('content : ' + content);

    axios
      .put(`/lecture/${lectureId}/assignment/` + assignmentId, {
        title: title,
        content: content,
        fileUrl: fileUrl,
        startDt: period.start,
        endDt: period.end,
        exposeDt: exposeDt,
        score: assignmentScore,
      })
      .then((res) => {
        console.log(res);
        console.log(score);
        return (window.location.href = `/Main/Lecture/${userType}/${lectureId}/Assignment`);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const onCancel = () => {
    history.goback();
  };

  const handleText = (editor) => {
    console.log(editor);
    setContent(editor);
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

  return (
    <Container>
      <hr
        style={{
          width: '100%',
          margin: '30px 0px',
          marginTop: '50px',
          display: 'block',
          borderColor: '#ffffff',
        }}
      />
      <ListContainer>
        <TitleInput onChange={getTitle} value={title} />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ paddingLeft: '5px', lineHeight: '31.6px' }}>과제 기한</div>
          <div>
            <RangePicker
              showTime={{
                hideDisabledOptions: true,
                defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('23:59:59', 'HH:mm:ss')],
              }}
              format="YYYY-MM-DD HH:mm:ss"
              onChange={onChangePeriod}
            />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', margin: '5px 0' }}>
          <div style={{ paddingLeft: '5px', lineHeight: '41.6px' }}>배점</div>
          <ScoreInput
            type="number"
            onChange={(e) => setScore(e.target.value)}
            value={assignmentScore}
          />
        </div>
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
            과제 및 시험 수정
          </StyledButton>
          <StyledButton onClick={onCancel}>취소</StyledButton>
        </WriteAcitonButtonBlock>
      </ListContainer>
    </Container>
  );
};

export default withRouter(WriteAssignment);
