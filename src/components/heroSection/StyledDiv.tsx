import styled from 'styled-components';

type StyledDivProps = {backgroundColor: string; top: string; right: string}

export const StyledDiv = styled.div.attrs((props: StyledDivProps) => props)`
background-color: ${(props) => props.backgroundColor};
position: absolute;
top: calc(5vh + ${(props) => props.top});
right: ${(props) => props.right};
width: 90rem;
height: 90rem;
transform: rotate(24deg);
border-radius: 40px;
`;
