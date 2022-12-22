import styled, { keyframes } from 'styled-components';

interface Props {
  bottomBgColor?: string;
  topBgColor?: string;
}

export const TextContainerStyled = styled.div`
  height: 0;
  margin-top: -50px;
  margin-bottom: 50px;
  > div {
    position: relative;
    overflow: hidden;
    height: 1000px;
    @media (max-width: 800px) {
      height: 600px;
    }
    > div {
      position: absolute;
      z-index: 50;
      width: 110%;
      margin-left: -5%;
    }
  }
`;
export const LineBg = styled.div<Props>`
  margin-top: -1px;
  background-color: ${(props) => props.topBgColor};
`;

export const LineContainerStyled = styled.div<Props>`
  background-color: ${(props) => props.bottomBgColor};
  border-color: ${(props) => props.topBgColor};
  position: relative;
  overflow-x: clip;
  background: ${(props) => props.bottomBgColor};
  z-index: 50;
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
  height: 0;
  position: relative;
  z-index: 52;
  margin-top: -100px;
  margin-bottom: 100px;
  > div {
    position: relative;
    overflow: hidden;
    height: 1000px;
    > div {
      position: absolute;
      right: 0px;
      z-index: 10;
      border-radius: 50%;
      animation: ${SpinningAnimation} 27s linear infinite;
      max-width: 468px;
      transition: top 0.5s ease;

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
    }
  }
`;
