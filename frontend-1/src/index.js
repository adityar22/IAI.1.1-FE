import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthContextProvider from './contexts/AuthContext';
import StudentContextProvider from './contexts/StudentContext';
import DisplayContextProvider from './contexts/DisplayContext';
import BookContextProvider from './contexts/BookContext';
import RentContextProvider from './contexts/RentContext';
import RoomContextProvider from './contexts/RoomContext';
import RsvContextProvider from './contexts/RsvContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DisplayContextProvider>
      <AuthContextProvider>
        <StudentContextProvider>
          <BookContextProvider>
            <RoomContextProvider>
              <RentContextProvider>
                <RsvContextProvider>
                  <App />
                </RsvContextProvider>
              </RentContextProvider>
            </RoomContextProvider>
          </BookContextProvider>
        </StudentContextProvider>
      </AuthContextProvider>
    </DisplayContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
