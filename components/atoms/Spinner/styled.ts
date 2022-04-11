import styled, { keyframes } from 'styled-components';

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

export const SpinnerImage = styled.img`
`;