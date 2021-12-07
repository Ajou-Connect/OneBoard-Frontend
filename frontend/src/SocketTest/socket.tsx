import React, { useEffect, useState } from 'react';
import socketIOClient from "socket.io-client";
const ENDPOINT = 'http://127.0.0.1:4001';

const Socket = () => {
  const [response, setResponse] = useState('');

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on('FromAPI', (data:any) => {
      setResponse(data);
    });
  }, []);

  return (
    <div>
      it's <time dateTime={response}>{response}</time>
    </div>
  );
};

export default Socket;
