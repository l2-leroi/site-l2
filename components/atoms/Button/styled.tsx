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
  weight: 400;
  font-size: 2.4rem;
  line-height: 3.36rem;
  margin-right: .8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 1rem;

  &:first-child {
    width: auto;
    padding: 0.75rem 1.6rem;
    border-radius: 2.4rem; 
  }

  @media (max-width: 800px) {
    font-size: 1.2rem;
    svg{
      height: 1.2rem;
      width: 1.2rem;
    }
  }
`;