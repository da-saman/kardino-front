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
    path: 'basicInfos',
    icon: <CustomerServiceFilled />,
  },
  equipmentManagement: {
    title: 'مدیریت تجهیزات',
    path: 'equipmentManagement',
    icon: <ExclamationCircleFilled />,
  },
  cartable: {
    title: 'کارتابل',
    path: 'cartable',
    icon: <FolderOpenFilled />,
  },
  planningMaintenance: {
    title: 'نت برنامه ریزی شده ',
    path: 'planningMaintenance',
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
  myNotifications: {
    title: 'اطلاع رسانی',
    path: 'myNotifications',
    icon: <BellFilled />,
  },
  setting: {
    title: 'تنظیمات',
    path: 'setting',
    icon: <SettingFilled />,
  },
  tasksManagement: {
    title: 'مدیریت کارها',
    path: 'tasksManagement',
    icon: <CheckCircleFilled />,
  },

  importedCartable: {
    title: 'کارتابل وارده',
    path: 'importedCartable',
    icon: <CheckCircleFilled />,
  },
  exportedCartable: {
    title: 'کارتابل صادره',
    path: 'exportedCartable',
    icon: <CheckCircleFilled />,
  },
  myRequests: {
    title: 'درخواست های من',
    path: 'myRequests',
    icon: <CheckCircleFilled />,
  },
};
