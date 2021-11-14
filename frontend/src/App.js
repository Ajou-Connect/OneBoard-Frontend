import React from 'react';
// import LoginCheck from './Component/Login/LoginCheck';
// import './App.scss';
// import { Route } from 'react-router';
// import Routes from '../src/Component/Routes';
// import Main from './Pages/MainNav/Main';
import { PDFDownloadLink } from '@react-pdf/renderer';
import MyDoc from './Pages/LecturePages/Plan/PdfTest';

const App = () => {
  return (
    <div className="App-style">
      {/* <Route path="/main" component={Routes} />
      <Route path="/Login" component={LoginCheck} />
      <Route path="/" exact={true} component={Main} /> */}
      <PDFDownloadLink document={<MyDoc />} fileName="somename.pdf">
        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
      </PDFDownloadLink>
    </div>
  );
};
export default App;
