import styled, { keyframes } from 'styled-components';

interface Props {
  lineBg?: string;
  secondaryBg?: string;
}

export const LineStyled = styled.div<Props>`
  clip-path: polygon(
    0 -1px,
    100% -1px,
    100% calc(100% - 50px),
    0 calc(100% - 50px)
  );
  transition: clip-path 0.5s ease;
  background-color: ${(props) => props.secondaryBg};
  height: 100%;
  box-sizing: padding-box;
  z-index: 20;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1;
`;

export const TextContainerStyled = styled.div`
  position: absolute;
  z-index: 21;
  width: 105%;
  top: calc(100% - 50px - 7em);
`;

export const LineContainerStyled = styled.div<Props>`
  margin-bottom: -50px;
  background-color: ${(props) => props.lineBg};
  border-color: ${(props) => props.secondaryBg};
  position: relative;
  overflow-x: clip;
`;

export const Sup = styled.div<Props>`
  width: 100%;
  height: 2px;
  position: absolute;
  bottom: 0;
  background-color: ${(props) => props.lineBg};
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
