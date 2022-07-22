import React from 'react';
import {
  Routes, Route, Navigate,
} from 'react-router-dom';
import AuthPage from '@pages/AuthPage';
import DashboardPage from '@pages/DashboardPage';
import Dashboard from '@components/dashboard';

const App = () => (
  <Routes>
    <Route path='/login' element={<AuthPage />} />
    <Route path='/dashboard' element={<DashboardPage />}>
      <Route path='users' element={<p>user</p>} />
      <Route path='companies' element={<p>companies</p>} />
    </Route>
    {/* <Route path='*' element={<Navigate to='login' />} /> */}
  </Routes>
);

export default App;
