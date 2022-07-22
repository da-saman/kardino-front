import styled from 'styled-components';

type HeroCardProps = {backgroundColor: string; top: string; right: string}

export const HeroCard = styled.div.attrs((props: HeroCardProps) => props)`
background-color: ${(props) => props.backgroundColor};
position: absolute;
top: calc(5vh + ${(props) => props.top});
right: ${(props) => props.right};
width: 90rem;
height: 90rem;
transform: rotate(24deg);
border-radius: 40px;
`;
