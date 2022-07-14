import React from 'react';
import Logo from '../../../Shared/Logo/Logo';
import LoginForm from './LoginForm';
import { Typography } from 'antd';

const { Title } = Typography;

const LoginPage: React.FC = () => {
  return (
    <>
      <Logo isResponsive />
      <Title level={4} className='mv-6 mv-xs-3 text-xs-center'>
        Log in
      </Title>
      <LoginForm />
    </>
  );
};

export default LoginPage;
