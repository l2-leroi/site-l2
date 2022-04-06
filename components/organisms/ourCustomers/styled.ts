import styled, { keyframes } from 'styled-components';
import { colors } from '../../../styles/colors';

export const OurCustomersStyled = styled.section`
  background-color: #fff;
  width: 100%;
  overflow: hidden;
  position: relative;
  padding-top: 300px;
`;

export const BlackLineStyled = styled.div`
  color: ${colors.gray};
  background-color: ${colors.black};
  clip-path: polygon(0 0, 100% 40%, 100% 100%, 0% 100%);
  z-index: 1;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr minmax(280px, 1456px) 1fr;
  padding: 0px 28px;
  overflow: hidden;

  @media(max-width: 800px){
    padding: 0px 12px;
  }
`;

export const PurpleLineStyled = styled.div`
  color: ${colors.gray};
  background-color: ${colors.purple};
  clip-path: polygon(0 0, 100% 40%, 100% 100%, 0% 100%);
  z-index: 1;
  width: 100%;
  overflow: hidden;
  padding-top: 50px;
`;

export const HeaderStyled = styled.hgroup`
  max-width: 780px;

  @media(max-width: 800px){
    max-width: 336px;
  }
`;

export const TitleStyled = styled.h2`
  font-family: 'Neue Machina', sans-serif;
  font-style: normal;
  font-size: 64px;
  //4em
  line-height: 90%;
  font-weight: 800;
  letter-spacing: -0.04em;
  margin-bottom: 40px;
  
  @media(max-width: 800px){
    max-width: 264px;
    font-size: 32px;
    //2em
    margin-bottom: 16px;
  }
`;

export const SubtitleStyled = styled.h3`
  font-family: 'Circular Air Pro', sans-serif;
  max-width: 464px;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  //1.5em
  line-height: 140%;
  letter-spacing: -0.04em;

  @media(max-width: 760px){
    font-size: 12px;
    //0.75em
    line-height: 140%;
    max-width: 160px;
  }
`;

export const AsideStyled = styled.aside`
  text-align: right;
  align-self: center;
`;

export const ParagraphStyled = styled.p`
  font-family: 'Circular Air Pro', sans-serif;
  font-size: 16px;
  font-family: 'Circular Air Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  //1em
  line-height: 140%;
  letter-spacing: -0.02em;
  
  @media(max-width: 800px){
    font-size: 12px;
    //0.75em
    max-width: 61px;
  }

  @media(max-width: 414px){
    font-size: 10px;
    //0.625em
    max-width: 61px;
  }
`;

export const ContentStyled = styled.section`
  position: relative;
  display: flex;
  margin-bottom: 124px;
  grid-column: 2;

  @media(max-width: 800px){
    margin-bottom: 39px;
  }

  @media(max-width: 414px){
    margin-bottom: 36px;
    width: 100%;
  }
`;

export const SignStyled = styled.span`
  font-family: 'Neue Machina', sans-serif;
  font-style: normal;
  font-size: 3rem;
  line-height: 200%;
  font-weight: 800;
  letter-spacing: -0.02em;
  text-align: center;
  color: ${colors.darkgray};
  overflow: hidden;
  padding-left: 30px;
  width: 100%;
  max-height: 40px;
  position: absolute;
  top: -20px;
  z-index: 99;
  margin-top: -20px

  @media(max-width: 800px){
    font-size: 20px;
    //1.25em
    line-height: 120%;
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
  right: 0px;
  z-index: 99;  
  overflow-x: hidden;
  animation: ${SpinningAnimation} 5s linear infinite;

  @media(max-width: 800px){
    max-width: 248px;
  }

  @media(max-width: 414px){
    max-width: 140px;
  }
`;

export const SignContainerStyled = styled.div`
  background-color: ${colors.black};
  padding-top: 40px;
  margin-top: -2px;
  position: relative;
`;

export const CustomersContainer = styled.div`
  grid-column: 2;
`;