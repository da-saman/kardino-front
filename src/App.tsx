import React from 'react';
import { Col, Image, Row } from 'antd';

import LoginPage from './Components/Auth/Login/LoginPage';

import PetroImage from './assets/images/PetroImg01.webp';

import './App.css';

const App = () => {
  return (
    <>
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
              <LoginPage />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default App;
