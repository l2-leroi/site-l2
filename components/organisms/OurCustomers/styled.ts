import styled, { keyframes } from 'styled-components';
import { colors } from '../../../styles/colors';

export const OurCustomersStyled = styled.section`
  width: 100%;
  overflow: hidden;
  position: relative;

  position: relative;
  width: 100%;
  // margin-top: -200px;
  background-color: ${colors.gray};
  // transform: skewY(17.76deg);
  transition: 0.1s linear all;
  

  @media(max-width: 600px){
    padding-top: 50px;
  }

  @media(max-width: 414px){
    padding-top: 0px;
  }
`;

export const Teste2 = styled.section`
// transform: skewY(-17.76deg);
transition: 0.2s linear all;
`;

export const Teste5 = styled.div`
    position: absolute;
    top: -200px;
    left: 0;
    background: blue;
    width: 1000px;
    height: 200px;
    z-index: 50;
    clip-path: polygon(100% 100%, 0% 100%, 0% 0%, 100% 100%);
`;

export const BlackLineStyled = styled.div`
  color: ${colors.gray};
  background-color: ${colors.black};
  width: 100%;
  display: grid;
  grid-template-columns: 1fr minmax(280px, 1456px) 1fr;
  padding: 0px 28px;
  overflow: hidden;
  // padding-bottom: 300px;
  @media(max-width: 800px){
    padding: 0px 12px;
  }
`;

export const HeaderStyled = styled.hgroup`
  max-width: 648px;
  z-index: 50;

  @media(max-width: 1000px){
    max-width: 400px;
  }


  @media(max-width: 800px){
    max-width: 264px;
  }


`;

export const TitleStyled = styled.h2`
  font-family: 'Neue Machina', sans-serif;
  font-style: normal;
  font-size: 6.4rem;
  line-height: 90%;
  font-weight: 800;
  letter-spacing: -0.04em;
  margin-bottom: 40px;
  ::selection {
    background: ${colors.purple};
  }
  
  @media(max-width: 800px){
    max-width: 264px;
    margin-bottom: 16px;
  }
`;

export const SubtitleStyled = styled.h3`
  font-family: 'Circular Air Pro', sans-serif;
  max-width: 464px;
  font-style: normal;
  font-weight: 400;
  font-size: 2.4em;
  line-height: 140%;
  letter-spacing: -0.04em;
  ::selection {
    background: ${colors.purple};
  }

  @media(max-width: 800px){
    max-width: 160px;
  }
`;

export const AsideStyled = styled.aside`
  text-align: right;
  align-self: center;
  font-family: 'Circular Air Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 140%;
  letter-spacing: -0.02em;
  z-index: 2;

  @media(max-width: 800px){
    max-width: 50px;
  }
`;

export const ParagraphStyled = styled.p`
  font-family: 'Circular Air Pro', sans-serif;
  font-family: 'Circular Air Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 140%;
  letter-spacing: -0.02em;
  ::selection {
    background: ${colors.purple};
  }
  
  @media(max-width: 800px){
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
  top: 0px;
  z-index: 1;  
  overflow-x: hidden;
  border-radius: 50%;
  animation: ${SpinningAnimation} 5s linear infinite;
  max-width: 468px;

  img{

    @media(max-width: 1366px){
      max-width: 380px;
    }
  
    @media(max-width: 800px){
      max-width: 248px;
    }
  
    @media(max-width: 414px){
      max-width: 140px;
    }
  }
`;

export const SignContainerStyled = styled.div`
  color: ${colors.dark_gray};
  top: 120px;
  // position: absolute;
  display: none;
`;

export const CustomersContainer = styled.div`
  z-index: 5;  
  grid-column: 2;
`;

export const BlackBg = styled.div`
  margin-top: -5px;
  height: 400px;
  padding-bottom: 50px;
  width:100%;
  background-color: ${colors.black};
  // position: absolute;
`;

export const DiagonalBox = styled.div`
width: 100%;
overflow: hidden;
// position: relative;
transition: 0.2s linear all;
width: 100%;
// margin-top: -200px;
background-color: #5900CC;
background-color:  #171B21;	
// transform: skewY(17.76deg);
`;

export const Contentteste = styled.div`
  // max-width: 50em;
  // transform: rotate(17.76deg);
  
`;