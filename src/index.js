import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Register from './Register'
import Login from './Login'
import Catalog from './Catalog'
import SignLayout from './SignLayout';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route element={<SignLayout />}>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />          
        </Route>
        <Route path='catalog' element={<Catalog />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
