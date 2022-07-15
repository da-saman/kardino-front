import React from 'react';
import { Menu } from 'antd';

interface Props {
  onLogout: () => void
}

const AccountMenu: React.FC<Props> = ({ onLogout }) => (
  <Menu>
    <Menu.Item key="logout" onClick={onLogout}>
      Log out
    </Menu.Item>
  </Menu>
);

export default AccountMenu;
