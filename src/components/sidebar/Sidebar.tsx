import React from 'react';
import { SidebarStyled } from '@components/sidebar/Sidebar.style';
import { MenuItem } from '@models/index';
import SidebarMenu from '@components/sidebar/SidebarMenu';

const defaultWidth = 208;

interface Props {
  menuItems: MenuItem[]
}

const Sidebar: React.FC<Props> = ({ menuItems }) => (
  <SidebarStyled
    theme='light'
    breakpoint='xs'
    collapsible
    trigger={null}
    width={defaultWidth}
  >
    <SidebarMenu items={menuItems} />
  </SidebarStyled>
);

export default Sidebar;
