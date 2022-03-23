import styled from "styled-components";
import { colors } from '../../../styles/colors';

interface ButtonProps { 
  bColor?: string;
  bgColor?: string;
}

export const LinkStyled = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: end;
  cursor: pointer;
`;

export const ButtonStyled = styled.div<ButtonProps>`
  width: 50px;
  height: 50px;
  border: 2px solid ${props => props.bColor ? `${props.bColor}` : `${colors.green}`};
  background-color: ${props => props.bgColor ? props.bgColor : "none"};
  border-radius: 24px;
  font-family: 'Circular Air Pro', sans-serif;
  weight: 400;
  font-size: 2.4rem;
  line-height: 3.36rem;
  margin-right: .8rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &:first-child {
    width: auto;
    padding: .8rem 1.6rem;
  }
`;