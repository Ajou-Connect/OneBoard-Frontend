import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
<<<<<<< HEAD:frontend/src/index.tsx
import Header from './Header';
=======
>>>>>>> 185e55f45ad0ed38efe10fc20ded0506074e7cd4:frontend/src/index.js
import axios from 'axios';

axios.defaults.baseURL = 'https://oneboard.connect.o-r.kr:8080';
// axios.defaults.withCredentials = true;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
