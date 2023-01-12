import styled, { keyframes } from 'styled-components';

export const ArrowSpinnerComponentStyled = styled.div`
  position: sticky;
  top: 108px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SpinningAnimation = keyframes`
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

export const ImageArrowSpinnerStyled = styled.img`
  &.absolute {
    position: absolute;
    margin: 0 auto;
  }
  &.animate {
    animation: ${SpinningAnimation} 27s linear infinite forwards;
  }
  @media (max-width: 800px) {
    &:first-child {
      width: 113px;
      height: 113px;
    }
    &:last-child {
      width: 12px;
      height: 12px;
    }
    @media (max-width: 500px) {
      &:first-child {
        width: 72px;
        height: 72px;
      }
    }
  }
`;
