import React from 'react';
import ReactLoading from 'react-loading';
import styled from 'styled-components';

const Cnt = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loading = ({ type, color }) => (
  <Cnt>
    <ReactLoading type={type} color={color} height={'10%'} width={'10%'} />
  </Cnt>
);

export default Loading;
