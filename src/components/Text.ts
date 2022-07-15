import styled from 'styled-components';
import { Typography } from 'antd';
import { colors } from '@constants/colors';

const { Text: AntText } = Typography;

interface Props {
  color?: colors;
}

const Text = styled(AntText)<Props>`
  color: ${({ color }) => color || '#000000'};
`;

export default Text;
