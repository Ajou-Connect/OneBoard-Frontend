import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import palette from '../../../lib/styles/palette';
import moment from 'moment';
import { DatePicker, TimePicker } from 'antd';
import 'antd/dist/antd.css';
import { Radio } from 'antd';
import Button from '../../../Component/common/Button';

const WriteAcitonButtonBlock = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-left: 1rem;
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

const Title = styled.div`
  font-size: 30px;
  margin-left: 15px;
  margin-top: 15px;
  border-bottom: 1px solid #f7f9fc;
  height: 40px;
  line-height: 40px;
  font-style: italic;
  text-align: left;
`;

const TitleInput = styled.input`
  font-size: 1rem;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[4]};
  margin-bottom: 2rem;
  margin-top: 10px;
  width: 70%;
`;
const RoomInput = styled.input`
  font-size: 1rem;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[4]};
  margin-bottom: 2rem;
  margin-top: 10px;
  width: 70%;
`;
const MeetInput = styled.input`
  font-size: 1rem;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[4]};
  margin-bottom: 2rem;
  margin-top: 10px;
  width: 70%;
`;

const GenerateLesson = ({ match }) => {
  const lectureId = match.params.lectureId;
  const [title, setTitle] = useState('');
  const [period, setPeriod] = useState('');
  const [lessonFile, setLessonFile] = useState('등록된 강의노트가 없습니다');
  const [radioValue, setRadioValue] = useState(0);
  const [room, setRoom] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const [meetingId, setMeetingId] = useState(null);
  const [time, setTime] = useState('');

  const getTitle = (e) => {
    setTitle(e.target.value);
  };

  const getVideoUrl = (e) => {
    setVideoUrl(e.target.value);
  };

  const getRoom = (e) => {
    setRoom(e.target.value);
  };

  const getMeetingId = (e) => {
    setMeetingId(e.target.value);
  };

  const onChangePeriod = (e, dateString) => {
    setPeriod(dateString);
  };

  const onFileChange = (e) => {
    e.preventDefault();
    console.log(e.target.files);
    setLessonFile(e.target.files[0]);
  };

  const onChangeRadio = (e) => {
    setRadioValue(e.target.value);
  };

  const onCancel = () => {
    return (window.location.href = `/Main/Lecture/${lectureId}/Lesson`);
  };

  const onTimeChange = (time, timeString) => {
    setTime(timeString);
  };

  const onSubmit = (e) => {
    parseInt(radioValue);
    const date = period + ' ' + time;
    const formData = new FormData();
    formData.append('file', lessonFile);
    formData.append('title', title);
    formData.append('date', date);
    formData.append('type', radioValue);
    formData.append('videoUrl', videoUrl);
    formData.append('room', room);
    formData.append('meetingId', meetingId);

    axios
      .post(`/lecture/${lectureId}/lesson`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((res) => {
        return (window.location.href = `/Main/Lecture/${lectureId}/Lesson`);
      })

      .catch((e) => {
        console.log(e);
        alert('수업 생성에 실패했습니다. 다시 작성 후 시도해주세요');
        return (window.location.href = `/Main/Lecture/${lectureId}/Lesson/GenerateLesson`);
      });
  };

  return (
    <div>
      <Title>수업 생성</Title>
      <hr style={{ width: '100%', margin: '10px 0px', display: 'block', borderColor: '#ffffff' }} />
      <div style={{ display: 'flex' }}>
        <div
          style={{
            fontSize: '1rem',
            paddingBottom: '0.5rem',
            marginBottom: '2rem',
            marginTop: '15px',
            marginRight: '15px',
            fontWeight: 'bold',
            marginLeft: '15px',
          }}
        >
          수업 제목 :
        </div>
        <TitleInput onChange={getTitle} placeholder="수업 제목을 작성해주세요" />
      </div>
      <div style={{ display: 'flex' }}>
        <div
          style={{
            fontSize: '1rem',
            paddingBottom: '0.5rem',
            marginBottom: '2rem',
            marginTop: '15px',
            marginRight: '15px',
            fontWeight: 'bold',
            marginLeft: '15px',
          }}
        >
          강의 날짜 선택
        </div>
        <div>
          <DatePicker format="YYYY-MM-DD" onChange={onChangePeriod} style={{ margin: '10px' }} />
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div
          style={{
            fontSize: '1rem',
            paddingBottom: '0.5rem',
            marginBottom: '2rem',
            marginTop: '15px',
            marginRight: '15px',
            fontWeight: 'bold',
            marginLeft: '15px',
          }}
        >
          강의 시간 선택
        </div>
        <div>
          <TimePicker
            onChange={onTimeChange}
            defaultOpenValue={moment('00:00:00', 'HH:mm:ss')}
            style={{ margin: '10px' }}
          />
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div
          style={{
            fontSize: '1rem',
            paddingBottom: '0.5rem',
            marginBottom: '2rem',
            marginTop: '15px',
            marginRight: '15px',
            fontWeight: 'bold',
            marginLeft: '15px',
          }}
        >
          강의 노트 업로드
        </div>
        <div>
          <form name="noteFile" encType="multipart/form-data">
            <input
              type="file"
              onChange={onFileChange}
              style={{ height: '41.6px', padding: '5px', margin: '10px', cursor: 'pointer' }}
            />
          </form>
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div
          style={{
            fontSize: '1rem',
            paddingBottom: '0.5rem',
            marginBottom: '2rem',
            marginTop: '15px',
            marginRight: '15px',
            fontWeight: 'bold',
            marginLeft: '15px',
          }}
        >
          수업 타입을 선택해주세요
        </div>
        <div style={{ margin: '15px' }}>
          <Radio.Group onChange={onChangeRadio} value={radioValue}>
            <Radio value={1}>비대면 실시간 강의</Radio>
            <Radio value={2}>대면 강의</Radio>
            <Radio value={0}>녹화 강의</Radio>
          </Radio.Group>
        </div>
      </div>
      <div>
        {radioValue === 1 ? (
          <div style={{ fontSize: '1rem', marginLeft: '50px', fontWeight: 'bold' }}>
            zoom session 생성하기
            <TitleInput onChange={getMeetingId} placeholder="zoom link를 입력해주세요" />
          </div>
        ) : radioValue === 2 ? (
          <div style={{ fontSize: '1rem', marginLeft: '50px', fontWeight: 'bold' }}>
            대면 강의실 정보를 입력 해주세요 :
            <RoomInput onChange={getRoom} placeholder="강의실 정보를 입력해주세요" />
          </div>
        ) : (
          <div style={{ fontSize: '1rem', marginLeft: '50px', fontWeight: 'bold' }}>
            녹화강의 링크를 입력 해주세요 :
            <MeetInput onChange={getVideoUrl} placeholder="녹화강의 링크를 입력해 주세요" />
          </div>
        )}
        <hr
          style={{ width: '100%', margin: '10px 0px', display: 'block', borderColor: '#ffffff' }}
        />
      </div>
      <WriteAcitonButtonBlock>
        <StyledButton cyan onClick={onSubmit}>
          수업 생성
        </StyledButton>
        <StyledButton cyan onClick={onCancel}>
          뒤로가기
        </StyledButton>
      </WriteAcitonButtonBlock>
    </div>
  );
};

export default GenerateLesson;
