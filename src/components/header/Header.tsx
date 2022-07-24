import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Row } from 'antd';
import { Header as StyledHeader } from '@components/header/Header.style';
import { colors } from '@constants/colors';
import Logo from '@components/Logo';
import HeaderAccount from '@components/header/HeaderAccount';
import {
  removeAllTabsFromls, removeActiveTabKey,
} from '@utils/TabStorageService';

interface Props {
  name: string
}

const Header: React.FC<Props> = ({ name }) => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    removeActiveTabKey();
    removeAllTabsFromls();
    navigate('/login', { replace: true });
  };

  return (
    <StyledHeader>
      <Row justify='space-between' align='middle'>
        <Logo color={colors.WHITE} />
        <HeaderAccount
          name={name}
          onLogout={logoutHandler}
        />
      </Row>
    </StyledHeader>
  );
};
export default Header;
