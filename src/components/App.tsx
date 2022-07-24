import React from 'react';
import {
  Routes, Route, Navigate,
} from 'react-router-dom';
import AuthPage from '@pages/AuthPage';
import DashboardPage from '@pages/DashboardPage';

const App = () => (
  <Routes>
    <Route path='/login' element={<AuthPage />} />
    <Route path='/panel' element={<DashboardPage />}>
      <Route path='dashboard' element={<p>داشبورد</p>} />
      <Route path='equipmentManagement' element={<p>مدیریت تجهیزات</p>} />
      <Route path='basicInfos' element={<p>اطلاعات پایه</p>} />
      <Route path='cartable' element={<p>کارتابل</p>} />
      <Route path='planningMaintenance' element={<p>نت برنامه ریزی شده</p>} />
      <Route path='APM' element={<p>APM</p>} />
      <Route path='reports' element={<p>گزارشات</p>} />
      <Route path='myNotifications' element={<p>اطلاع رسانی</p>} />
      <Route path='setting' element={<p>تنظیمات</p>} />
      <Route path='tasksManagement' element={<p>مدیریت کارها</p>} />
      <Route path='importedCartable' element={<p>کارتابل وارده</p>} />
      <Route path='exportedCartable' element={<p>کارتابل صادره</p>} />
      <Route path='myRequests' element={<p>درخواست های من</p>} />
    </Route>
    <Route path='*' element={<Navigate to='login' />} />
  </Routes>
);

export default App;
