import styled, { keyframes } from "styled-components";
import { colors } from '../../../styles/colors';

interface Props{
    lineBg?: string;
    secondaryBg?: string;
}

export const LineStyled = styled.div<Props>`
    clip-path: polygon(0px 0%, 100% 100%, 100% 100%, 0% 100%);
    background-color: ${props => props.lineBg};
    height: 0px;
    box-sizing: padding-box;
    z-index: 20;
    transition: all 0.5s ease;
`;

export const TextContainerStyled = styled.div`
    position: absolute; 
    transition: all 0.5s ease;
    z-index: 21;
`;

export const LineContainerStyled = styled.div<Props>`
    background-color: ${props => props.secondaryBg}; 
    position: relative;
    overflow-x: clip;
`;

export const Sup = styled.div`
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: 0;
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
  transition: top 0.5s ease;

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