import styled from "styled-components";
import { colors } from '../../../styles/colors';

interface ButtonProps { 
  borderColor?: string;
  bgColor?: string;
}

export const LinkStyled = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: end;
  cursor: pointer;
`;

export const ButtonStyled = styled.div<ButtonProps>`
  border: 2px solid ${props => props.borderColor ? props.borderColor : colors.green};
  background-color: ${props => props.bgColor ? props.bgColor : "none"};
  border-radius: 50%;
  font-family: 'Circular Air Pro', sans-serif;
  font-weight: 400;
  font-size: 2.4rem;
  margin-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 10px;

  &:first-child {
    width: auto;
    padding: 8px 16px;
    border-radius: 24px; 
  }

  @media (max-width: 800px) {
    font-size: 1.2rem;
    svg{
      height: 12px;
      width: 12px;
    }
  }
`;