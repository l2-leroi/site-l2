// import styled from 'styled-components';
import { colors } from '../../../styles/colors';
import styled, { keyframes } from 'styled-components';
import { Url } from 'url';

interface CardTextPropsBgColor {
  bgColor: string;
}
interface CardTextPropsBgImage {
  bgImage: string;
}



export const SectionOnePageStyled = styled.section<CardTextPropsBgColor>`
  display: flex;
  background-color: ${props => props.bgColor ? props.bgColor :"none"};
  height: 938px;
  width: 100%;
  max-width: 100%;
 

  @media (max-width: 800px) {
    max-width: 150px;
  }
  @media (max-width: 576px) {
    display: none;
  }
`;

export const DivImageStyled = styled.div<CardTextPropsBgImage>`
background-image: url(${props => props.bgImage ? props.bgImage:"none"});
background-size: cover;
background-position: center;
position: absolute;

  display: flex;
  width: 50%;
  max-width: 50%;
  height: 938px;
 
`;

export const DivItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  max-width: 50%;
  margin-left: 750px;
  justify-content: center;
  position: relative;
  

  ul {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    bottom: 1px;
  }
  li {
    list-style-type: none;
  }

  @media (max-width: 800px) {
    max-width: 20px;
    min-width: 20px;
  }

  @media (max-width: 700px) {
    max-width: 30px;
  }

  @media (max-width: 600px) {
    max-width: 16px;
    min-width: 26px;
  }

  @media (max-width: 576px) {
    max-width: 38px;
    min-width: 0px;

    &:nth-child(1) {
      order: 1;
    }
    &:nth-child(2) {
      order: 4;
    }
    &:nth-child(3) {
      order: 2;
    }
    &:nth-child(4) {
      order: 3;
    }
    &:nth-child(5) {
      order: 5;
    }
  }

  h1  {
    ::selection {
      background: ${colors.purple};
      color: ${colors.gray};
    }
    margin-bottom: 1rem;
    width: 35%;
    max-width: 35%;

    @media (max-width: 800px) {
      padding-bottom: 16px;
    }

    @media (max-width: 800px) {
      padding-bottom: 16px;
    }
  }

  p {
    ::selection {
      background: ${colors.purple};
      color: ${colors.gray};
    }
   

    @media (max-width: 800px) {
      max-width: 230px;

      &.last-paragraph {
        max-width: 144px;
      }
    }

    @media (max-width: 600px) {
      max-width: 180px;

      &.last-paragraph {
        max-width: 180px;
      }
    }

    @media (max-width: 576px) {
      max-width: 300px;

      &.last-paragraph {
        max-width: 300px;
      }
    }
  }
`;

export const SpinningAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SpinningIconStyled = styled.div`
  position: absolute;
  left: 0px;
  margin-top: 50%;
  margin-left: -155px;
  overflow-x: hidden;
  animation: ${SpinningAnimation} 5s linear infinite;

  @media(max-width: 800px){
    max-width: 248px;
  }

  @media(max-width: 414px){
    max-width: 140px;
  }
`;

export const SpinnerImage = styled.img`
 

`;
