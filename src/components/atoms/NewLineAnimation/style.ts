import styled, { keyframes } from 'styled-components';

interface Props {
  bottomBgColor?: string;
  topBgColor?: string;
}

export const TextContainerStyled = styled.div`
  position: absolute;
  z-index: 21;
  width: 105%;
  top: calc(50px - 7em);
`;
export const LineBg = styled.div<Props>`
  background-color: ${(props) => props.topBgColor};
`;

export const LineContainerStyled = styled.div<Props>`
  background-color: ${(props) => props.bottomBgColor};
  border-color: ${(props) => props.topBgColor};
  position: relative;
  overflow-x: clip;
  background: ${(props) => props.bottomBgColor};
  z-index: 100;
  transition: clip-path 0.5s ease;
`;

export const Sup = styled.div<Props>`
  width: 100%;
  height: 0px;
  position: absolute;
  bottom: 0;
  background-color: ${(props) => props.bottomBgColor};
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
  transition: bottom 0.5s ease;

  img {
    ::selection {
      background: transparent;
    }
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
