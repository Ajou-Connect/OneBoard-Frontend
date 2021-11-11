import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import moment from 'moment';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

const Container = styled.div`
  width: 97%;
  display: block;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  padding: 0 20px;
`;
const Title = styled.div`
  font-size: 30px;
  border-bottom: 1px solid #f7f9fc;
  height: 40px;
  line-height: 40px;
  font-style: italic;
`;
const SubTitle = styled.div`
  float: left;
  margin-top: 3px;
  margin-right: 20px;
  color: #8b8b8b;
  font-size: 13px;
  font-weight: 400;
`;
const Box = styled.div`
  width: 100%;
  display: block;
  margin: 0px 5px 10px 0px;
  padding: 10px;
  background: white;
  border-radius: 5px;
  box-shadow: 0px 2px 3px 1px #e0e0e0;
  position: relative;
`;
const WriteBtn = styled.a`
  display: inline-block;
  float: right;
  font-size: 16px;
  padding: 5px;
  background-color: ${(props) => props.theme.color.blue};
  color: white;
  border-radius: 5px;
`;
const SmallBtn = styled.button`
  font-size: 12px;
  padding: 5px;
  margin: 1px;
  background-color: #ececec;
  color: #3e3e3e;
  border-radius: 5px;
  &:hover {
    background-color: #bfbfbf;
  }
`;
const NoticeTitle = styled.div`
  display: block;
  margin: 10px 0px 10px 10px;
  color: #233044;
  font-size: 16px;
  font-weight: 700;
`;
const NoticeContent = styled.div`
  width: 78%;
  display: block;
  font-size: 14px;
  margin: 10px 0px 10px 10px;
  border-bottom: 1px solid #bfbfbf;
`;
const NoticeMenuButton = styled.button`
  position: absolute;
  height: 30px;
  width: 30px;
  top: 10px;
  right: 10px;
  border-radius: 75px;
  &:hover {
    background-color: #f3f3f3;
  }
`;
const NoticeMenuBox = styled.div`
  position: absolute;
  top: 40px;
  right: 10px;
`;
const Line = styled.div`
  position: absolute;
  height: 100%;
  width: 1px;
  top: 0px;
  right: 20%;
  background-color: #bfbfbf;
`;

const ShowAll = ({ noticeList, user }) => {
  return <div>show Notice</div>;
};

const DisplayNotices = ({ lectureId, noticeList, user }) => {
  const [isShowing, setIsShowing] = useState(false);
  const isProfessor = user.type === 'P';
  const deleteNotice = (e, noticeId) => {
    const url = '/lecture/' + lectureId + '/notice/' + noticeId;
    axios
      .delete(url)
      .then((response) => {
        const result = response.data;
        if (result.SUCCESS) {
          alert('공지사항이 삭제되었습니다.');
          //  나중에 할때
          //  return(window.location.href) = `/main/Lecture/${lectureId}/Notice`
          return (window.location.href = `/main/Lecture/LecturePage1/Notice`);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateNotice = (e, noticeId) => {
    return (window.location.href = `/main/Lecture/${lectureId}/Notice/${noticeId}`);
  };

  return (
    <div>
      {/* noticeList.length === 0 ? (
      <div
        style={{ textAlign: 'center', marginTop: '300px', fontSize: '30px', fontStyle: 'italic' }}
      >
        등록된 공지 사항이 없습니다.
      </div>
      ) : ( noticeList.map((value,index)=>(
      <Box>
        <NoticeTitle>{value.title}</NoticeTitle>
      </Box>
      )) ) */}
    </div>
  );
};
