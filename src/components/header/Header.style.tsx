import styled from 'styled-components';
import { Layout } from 'antd';
import { colors } from '../../constants/colors';

const { Header: AntHeader } = Layout;

export const Header = styled(AntHeader)`
  height: 48px;
  line-height: 48px;
  padding-left: 12px;
  padding-right: 12px;
  color: ${colors.WHITE};
`;

// export default Header;
