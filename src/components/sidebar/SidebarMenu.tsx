import React from 'react';
import { Menu } from 'antd';
// import SubMenu from '@components/navigation/SubMenu';
import { Link } from 'react-router-dom';
import { MenuItem as MenuItemType } from '@models/index';
import { allMenuItems as menuItems } from '@components/menus/allMenuItems';

interface Props {
  items: MenuItemType[]}

const SidebarMenu: React.FC<Props> = ({ items }) => (
  <Menu className='h-100-percent' mode='vertical'>
    {items.map((item) => {
      const menuData = menuItems[item.key];
      if (item.items && item.items.length > 0) {
        return (
          <Menu.SubMenu key={item.key} title={menuData.title}>
            {item.items.map((it) => {
              const subMenuData = menuItems[it.key];
              return (
                <Menu.Item key={it.key}>
                  {subMenuData.path
                    ? <Link to={subMenuData.path}>{subMenuData.title}</Link>
                    : subMenuData.title}
                </Menu.Item>
              );
            })}
          </Menu.SubMenu>
        );
      }

      return (
        <Menu.Item key={item.key} icon={menuData.icon}>
          {menuData.path
            ? <Link to={menuData.path}>{menuData.title}</Link>
            : menuData.title}
        </Menu.Item>
      );
    })}
  </Menu>
);

export default SidebarMenu;
