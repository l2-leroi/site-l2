import styled, { keyframes } from 'styled-components';
import { colors } from '../../../styles/colors';

export const ContainerStyled = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: ${colors.gray};
  overflow: inherit;
`;

export const DivMainTextStyled = styled.div`
  align-self: flex-start;
  align-items: stretch;
  justify-content: flex-end;
  width: 65%;
  display: flex;
  flex-direction: column;
  padding-top: 10.5rem;

  @media (max-width: 400px) {
    margin-top: 40px;
  }

  h1 {
    align-self: flex-start;
    display: flex;
    width: 70%;
    margin-bottom: 40px;

    @media (max-width: 400px) {
      margin-bottom: 20px;
    }
  }

  p {
    align-self: flex-start;
    display: flex;
    max-width: 47%;

    @media (max-width: 400px) {
      max-width: 70%;
    }
  }

  p:nth-child(11) {
    margin-top: 40px;
    margin-bottom: 40px;

    @media (max-width: 400px) {
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }

  .line {
    width: 100%;
    border-bottom: 1px solid #8e9195;
    margin-top: 80px;
    margin-bottom: 80px;

    @media (max-width: 400px) {
      margin-top: 40px;
      margin-bottom: 40px;
    }
  }
`;

export const DivImageStyled = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 100%;
  height: auto;
  margin-bottom: 40px;
  margin-top: 40px;
  gap: 30px;

  img {
    min-width: 0px;
    display: flex;
    margin-bottom: 20px;
    border-radius: 18px;

    @media (max-width: 400px) {
      border-radius: 10px;
    }
  }

  @media (max-width: 400px) {
    margin-bottom: 20px;
    margin-top: 20px;
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

export const ArrowSpinnerContainerStyled = styled.div`
  width: 35%;
  align-items: flex-start;
  display: flex;
  z-index: 1;

  div {
    width: 100%;
  }
`;

export const ContainerMainStyled = styled.div`
  overflow: inherit;

  .anime {
    margin-top: 60px;
    margin-bottom: -160px;
  }
`;
