import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const ListStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(5,1fr);
  justify-content: center;
  margin-bottom: 40px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: -5;
    margin-top: -10px;
    right: -5px;
    padding: 50px;
    background: ${colors.black};
    width: 5%;
    height: 80%;
    z-index: 7;
  }

  @media(max-width: 800px){
    grid-template-columns: repeat(2,1fr);

    &::after {
      height: 90%;
    }
  }
`;

export const ContentStyled = styled.li`
  list-style-type: none;
  margin: 0 auto;
  width: 280px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  
  align-items: center;
  padding: 40px;
  min-width: 80px;
  position: relative;

  span {
    z-index: 8;
  }

  &::after {
    content: "+";
    position: absolute;
    bottom: -6px;
    right: -3px;
    z-index: 6;
    font-size 20px;
  }

  &::before {
    content: "+";
    position: absolute;
    top: -21px;
    right: -3px;
    z-index: 6;
    font-size 20px;
  }
`;

export const ImageStyled = styled.img`

`;