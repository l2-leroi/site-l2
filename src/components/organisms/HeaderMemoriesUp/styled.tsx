import styled  from 'styled-components';
import { colors } from '../../../styles/colors';

export const Header = styled.header`
position: absolute;
width: 1512px;
height: 108px;

background: #171B21;


/* > div {
position: absolute;
width: 37.85px;
height: 13.8px;
margin-left: 20px;
margin-top: 35px;

color: #F2F3F4;
} */


.logo {
position: absolute;
width: 37.85px;
height: 13.8px;
margin-left: 20px;
margin-top: 35px;

color: #F2F3F4;
  }

  .contato {
position: absolute;
width: 173px;
height: 22px;
margin-left: 40%;
margin-top: 35px;
font-family: 'Circular Air Pro';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 140%;
/* or 22px */

letter-spacing: -0.02em;

/* White 0 */

color: #F2F3F4;
  }
`;

export const NavItemStyled = styled.li`
  list-style-type: none;
  font-family: 'Circular Air Pro';
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.02em;
  font-weight: 700;
  min-width: 173px;
  color: white;
  ::selection {
    background: ${colors.purple};
    color: ${colors.gray};
  }

  /* &:hover {
    color: ${colors.green};
  } */

  @media (max-width: 500px) {
    font-size: 10px;
    line-height: 14px;
  }

`;

export const ImageStyled = styled.img``;

export const DivTextStyled = styled.div``;

export const TextMenuStyled = styled.p`
font-family: 'Circular Air Pro';
  
  color: #F2F3F4;
  margin-left: 70%;
  margin-top: 20px;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  letter-spacing: -0.02em;
  padding-left: 8px;
  @media (max-width: 500px) {
    display: none;
    
  }
`;

