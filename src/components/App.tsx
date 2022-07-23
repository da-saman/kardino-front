import React from 'react';
import {
  Routes, Route, Navigate,
} from 'react-router-dom';
import AuthPage from '@pages/AuthPage';
import DashboardPage from '@pages/DashboardPage';
import User from '@components/User';
import Company from '@components/Componies';

const App = () => (
  <Routes>
    <Route path='/login' element={<AuthPage />} />
    <Route path='/dashboard' element={<DashboardPage />}>
      <Route path='dashboard' element={<p>داشبورد</p>} />
      <Route path='equipment-management' element={<p>مدیریت تجهیزات</p>} />
      <Route path='basic-infos' element={<p>اطلاعات پایه</p>} />
      <Route path='cartable' element={<p>کارتابل</p>} />
      <Route path='planning-maintenance' element={<p>نت برنامه ریزی شده</p>} />
      <Route path='APM' element={<p>APM</p>} />
      <Route path='reports' element={<p>گزارشات</p>} />
      <Route path='my-notifications' element={<p>اطلاع رسانی</p>} />
      <Route path='setting' element={<p>تنظیمات</p>} />
      <Route path='tasks-management' element={<p>مدیریت کارها</p>} />
    </Route>
    <Route path='*' element={<Navigate to='login' />} />
  </Routes>
);

export default App;
