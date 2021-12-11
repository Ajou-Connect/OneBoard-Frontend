import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import ZoomContext from "../src/ZoomSample/context/zoom-context";
import ZoomVideo from "@zoom/videosdk";

axios.defaults.baseURL = 'https://oneboard.connect.o-r.kr:8080';
// axios.defaults.withCredentials = true;
// commit

const zmClient = ZoomVideo.createClient();
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ZoomContext.Provider value={zmClient}>
        <App />
      </ZoomContext.Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
