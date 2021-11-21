import React, { useEffect, useState } from 'react';
import LectureSidebar from '../LectureSidebar';
import './LecturePlan.scss';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  width: 97%;
  display: block;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  padding: 0 20px;
  padding-bottom: 30px;
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
const NoteBox = styled.div`
  display: block;
  width: 100%;
  margin: 0 auto;
  padding: 10px;
`;
const NoteTitle = styled.div`
  display: block;
  margin: 10px 0px 0px 10px;
  color: #233044;
  font-size: 16px;
  font-weight: 700;
`;
const NoteContent = styled.div`
  width: 78%;
  display: block;
  font-size: 14px;
  margin: 0px 0px 10px 10px;
  // border-bottom : 1px solid #BFBFBF;
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
const NoteMenuButton = styled.button`
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
const NoteMenuBox = styled.div`
  position: absolute;
  top: 40px;
  right: 10px;
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

const LecturePlan = ({ match }) => {
  const lectureId = match.params.lectureId;
  const user = JSON.parse(sessionStorage.userInfo);
  const userType = user.userType;
  const [isProfessor, setIsProfessor] = useState(false);

  setIsProfessor(userType)
  const FileURL = `http://115.85.182.194:8080/lecture/${lectureId}/plan`;

  return (
    <div className="plan">
      <nav className="lecture-menu">
        <LectureSidebar lectureId={lectureId} />
      </nav>
      <div className="plan-main">
        {isProfessor === "T" ? (
          
            <div style={{marginLeft:"100px"}}>
        <iframe src="https://docs.google.com/gview?embedded=true&url=http://115.85.182.194:8080/lecture/2/plan" style={{width:"80%",height:"800px",marginTop:"50px"}} />
      </div>
          
        ) : (<div>qwr</div>)}
      </div>
      </div>
  );
};

export default LecturePlan;
