import React from 'react';
import { Row, Col, Typography } from 'antd';
import LoginSection from '@components/loginSection';
import Logo from '@components/Logo';
import { PageFooterStyled } from '@components/footer/PageFooter.style';
import { CardStyled as Card } from '@components/card/Card.style';
import HeroSection from '@components/heroSection/HeroSection';

const { Title } = Typography;

const AuthPage: React.FC = () => (
  <Row justify='center' align='middle' className='h-100' style={{ overflowY: 'hidden' }}>
    <Col xs={0} md={0} lg={12}>
      <HeroSection />
    </Col>
    <Col md={22} lg={12}>
      <Logo isResponsive />
      <Title level={3} className='mv-3 text-center'>
        Kardino Maintenance System
      </Title>
      <Row justify='center' align='middle' className='h-inherit'>
        <Col span={16}>
          <Card>
            <LoginSection />
          </Card>
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
