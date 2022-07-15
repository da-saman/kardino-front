import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import LoginPage from './components/Auth/Login/LoginPage';
import Dashboard from './components/dashboard/Dashboard';

import './App.css';

const App = () => {
  const date = new Date();
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default App;
