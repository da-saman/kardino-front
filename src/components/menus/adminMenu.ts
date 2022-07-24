import { MenuItem } from '@models/index';

const adminMenu: MenuItem[] = [
  {
    key: 'dashboard',
  },
  {
    key: 'equipmentManagement',
  },
  {
    key: 'basicInfos',
  },
  {
    key: 'cartable',
    items: [
      {
        key: 'importedCartable',
      },
      {
        key: 'exportedCartable',
      },
      {
        key: 'myRequests',
      },
    ],
  },
  {
    key: 'planningMaintenance',
  },
  {
    key: 'APM',
  },
  {
    key: 'reports',
  },
  {
    key: 'myNotifications',
  },
  {
    key: 'setting',
  },
  {
    key: 'tasksManagement',
  },
];

export default adminMenu;
