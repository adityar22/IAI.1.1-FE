import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import logo from './logo.svg';
import './App.css';
import LandingAdmin from './pages/Admin/LandingAdmin';

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route exact path="/*" element={<LandingAdmin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
