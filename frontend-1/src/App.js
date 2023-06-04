import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import logo from './logo.svg';
import './App.css';
import LandingAdmin from './pages/Admin/LandingAdmin';
import LandingStudent from './pages/Student/LandingStudent';
import { useState } from 'react';
import Auth from './pages/Auth';

function App() {
  const [role, setRole] = useState("STUDENT")
  const [isLogin, setIsLogin] = useState(true)

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          {isLogin? 
            <Route exact path="/*" element={role=="ADMIN" ? <LandingAdmin /> : <LandingStudent/>} />
            :
            <Route exact path="/*" element={<Auth />} />
          }
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
