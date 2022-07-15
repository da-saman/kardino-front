import React from 'react';
import {
  Typography, Row, Col, Image,
} from 'antd';
import LoginForm from '@components/Auth/Login/LoginForm/LoginForm';
import Logo from '../../../assets/images/logo.png';
import PetroImage from '../../../assets/images/PetroImg01.webp';

const { Title } = Typography;

const LoginPage: React.FC = () => (
  <Row className="h-100">
    <Col xs={0} lg={12} className="h-inherit">
      <Image
        preview={false}
        src={PetroImage}
        alt="PetroImage"
        width="100%"
        height="100vh"
      />
    </Col>
    <Col xs={24} lg={12} className="h-inherit">
      <Row className="h-inherit" justify="center" align="middle">
        <Col xs={20} sm={16} lg={12}>
          {/* {Logo} */}
          <Title level={3} className="mv-6 mv-xs-3 text-xs-center">
            Kardino Maintenance System
          </Title>
          <LoginForm />
        </Col>
      </Row>
    </Col>
  </Row>
);

export default LoginPage;
