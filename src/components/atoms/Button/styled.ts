import styled from 'styled-components';
import { colors } from '../../../styles/colors';

interface ButtonProps {
  borderColor?: string;
  bgColor?: string;
  fontSize?: number | string;
}

export const LinkStyled = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: end;
  cursor: pointer;
`;

export const ButtonStyled = styled.div<ButtonProps>`
  border: 2px solid
    ${(props) => (props.borderColor ? props.borderColor : colors.green)};
  background-color: ${(props) => (props.bgColor ? props.bgColor : 'none')};
  border-radius: 50px;
  font-family: 'Circular Air Pro', sans-serif;
  font-weight: 400;
  font-size: ${(props) => (props.fontSize ? props.fontSize : '2.4rem')};
  margin-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  white-space: nowrap;

  @media (max-width: 800px) {
    font-size: 16px;
    padding: 0px;
  }

  &:first-child {
    width: auto;
    padding: 7.5px 16px;
  }

  @media (max-width: 800px) {
    svg {
      height: 30px;
      width: 30px;
    }
  }

  &:hover {
    &:first-child + div {
      border-color: ${colors.secondary1};
      background-color: ${(props) =>
        props.bgColor ? colors.secondary1 : 'none'};
    }
    &:first-child {
      border-color: ${colors.secondary1};
      background-color: ${(props) =>
        props.bgColor ? colors.secondary1 : 'none'};
    }
  }
`;
