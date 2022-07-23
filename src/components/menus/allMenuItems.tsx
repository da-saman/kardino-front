import React from 'react';

import {
  AppstoreFilled,
  CustomerServiceFilled,
  ExclamationCircleFilled,
  FolderOpenFilled,
  SafetyCertificateFilled,
  ToolFilled,
  SnippetsFilled,
  BellFilled,
  SettingFilled,
  CheckCircleFilled,
} from '@ant-design/icons';

type MenuType = {
  title: string;
  path: string;
  icon: React.ReactNode;
}

export const allMenuItems: Record<string, MenuType> = {
  dashboard: {
    title: 'داشبورد',
    path: 'dashboard',
    icon: <AppstoreFilled />,
  },
  basicInfos: {
    title: 'اطلاعات پایه',
    path: 'basic-infos',
    icon: <CustomerServiceFilled />,
  },
  equipmentManagement: {
    title: 'مدیریت تجهیزات',
    path: 'equipment-management',
    icon: <ExclamationCircleFilled />,
  },
  cartable: {
    title: 'کارتابل',
    path: 'cartable',
    icon: <FolderOpenFilled />,
  },
  planningMaintenance: {
    title: 'نت برنامه ریزی شده ',
    path: 'planning-maintenance',
    icon: <SafetyCertificateFilled />,
  },
  APM: {
    title: 'APM',
    path: 'APM',
    icon: <ToolFilled />,
  },
  reports: {
    title: 'گزارشات',
    path: 'reports',
    icon: <SnippetsFilled />,
  },
  notification: {
    title: 'اطلاع رسانی',
    path: 'notification',
    icon: <BellFilled />,
  },
  setting: {
    title: 'تنظیمات',
    path: 'setting',
    icon: <SettingFilled />,
  },
  taskManagement: {
    title: 'مدیریت کارها',
    path: 'task-management',
    icon: <CheckCircleFilled />,
  },
};
