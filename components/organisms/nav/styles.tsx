import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const NavStyled = styled.nav``;

export const NavContent = styled.ul`
  padding: 43px 32px 43px 28px;
  margin: 0;
  display: flex;
  justify-content: space-between;
`;

export const NavItem = styled.li`
  list-style-type: none;
  font-family: 'Circular Air Pro';
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.02em;
  font-weight: 700;
  color: ${colors.black};
`;

export const NavButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
