import styled from 'styled-components';
import { colors } from '../../../styles/colors';

interface NavProps { 
  borderWhite?: boolean;
}

export const NavStyled = styled.nav`
  position: absolute;
  width: 100%;
  z-index: 60;
  color: ${colors.black};
  background-color: ${colors.gray};

  &.white {
    background-color: transparent;
    color: ${colors.gray};

    p { 
      color: ${colors.gray};
    }
  }

  &.smallFixed{
    position: fixed;
    
    ul.navList {
      padding: 25px 28px;
      transition: padding 0.4s;
    }
  }

  @media (max-width: 500px) {
    opacity: 0;

    &.animate {
      opacity: 1;
      transition: opacity .8s;
    }
  }
`;

export const NavContentStyled = styled.ul`
  padding: 32px 28px;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavItemStyled = styled.li`
  list-style-type: none;
  font-family: 'Circular Air Pro';
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.02em;
  font-weight: 700;
  
  ::selection {
    background: ${colors.purple};
    color: ${colors.gray};
  }

  @media (max-width: 500px) {
    font-size: 10px;
    line-height: 14px;
  }
  img {
    @media (max-width: 500px) {
      width: 43px !important;
    }
  }
`;

export const NavButtonStyled = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  img {
    @media (max-width: 500px) {
      width: 20px !important;
    }
  }
`;

export const SandwichMenuStyled = styled.span<NavProps>`
  border-top: 2px solid ${props => props.borderWhite ? colors.gray : colors.black};
  border-bottom: 2px solid ${props => props.borderWhite ? colors.gray : colors.black};
  height: 8px;
  width: 20px;
`;

export const DivTextStyled = styled.div``;

export const TextMenuStyled = styled.p`
  font-family: 'Circular Air Pro';
  margin: 0;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  letter-spacing: -0.02em;
  padding-left: 8px;

  ::selection {
    background: ${colors.purple};
    color: ${colors.gray};
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

export const ImageStyled = styled.img`
  user-select: none;
`;