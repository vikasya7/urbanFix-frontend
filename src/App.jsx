import React, { useEffect } from 'react';  // ✅ fix here
import { Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css';

import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import MyIssue from './pages/MyIssue';
import IssueDetail from './pages/IssueDetail';
import AdminDashboard from './pages/AdminDashboard';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import ReportIssueWizard from './pages/ReportIssueWizard';
import { AuthProvider } from './context/AuthContext';
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';







function App() {
  
     useEffect(() => {
    AOS.init({
      duration: 800,      // Duration of animation (ms)
      offset: 100,        // Offset from the top to start animation
      once: true          // Whether animation should happen only once
    });
    }, []);
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/my-issues' element={<MyIssue />} /> 
        <Route path='/issue/:id' element={<IssueDetail />} />
        <Route path='/report' element={<ReportIssueWizard />} />
        <Route path='/admin' element={<AdminDashboard />} />
      </Routes>
       <ToastContainer />
    </AuthProvider>
  );
}

export default App;

