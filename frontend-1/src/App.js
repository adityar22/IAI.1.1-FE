import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import logo from './logo.svg';
import './App.css';
import LandingAdmin from './pages/Admin/LandingAdmin';
import LandingStudent from './pages/Student/LandingStudent';
import Auth from './pages/Auth';

import { useAuthContext } from './hooks/auth/useAuthContext';

function App() {
  const {user} = useAuthContext();
  console.log(user)

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          {user!=null ? 
            <Route exact path="/*" element={user.user.role=="ADMIN" ? <LandingAdmin /> : <LandingStudent/>} />
            :
            <Route exact path="/*" element={<Auth />} />
          }
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
