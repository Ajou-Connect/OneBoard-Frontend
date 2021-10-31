import React from 'react';
import SideBar from './Component/Route';
import Header from './Component/Header';
import './App.scss';

const App = () => {
  return (
    <div className="App-style">
      <Header />
      <SideBar />
    </div>
  );
};
export default App;
