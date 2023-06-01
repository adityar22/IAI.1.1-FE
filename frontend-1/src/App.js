import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import logo from './logo.svg';
import './App.css';
import LandingAdmin from './pages/Admin/LandingAdmin';
import Auth from './pages/auth'

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route exact path="/*" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
