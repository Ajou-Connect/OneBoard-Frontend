import React from "react";
// import Nav from "./Sidebar/Nav";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Home from "./Pages/Home";
// import Profile from "./Pages/Profile";
// import MenuLecture from "./Pages/MenuLecture";
import Header from "./Component/Header";
import SideBar from "./Component/SideBar";
import "./App.css";

const App = () => {
  return (
    <div className="App-style">
      <Header />
      <SideBar />
    </div>
  );
};
export default App;
