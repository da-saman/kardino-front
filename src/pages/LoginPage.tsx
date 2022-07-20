import React from 'react';
import {
  Typography, Row, Col, Image, Card, Layout,
} from 'antd';
import LoginForm from '@components/loginForm';
import Logo from '@components/Logo';
import personnelImg from '@assets/images/HassanHoseini.webp';
import { SubmitHandler } from 'react-hook-form';
import { LoginRequest } from '@models/auth';
import { loginRequest } from '@api/auth/requests';
import { useNavigate } from 'react-router-dom';
import { CardStyled } from '@components/card/Card.style';

const { Title } = Typography;
const { Footer } = Layout;

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
        <CardStyled style={{ transform: 'rotate(30deg) translateX(-200px)', backgroundColor: 'red' }} />
        <CardStyled style={{ transform: 'rotate(30deg) translate(-350px, -50px)', backgroundColor: 'green' }} />
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
            opacity: 0.9,
            textAlign: 'center',
          }}
        />

      </Col>
      <Col xs={16} lg={12}>
        <Row justify='center' align='middle'>
          <Col xs={20} lg={12}>
            <Logo isResponsive />
            <Title level={3} className='mv-3 text-center'>
              Kardino Maintenance System
            </Title>
            <LoginForm onSubmit={onSubmitLogin} isSubmitting={loading} />
            <Footer className='footer text-center'>
              ©2022 Kardino Maintenance System
              <br />
              All Rights Reserved | Designed & Develope by
              <span style={{ color: 'green' }}> kahroba Tavan</span>
            </Footer>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default LoginPage;
