import React from 'react';
import LoginCheck from './Component/Login/LoginCheck';
import './App.scss';
import { Route } from 'react-router';
import Routes from '../src/Component/Routes';
import Main from './Pages/MainNav/Main';
import Editor from './Pages/LecturePages/Notice/NoticeEditor';
const App = () => {
  return (
    <div className="App-style">
      {/* <Route path="/main" component={Routes} />
      <Route path="/Login" component={LoginCheck} /> */}
      {/* <Route path="/" exact={true} component={Main} /> */}
      <Editor />
    </div>
  );
};
export default App;
