import styled, { keyframes } from 'styled-components';

import { colors } from '../../../styles/colors';

export const ContainerText = styled.section`
  display: flex;
  flex-direction: row;
  padding-left: 28px;
  padding-right: 28px;
  background-color: ${colors.black};
  color: ${colors.gray};
  padding-top: 10.5rem;
  padding-bottom: 0.5rem;
  overflow: hidden;

  @media (max-width: 1260px) {
    flex-direction: column;
  }
`;
export const DivImageStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10rem;
  height: auto;

  img {
    border-radius: 10px;
    z-index: 1;
  }
  p {
    text-align: center;
    font-size: 24px;
    margin-top: 32px;

    @media (max-width: 600px) {
      font-size: 12px;
    }
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
  display: flex;
  position: absolute;
  margin-left: -150px;
  z-index: 1;
  top: 115rem;

  @media (max-width: 1260px) {
    top: -20rem;
    margin-left: 75%;
    position: relative;
  }
`;
export const SpinnerImage = styled.img`
  position: absolute;
  max-width: 350px;
  animation: ${SpinningAnimation} 5s linear infinite;
  @media (max-width: 800px) {
    max-width: 180px;
  }
`;

export const ArrowSpinnerContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10rem;
  margin-left: 15%;
  width: 35%;
  z-index: 2;
  @media (max-width: 1260px) {
    margin-left: 0;
  }
  @media (max-width: 800px) {
    div {
      .animate {
        width: 72.01px;
        height: 72.01px;
      }
    }
  }
`;

export const DivTextStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8%;
  max-width: 60%;

  @media (max-width: 1260px) {
    margin-left: 30%;
  }

  h1 {
    @media (max-width: 1260px) {
    }
    @media (max-width: 800px) {
      font-size: 20px;
    }
  }

  p {
    margin-top: 25px;
    @media (max-width: 800px) {
    }
  }

  h2 {
    margin-top: 40px;
    @media (max-width: 800px) {
      margin-top: 20px;
    }
  }

  ul li {
    margin-top: 10px;
    list-style: '+ ';
  }

  .button {
    display: flex;
    margin-top: 60px;
    margin-bottom: 60px;
    align-items: center;
    color: ${colors.black};
    overflow: hidden;
  }
`;
