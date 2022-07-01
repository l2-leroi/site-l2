import styled, { keyframes } from 'styled-components';

interface Props {
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
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 1;
`;

export const TextContainerStyled = styled.div`
  position: absolute;
  transition: transform 0.5s ease;
  z-index: 21;
  bottom: 0px;
  right: 0px;
  width: 105%;
`;

export const LineContainerStyled = styled.div<Props>`
  background-color: ${(props) => props.secondaryBg};
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
  z-index: 10;
  border-radius: 50%;
  animation: ${SpinningAnimation} 27s linear infinite;
  max-width: 468px;
  transition: top 0.5s ease;

  img {
    @media (max-width: 1366px) {
      max-width: 380px;
    }

    @media (max-width: 800px) {
      max-width: 248px;
    }

    @media (max-width: 414px) {
      max-width: 140px;
    }
  }
`;
