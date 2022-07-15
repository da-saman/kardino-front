import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Row } from 'antd';
import { Header as StyledHeader } from '@components/header/Header.style';
import Logo from '../Logo';
import { colors } from '../../constants/colors';
import HeaderAccount from './HeaderAccount';

interface Props {
  name: string
}

const Header: React.FC<Props> = ({ name }) => {
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <Row justify="space-between" align="middle">
        <Logo color={colors.WHITE} />
        <HeaderAccount
          name={name}
          onLogout={() => {
            navigate('login', { replace: true });
          }}
        />
      </Row>
    </StyledHeader>
  );
};
export default Header;
