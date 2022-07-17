import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '@pages/LoginPage';
import DashboardPage from '@pages/DashboardPage';
import Dashboard from './dashboard/Dashboard';

const App = () => (
  <Routes>
    <Route path='/login' element={<LoginPage />} />
    <Route path='/dashboard' element={<DashboardPage />}>
      <Route index element={<Dashboard />} />
      <Route path='users' element={<p>user</p>} />
      <Route path='companies' element={<p>companies</p>} />
    </Route>
    <Route path='*' element={<Navigate to='login' />} />
  </Routes>
);

export default App;
