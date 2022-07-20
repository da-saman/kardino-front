import React from 'react';
import {
  Typography, Row, Col, Image, Card,
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
    <Row justify='center' align='middle'>
      <Col xs={0} lg={12}>
        <Card style={{
          backgroundColor: 'green',
          borderRadius: '40px',
          position: 'absolute',
          transform: 'rotate(30deg) translate(-200px, 150px)',
          width: '700px',
          height: '700px',
          // zIndex: 10,
        }}
        />
        <Card style={{
          backgroundColor: 'red',
          borderRadius: '40px',
          transform: 'rotate(30deg) translate(-350px, 70px)',
          position: 'absolute',
          width: '700px',
          height: '700px',
          // zIndex: 1,

        }}
        />
        <Image
          preview={false}
          src={PetroImage}
          alt='PetroImage'
          width='800px'
          height='100vh'
        />
      </Col>
      <Col xs={24} lg={12}>
        <Row justify='center' align='middle'>
          <Col xs={20} lg={12}>
            <Logo isResponsive />
            <Title level={3} className='mv-3 text-center'>
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
