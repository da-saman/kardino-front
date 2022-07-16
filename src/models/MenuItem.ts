import { ReactNode } from 'react';

export default interface MenuItem {
  title: string
  key: string
  path?: string
  icon?: ReactNode
  items?: MenuItem[]
};
