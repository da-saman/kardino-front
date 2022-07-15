import React from 'react';
import {
  Grid, Col, Image, Row, RowProps, Typography,
} from 'antd';
import LogoImage from '../../assets/images/logo.png';
import { colors } from '../../constants/colors';

const { Text } = Typography;
const { useBreakpoint } = Grid;

interface LogoProps {
  isResponsive?: boolean;
  color?: colors;
}

type Props = Pick<RowProps, 'align'> & LogoProps;

const Logo: React.FC<Props> = ({
  align = 'middle',
  isResponsive,
  color = colors.BLACK,
}) => {
  const screens = useBreakpoint();

  return (
    <Row
      align={align}
      // eslint-disable-next-line no-nested-ternary
      justify={isResponsive ? (screens.lg ? 'start' : 'center') : 'start'}
    >
      <Col style={{ height: 26 }}>
        <Image preview={false} src={LogoImage} alt="Logo" height="2.5rem" />
      </Col>
      {/* <Col>
        <Text className='pl-1' strong>
          KARDINO
        </Text>
      </Col> */}
    </Row>
  );
};

Logo.defaultProps = {
  isResponsive: true,
  color: colors.BLACK,
};

export default Logo;
