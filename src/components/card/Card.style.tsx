import { Card } from 'antd';
import styled from 'styled-components';

export const CardStyled = styled(Card)`
background-color: ${(props) => props.style?.borderBlockColor};
border-radius: 40px;
position: absolute;
width: 700px;
height: 700px;
overflow: hidden;
`;
