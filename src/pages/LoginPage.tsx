import React from 'react';
import {
  Typography, Row, Col, Image, Card,
} from 'antd';
import LoginForm from '@components/loginForm';
import Logo from '@components/Logo';
import personnelImg from '@assets/images/HassanHoseini.webp';
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
    <Row justify='center' align='middle' style={{ overflow: 'hidden', height: '100vh' }}>
      <Col xs={0} lg={12}>
        <Card style={{
          backgroundColor: 'green',
          borderRadius: '40px',
          position: 'absolute',
          transform: 'rotate(30deg) translateX(-200px)',
          width: '700px',
          height: '700px',
          overflow: 'hidden',

          // zIndex: 10,
        }}
        />
        <Card style={{
          backgroundColor: 'red',
          borderRadius: '40px',
          transform: 'rotate(30deg) translate(-350px, -50px)',
          position: 'absolute',
          width: '700px',
          height: '700px',
          // zIndex: 1,

        }}
        />
        <Card
          cover={(
            <Image
              preview={false}
              src={personnelImg}
              alt='Petro Personnel'
              width='320px'
              height='360px'
              style={{ border: '10px solid yellow' }}
            />
)}
          style={{
            transform: 'translateX(50%)',
            width: '320px',
            height: '360px',
            backgroundColor: 'yellow',
            borderRadius: '8px',
            overflow: 'hidden',
            opacity: 0.5,
            textAlign: 'center',
          }}
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
