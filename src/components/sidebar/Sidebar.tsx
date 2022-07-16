import React from 'react';
import { Sidebar as StyledSidebar } from '@components/sidebar/Sidebar.style';
import { MenuItem } from '@models/index';
import SidebarMenu from './SidebarMenu';

const defaultWidth = 208;

interface Props {
  menuItems: MenuItem[]
}

const Sidebar: React.FC<Props> = ({ menuItems }) => (
  <StyledSidebar
    theme="light"
    breakpoint="lg"
    collapsible
    trigger={null}
    width={defaultWidth}
  >
    <SidebarMenu items={menuItems} />

  </StyledSidebar>
);

export default Sidebar;
