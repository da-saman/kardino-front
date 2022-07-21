import React from 'react';
import { Image, Row, Col } from 'antd';
import personnelImg from '@assets/images/HassanHoseini.webp';
import { StyledDiv } from './StyledDiv';
import { ImageContainerStlyled } from './ImageContainerStlyled';

const HeroSection = () => (
  <Row justify='center' align='middle' className='h-inherit'>
    <StyledDiv backgroundColor='blue' top='-30rem' right='12rem' />
    <StyledDiv backgroundColor='green' top='-40rem' right='20rem' />
    <ImageContainerStlyled>
      <Image
        preview={false}
        src={personnelImg}
        alt='Petro Personnel'
      />
    </ImageContainerStlyled>
  </Row>
);

export default HeroSection;
