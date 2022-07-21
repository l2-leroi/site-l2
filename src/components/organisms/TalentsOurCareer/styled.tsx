import styled, { keyframes } from 'styled-components';
import { colors } from '../../../styles/colors';

export const ContainerStyled = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: ${colors.gray};
  overflow: hidden;
`;

export const DivTextStyled = styled.div``;

export const DivMainTextStyled = styled.div`
  align-self: flex-start;
  align-items: stretch;
  justify-content: flex-end;
  width: 65%;
  // width: 70%;
  display: flex;
  flex-direction: column;

  h1 {
    align-self: flex-start;
    display: flex;
    // width: 45%;
    width: 70%;
    // max-width: 45%;
    margin-bottom: 40px;

    @media (max-width: 400px) {
      margin-bottom: 20px;
    }
  }

  p {
    align-self: flex-start;
    display: flex;
    // max-width: 35%;
    max-width: 47%;
    // margin-bottom: 40px;

    @media (max-width: 400px) {
      max-width: 70%;
    }
  }

  p:last-child {
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
      border-radius: 40px;
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
  // width: 30%;
  align-items: flex-start;
  display: flex;

  div {
    width: 100%;
  }
`;

export const ContainerMainStyled = styled.div`
  padding-bottom: 20rem;
  .anime {
    margin-top: -60px;
  }
`;

export const ContainerStyledCarroussel = styled.div`
  display: flex;
  justify-content: flex-end;
`;
