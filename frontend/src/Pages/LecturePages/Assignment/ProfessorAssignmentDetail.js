import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

//여기서의 match는 각각의 assignment에 대한 렌더링을 위해서
const ProfessorAssignmentDetail = ({ match }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [score, setScore] = useState('');
  const [startDt, setStartDt] = useState('');
  const [endDt, setEndDt] = useState('');

  return (
    <div>
      <div>something</div>
    </div>
  );
};

export default ProfessorAssignmentDetail;
