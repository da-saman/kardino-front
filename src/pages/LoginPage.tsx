import React from 'react';
import {
  Typography, Row, Col, Image,
} from 'antd';
import LoginForm from '@components/loginForm';
import Logo from '@components/Logo';
import PetroImage from '@assets/images/PetroImg01.webp';
import { SubmitHandler } from 'react-hook-form';
import { LoginRequest } from '@models/auth';
import { loginRequest } from '@api/auth/requests';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const onSubmitLogin: SubmitHandler<LoginRequest> = async (data) => {
    setLoading(true);
    loginRequest(data)
      .then(() => navigate('/dashboard'))
      .catch((e) => console.log(e)).finally(() => { setLoading(false); });
  };

  return (
    <Row className='h-100'>
      <Col xs={0} lg={12} className='h-inherit'>
        <Image
          preview={false}
          src={PetroImage}
          alt='PetroImage'
          width='100%'
          height='100vh'
        />
      </Col>
      <Col xs={24} lg={12} className='h-inherit'>
        <Row className='h-inherit' justify='center' align='middle'>
          <Col xs={20} sm={16} lg={12}>
            <Logo isResponsive />
            <Title level={3} className='mv-6 mv-xs-3 text-xs-center'>
              Kardino Maintenance System
            </Title>
            <LoginForm onSubmit={onSubmitLogin} isSubmitting={loading} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default LoginPage;
