import React from 'react';
import { Row } from 'antd';
import { Header as StyledHeader } from '@components/Header';
import Logo from '../../shared/Logo/Logo';
import { colors } from '../../constants/colors';
import HeaderAccount from './HeaderAccount';

interface Props {
  name: string
}

const Header: React.FC<Props> = ({ name }) => (
  <StyledHeader>
    <Row justify="space-between" align="middle">
      <Logo color={colors.WHITE} />
      <HeaderAccount name={name} onLogout={() => { console.log('logout'); }} />
    </Row>
  </StyledHeader>
);

export default Header;
