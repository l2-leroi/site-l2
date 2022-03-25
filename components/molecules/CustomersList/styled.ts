import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const ListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: stretch;
  margin-bottom: 40px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: -5;
    margin-top: -10px;
    right: 0;
    padding: 50px;
    background: ${colors.black};
    width: 6px;
    height: 200px;
  }
`;

export const ContentStyled = styled.li`
  list-style-type: none;

  width: 280px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  
  align-items: center;
  padding: 40px;
  min-width: 80px;
  position: relative;

  &::after {
    content: "+";
    position: absolute;
    bottom: -6px;
    right: -3px;
  }

  &::before {
    content: "+";
    position: absolute;
    top: -8px;
    right: -3px;
  }
`;

