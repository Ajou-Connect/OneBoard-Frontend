import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import palette from '../../../lib/styles/palette';
import moment from 'moment';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import { Radio } from 'antd';
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

const Btn = styled.button`
  font-size: 2px;
  padding: 5px;
  margin-right: 10px;
  background-color: rgba(215, 226, 185, 0.596);
  color: #3e3e3e;
  border-radius: 7px;
  &:hover {
    background-color: #bfbfbf;
  }
`;

const WriteBtn = styled.button`
  font-size: 12px;
  padding: 5px;
  margin-left: 50px;
  background-color: #ececec;
  color: #3e3e3e;
  border-radius: 5px;
  &:hover {
    background-color: #bfbfbf;
  }
`;

const TabletrColor = styled.tr`
  &:nth-child(even) {
    background: #f7f9fc;
  }
`;

const GenerateLesson = ({ match }) => {
  const lectureId = match.params.lectureId;
  const [title, setTitle] = useState('');
  const [period, setPeriod] = useState('');
  const [lessonFile, setLessonFile] = useState('');
  const [radioValue, setRadioValue] = useState(0);
  const [room, setRoom] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const [meetingId, setMeetingId] = useState(null);
  const [note, setNote] = useState('');
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

  const getFile = (e) => {
    console.log(e.target);
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    formData.append('fileName', e.target.files[0].name);
    setLessonFile(formData);
    console.log(formData);
  };

  const onChangeRadio = (e) => {
    setRadioValue(e.target.value);
  };

  const onSubmit = () => {
    parseInt(radioValue);
    setNote('test file');
    axios
      .post(`/lecture/${lectureId}/lesson`, {
        title: title,
        date: period,
        note: '12424',
        type: radioValue,
        room: room,
        meetingId: meetingId,
        videoUrl: videoUrl,
      })
      .then((res) => {
        console.log(res.data);
        console.log(title);
        console.log(period);
        console.log(note);
        console.log(radioValue);
        console.log(room);
        console.log(meetingId);
        console.log(videoUrl);

        return (window.location.href = `/Main/Lecture/${lectureId}/Lesson`);
      })

      .catch((e) => {
        console.log(e);
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
          강의 날짜 / 수업 시작 시간 선택
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
          강의 노트 업로드
        </div>
        <div>
          <input
            type="file"
            onChange={getFile}
            style={{ height: '41.6px', padding: '5px', margin: '10px', cursor: 'pointer' }}
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
          수업 타입을 선택해주세요
        </div>
        <div style={{ margin: '15px' }}>
          <Radio.Group onChange={onChangeRadio} value={radioValue}>
            <Radio value={2}>비대면 실시간 강의</Radio>
            <Radio value={1}>대면 강의</Radio>
            <Radio value={0}>녹화 강의</Radio>
          </Radio.Group>
        </div>
      </div>
      <div>
        {radioValue === 2 ? (
          <div style={{ fontSize: '1rem', marginLeft: '50px', fontWeight: 'bold' }}>
            zoom session link를 입력 해주세요 :
            <TitleInput onChange={getMeetingId} placeholder="zoom link를 입력해주세요" />
          </div>
        ) : radioValue === 1 ? (
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
      <WriteBtn onClick={onSubmit}>수업 생성하기</WriteBtn>
    </div>
  );
};

export default GenerateLesson;
