import React from 'react';
import { Typography, Row, Col } from 'antd';

import Logo from '../../../Shared/Logo/Logo';
import LoginForm from './LoginForm';

const { Title } = Typography;

const LoginPage: React.FC = () => {
  return (
    <>
      <Logo isResponsive />
      <Title level={3} className='mv-6 mv-xs-3 text-xs-center'>
        Kardino Maintenance System
      </Title>
      <LoginForm />
    </>
  );
};

export default LoginPage;
