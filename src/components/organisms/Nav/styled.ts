import styled from 'styled-components';
import { colors } from '../../../styles/colors';
import { Typography } from '../../../styles/typography';

interface NavProps {
  borderWhite?: boolean;
}

export const NavStyled = styled.nav`
  position: absolute;
  width: 100%;
  z-index: 999; //100;
  color: ${colors.black};
  background-color: ${colors.gray};
  padding: 32px 28px;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &.white {
    background-color: transparent;
    color: ${colors.gray};

    p {
      color: ${colors.gray};
    }
  }

  &.transparentBlack {
    background: rgba(23, 27, 33, 0.5);
    p {
      color: ${colors.gray};
    }
  }

  &.black {
    background-color: ${colors.black};
    p {
      color: ${colors.gray};
    }
  }

  &.smallFixed {
    position: fixed;
    padding: 25px 28px;
    transition: padding 0.4s;
  }

  @media (max-width: 500px) {
    opacity: 0;

    &.animate {
      opacity: 1;
      transition: opacity 0.8s;
    }
  }
`;

export const NavItemStyled = styled.div`
  ${Typography} {
    margin: 0;
    text-align: center;

    ::selection {
      background: ${colors.purple};
      color: ${colors.gray};
    }

    @media (max-width: 800px) {
      font-size: 10px;
      line-height: 14px;
    }
  }
`;

export const NavButtonStyled = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const SandwichMenuStyled = styled.span<NavProps>`
  border-top: 2px solid
    ${(props) => (props.borderWhite ? colors.gray : colors.black)};
  border-bottom: 2px solid
    ${(props) => (props.borderWhite ? colors.gray : colors.black)};
  height: 8px;
  width: 20px;
`;

export const DivTextStyled = styled.div`
  padding-left: 8px;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const ImageStyled = styled.img`
  user-select: none;

  @media (max-width: 800px) {
    width: 40px;
  }
`;
