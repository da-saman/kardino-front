import React from 'react';
import { MenuItem } from '@models/index';

import {
  CodeOutlined,
  CopyOutlined,
  DatabaseOutlined,
  GoldOutlined,
  SearchOutlined,
  UserOutlined,
} from '@ant-design/icons';

const adminMenu: MenuItem[] = [
  {
    title: 'Containers',
    key: 'men1',
    icon: <DatabaseOutlined />,
    items: [
      {
        title: 'Advance info',
        path: '/advance-info',
        key: 'sub1',
      },
      {
        title: 'Arrivals',
        path: '/arrivals',
        key: 'sub2',
      },
      {
        title: 'Checking area',
        path: '/checking-area',
        key: 'sub3',
      },
      {
        title: 'Damaged area',
        path: '/damaged-area',
        key: 'sub4',
      },
      {
        title: 'Repair area',
        path: '/repair-area',
        key: 'sub5',
      },
      {
        title: 'Washing area',
        path: '/washing-area',
        key: 'sub6',
      },
      {
        title: 'Healthy area',
        path: '/healthy-area',
        key: 'sub7',
      },
      {
        title: 'Released',
        path: '/released',
        key: 'sub8',
      },
    ],
  },
  {
    title: 'Users',
    key: 'item1',
    icon: <UserOutlined />,
    path: '/users',
    items: [],
  },
  {
    title: 'Companies',
    key: 'item2',
    icon: <GoldOutlined />,
    path: '/companies',
    items: [],
  },
  {
    title: 'Reports',
    key: 'item4',
    icon: <CopyOutlined />,
    items: [],
  },
  {
    title: 'Stock type',
    key: 'item5',
    icon: <SearchOutlined />,
    items: [],
  },
  {
    title: 'ISO codes',
    key: 'item6',
    icon: <CodeOutlined />,
    path: '/iso-codes',
    items: [],
  },
];

export default adminMenu;
