import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Dashboard from './Components/Dashboard';
import Request from './Components/request';
import Status from './Components/status';
import Profile from './Components/profile';
import Logout from './Components/logout';
import Navbar from './Components/navbar/navbar';
import Feedback from './Components/Feedback';
import Complaint from './Components/Complaint';
import AFeedback from './Components/AFeedback';







const routing = (
  <Router>
    <Navbar/>
    <Routes>
     
      <Route path="/" element={<App />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Request" element={<Request />} />
      <Route path="/Status" element={<Status />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Feedback" element={<Feedback/>} />
      <Route path="/Complaint" element={<Complaint/>} />
      <Route path="/Logout" element={<Logout />} />
      
      
    </Routes>



  </Router>
);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* {routing} */}
  <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();