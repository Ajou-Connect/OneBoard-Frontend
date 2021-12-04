import React from 'react';
import LoginCheck from './Component/Login/LoginCheck';
import './App.scss';
import { Route } from 'react-router';
import Routes from './Component/Routes';
import Main from './Pages/MainNav/Main';
import ClassRoute from './Component/ClassRoute';


const App = () => {
  return (
    <div className="App-style">
      <Route path="/main" component={Routes} />
      <Route path="/class" component={ClassRoute} />
      <Route path="/Login" component={LoginCheck} />
      <Route path="/" exact={true} component={Main} />
    </div>
  );
};
export default App;