import React from 'react';
import { Image, Row } from 'antd';
import personnelImg from '@assets/images/HassanHoseini.webp';
import { HeroCard } from '@components/auth/heroSection/HeroCard';
import { ImageContainerStlyled } from '@components/auth/heroSection/ImageContainerStlyled';

const HeroSection = () => (
  <Row justify='center' align='middle' className='h-inherit'>
    <HeroCard backgroundColor='rgba(139, 194, 64, 0.2);' top='-30rem' right='12rem' />
    <HeroCard backgroundColor='rgb(139, 194, 64)' top='-40rem' right='20rem' />
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
