import styled from "styled-components";
import { colors } from '../../../styles/colors';

interface Props{
    bgColor?: string;
}

export const Line = styled.div<Props>`
    clip-path: polygon(0 30%, 100% 30%, 100% 100%, 0 100%);
    padding-top: 300px;
    background-color: ${props => props.bgColor};
`;