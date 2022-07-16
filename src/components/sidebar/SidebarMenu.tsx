import React from 'react';
import { Menu } from 'antd';
import MenuItem from '@components/navigation/MenuItem';
import SubMenu from '@components/navigation/SubMenu';
import { NavLink } from 'react-router-dom';
import { MenuItem as MenuItemType } from '@models/index';

interface Props {
  items: MenuItemType[]
}

const SidebarMenu: React.FC<Props> = ({ items }) => (
  <Menu className="h-100-percent" mode="inline">
    {items.map((item) => {
      if (item.items && item.items.length > 0) {
        return (
          <SubMenu key={item.key} icon={item.icon} title={item.title}>
            {item.items.map((it) => (
              <MenuItem key={it.key}>
                {it.path
                  ? <NavLink to={it.path}>{it.title}</NavLink>
                  : it.title}

              </MenuItem>
            ))}
          </SubMenu>
        );
      }
      return (
        <MenuItem key={item.key} icon={item.icon}>
          {item.path ? <NavLink to={item.path}>{item.title}</NavLink> : item.title}
        </MenuItem>
      );
    })}
  </Menu>
);

export default SidebarMenu;
