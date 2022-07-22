import React from 'react';
import { Row, Col, Typography } from 'antd';
import LoginSection from '@components/auth/loginSection';
import Logo from '@components/Logo';
import { PageFooterStyled } from '@components/footer/PageFooter.style';
import AuthCard from '@components/auth/authCard';
import HeroSection from '@components/auth/heroSection';

const { Title } = Typography;

const AuthPage: React.FC = () => (
  <Row justify='center' align='middle' className='h-100' style={{ overflowY: 'hidden' }}>
    <Col xs={0} md={0} lg={12}>
      <HeroSection />
    </Col>
    <Col xs={24} md={20} lg={12}>
      <Logo isResponsive />
      <Title level={3} className='mv-3 text-center'>
        Kardino Maintenance System
      </Title>
      <Row justify='center' align='middle' className='h-inherit'>
        <Col span={16}>
          <AuthCard>
            <LoginSection />
          </AuthCard>
        </Col>
      </Row>
      <PageFooterStyled>
        ©2022 Kardino Maintenance System
        <br />
        All Rights Reserved | Designed & Develope by
        <span style={{ color: 'green' }}> kahroba Tavan</span>
      </PageFooterStyled>
    </Col>

  </Row>
);

export default AuthPage;
