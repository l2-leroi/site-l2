import styled, { keyframes } from 'styled-components';

import { colors } from '../../../styles/colors';
import ScrollCircle from '../../atoms/ScrollCircle';

export const ContainerStyled = styled.section`
  display: flex;
  flex-direction: row;
  padding-left: 28px;
  padding-right: 28px;
  background-color: ${colors.black};
  padding-top: 10.5rem;
  padding-bottom: 10.5rem;
  overflow: hidden;

  /* z-index: -1; */
  /* overflow: inherit; */

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

export const DivTextStyled = styled.div`
  /* align-self: flex-start;
  align-items: stretch;
  justify-content: flex-end; */
  display: flex;
  flex-direction: column;
  margin-left: 8%;
  max-width: 60%;

  @media (max-width: 1260px) {
    margin-left: 30%;
  }

  h1 {
    @media (max-width: 1260px) {
      margin-top: 30px;
    }
    @media (max-width: 800px) {
      font-size: 20px;
      /* margin-top: 30px; */
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
    margin-left: 5%;
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
