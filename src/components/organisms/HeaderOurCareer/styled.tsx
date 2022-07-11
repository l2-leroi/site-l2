import styled, { keyframes } from 'styled-components';

import { colors } from '../../../styles/colors';

export const ContainerStyled = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  padding-left: 28px;
  background-color: ${colors.black};
  color: ${colors.gray};
  padding-top: 20.5rem;
  float: none;
  h1 {
    margin-top: 4rem;
    margin-bottom: 30px;
    width: 50%;
    position: relative;

    @media (max-width: 930px), (max-width: 800px) {
      font-size: 36px;
      margin-top: 100px;
      margin-bottom: 10px;
    }

    @media (max-width: 414px), (max-width: 376px) {
      font-size: 36px;
      width: 80%;
      max-width: 80%;
    }
  }
  h2 {
    margin-bottom: -38px;
    margin-top: 20px;
    width: 35%;
    height: 136px;
    float: none;
    @media (max-width: 930px), (max-width: 801px) {
      font-size: 24px;
    }
    @media (max-width: 414px), (max-width: 376px) {
      font-size: 12px;
      width: 50%;
    }
  }

  p {
    margin-left: 772px;
    margin-top: 15rem;
    width: 10%;
    height: 20px;
    position: absolute;
    @media (max-width: 930px), (max-width: 801px) {
      font-size: 12px;
      margin-left: 710px;
    }
    @media (max-width: 414px), (max-width: 376px) {
      font-size: 10px;
      margin-left: 260px;
      margin-top: 180px;
      margin-bottom: 20px;
      text-align: center;
    }
  }
`;

export const LanguageStyled = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
  position: absolute;
  margin-top: 14rem;
  left: 90%;

  @media (min-height: 416px) and (max-width: 800px) {
    position: static;
    flex-direction: row;
    margin-top: 32px;
    gap: 16px;
  }

  @media (max-height: 415px), (max-width: 500px) {
    opacity: 0;
    gap: 9px;
  }
  &.animate {
    opacity: 1;
    transition: opacity 0.8s;
  }
  button {
    background: transparent;
    cursor: pointer;
    border: none;
    &.white {
      color: white;
    }
    a {
      ::selection {
        background: ${colors.purple};
        color: ${colors.gray};
      }
    }
    &:first-child {
      margin-bottom: 8px;
    }

    @media (min-width: 500px) {
      &:hover {
        color: ${colors.green};
      }
    }

    @media (max-width: 800px) {
      font-size: 10px;
      &:first-child {
        margin-bottom: 0px;
      }
    }
  }
`;

export const DivStyled = styled.div`
  background-color: rgba(36, 42, 51, 1);
  display: flex;
  flex-direction: column;
  border-radius: 0.8rem;
  margin-top: 150px;
  margin-bottom: -60px;
  margin-left: 13%;
  min-width: 30%;
  max-width: 70%;
  height: auto;
  position: relative;
  border-radius: 8px;
  @media (max-width: 930px), (max-width: 800px) {
    margin-left: 8px;
    width: 95%;
    max-width: 95%;
  }

  @media (max-width: 414px), (max-width: 376px) {
    margin-top: 20px;
    margin-left: -15px;
    margin-bottom: 0px;
    width: 100%;
    max-width: 100%;
  }
`;

export const DateStyled = styled.div`
  margin: 0 1rem;
  display: flex;
  width: 92%;
  margin-top: 2.4rem;
  margin-left: 2rem;

  @media (max-width: 414px), (max-width: 376px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin-left: 40px;
  margin-top: 50px;
  @media (max-width: 414px), (max-width: 376px) {
    font-size: 12px;
    flex-direction: column;
    margin-left: 10px;
  }

  h1 {
    display: flex;
    margin-bottom: 30px;
    margin-top: 30px;
    flex-direction: column;
    align-items: center;
    @media (max-width: 930px), (max-width: 800px) {
      font-size: 20px;
      flex-direction: column;
      margin-left: 15 0px;
      margin-top: 0px;
      margin-bottom: 5px;
    }
    @media (max-width: 414px), (max-width: 376px) {
      font-size: 12px;
      flex-direction: column;
      margin-left: 15 0px;
      margin-top: -10px;
      margin-bottom: 5px;
    }
  }

  p {
    margin-bottom: 2.8rem;
    margin-top: 25px;
    width: 50%;
    height: 136px;
    margin-left: 0px;
    text-align: center;

    @media (max-width: 930px), (max-width: 800px) {
      font-size: 20px;
      margin-top: 20px;
      width: 35%;
      max-width: 35%;
      text-align: center;
    }
    @media (max-width: 414px), (max-width: 376px) {
      font-size: 12px;
      margin-top: -30px;
      width: 55%;
      max-width: 70%;
      text-align: center;
    }
  }
`;

export const ValidDate = styled.div`
  display: flex;
  font-family: 'circular Air Pro';
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 120%;
  letter-spacing: -0.02em;
  @media (max-width: 414px), (max-width: 376px) {
    font-size: 20px;
    flex-direction: column;
    margin-left: 10px;
  }
`;
export const ExpireDate = styled.div`
  display: flex;
  font-family: 'Neue Machina';
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 120%;
  justify-content: space-between;
  letter-spacing: -0.02em;
  text-decoration-line: line-through;
  @media (max-width: 414px), (max-width: 376px) {
    font-size: 20px;
    flex-direction: column;
    margin-left: 10px;
  }
`;

export const DivButton = styled.div`
  display: flex;
  justify-content: center;
  padding: 0px 16px;
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: 240px;
  gap: 8px;
  width: 50%;
  min-width: 30%;
  max-width: 50%;
  height: auto;
  color: #171b21;
  @media (max-width: 414px), (max-width: 376px) {
    flex-direction: row;
    margin-left: 10px;
    width: 100%;
    max-width: 100%;
  }
`;

export const DivImageStyled = styled.div`
  display: flex;
  width: 100%;
  max-width: 100%;
  height: auto;
  margin-bottom: 80px;
  margin-top: 270px;
  img {
    display: flex;
    width: 50%;
    max-width: 50%;
    margin-top: 100px;
    height: auto;
    border-radius: 8px;
    position: relative;

    @media (max-width: 930px), (max-width: 800px) {
      flex-direction: column;
      width: 96%;
      max-width: 96%;
      margin-left: 8px;
      margin-top: 120px;
      border-radius: 10px;
    }

    @media (max-width: 414px), (max-width: 376px) {
      flex-direction: column;
      width: 100%;
      max-width: 100%;
      margin-left: -15px;
      margin-top: -110px;
      border-radius: 10px;
    }
  }
  p {
    display: block;
    flex-direction: column;
    width: 50%;
    margin-top: 545px;
    margin-left: 10px;
    text-align: center;

    @media (max-width: 1280px) {
      margin-top: 525px;
    }

    @media (max-width: 930px), (max-width: 800px) {
      font-size: 20px;
      margin-top: 700px;
      width: 90%;
      max-width: 90%;
    }
    @media (max-width: 414px) {
      font-size: 12px;
      margin-top: 90px;
      width: 90%;
      max-width: 90%;
      margin-left: -10px;
    }

    @media (max-width: 412px) {
      font-size: 12px;
      margin-top: 150px;
      width: 90%;
      max-width: 90%;
      margin-left: -10px;
    }
    @media (max-width: 376px) {
      font-size: 12px;
      margin-top: 130px;
      width: 90%;
      max-width: 90%;
      margin-left: -10px;
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

export const ArrowSpinnerContainerStyled = styled.div`
  display: flex;
  margin-left: 150px;
  margin-top: 100px;
  margin-bottom: 80px;

  @media (max-width: 414px), (max-width: 376px) {
    width: 65px;
    max-width: 70px;
    margin-left: -18px;
  }
`;

export const SpinnerImage = styled.img`
  @media (max-width: 930px), (max-width: 800px) {
    width: 200px;
    max-width: 200px;
  }
  @media (max-width: 414px), (max-width: 376px) {
    width: 110px;
    max-width: 150px;
  }
`;

export const SpinningIconStyled = styled.div`
  position: absolute;
  left: 0px;
  margin-top: 64%;
  margin-left: -155px;
  overflow-x: hidden;
  animation: ${SpinningAnimation} 5s linear infinite;
  @media (max-width: 930px), (max-width: 800px) {
    margin-left: -60px;
    margin-top: 950px;
  }
  @media (max-width: 414px), (max-width: 376px) {
    margin-left: 300px;
    margin-top: 815px;
  }
`;

export const DivTextStyled = styled.div`
  float: right;
  h1 {
    display: flex;
    flex-direction: column;
    width: 30%;
    max-width: 30%;
    margin-top: -960px;
    margin-bottom: 20px;
    margin-left: 750px;
    position: relative;
    font-style: normal;
    color: #f2f3f4;

    @media (max-width: 930px), (max-width: 800px) {
      font-size: 36px;
      width: 30%;
      max-width: 30%;
      margin-left: 500px;
      margin-top: -280px;
      font-family: 'Circular Air Pro';
    }

    @media (max-width: 414px), (max-width: 376px) {
      font-size: 14px;
      margin-left: 100px;
      margin-top: -280px;
      font-family: 'Circular Air Pro';
    }
  }
  p {
    display: flex;
    flex-direction: column;
    width: 34%;
    max-width: 34%;
    margin-top: 4px;
    margin-left: 760px;
    font-style: normal;
    font-weight: 400;
    /* font-size: 20px; */

    @media (max-width: 930px), (max-width: 800px) {
      font-size: 20px;
      margin-left: 500px;
      margin-top: 0px;
      width: 28%;
      max-width: 30%;
    }
    @media (max-width: 414px), (max-width: 376px) {
      font-size: 10px;
      margin-left: 100px;
      margin-top: 0px;
      width: 50%;
      max-width: 50%;
    }
  }
  h2 {
    display: flex;
    flex-direction: column;
    width: 14%;
    margin-top: 320px;
    margin-left: 760px;
    position: relative;

    @media (max-width: 930px), (max-width: 800px) {
      font-size: 20px;
      margin-left: 500px;
      margin-top: 420px;
    }

    @media (max-width: 414px), (max-width: 376px) {
      font-size: 12px;
      margin-left: 100px;
      margin-top: 180px;
    }
  }
  ul {
    display: block;
    flex-direction: column;
    position: relative;
    bottom: 10px;
    margin-left: 785px;
    margin-top: -60px;
    width: 30%;
    max-width: 30%;

    @media (max-width: 930px), (max-width: 800px) {
      font-size: 20px;
      margin-left: 500px;
      width: 40%;
      max-width: 40%;
      top: -40px;
    }
    @media (max-width: 414px), (max-width: 376px) {
      font-size: 12px;
      margin-left: 100px;
      width: 60%;
      max-width: 60%;
      top: -50px;
    }
  }
  li {
    list-style: '+ ';
  }
`;

export const DivButtonStyled = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px 16px;
  margin-top: 80px;
  margin-bottom: 100px;
  margin-left: 730px;
  gap: 8px;
  width: 40%;
  max-width: 40%;
  height: auto;
  color: #171b21;
  float: right;
  @media (max-width: 930px), (max-width: 800px) {
    font-size: 20px;
    width: 50%;
    max-width: 50%;
    margin-top: 50px;
    margin-left: 450px;
  }

  @media (max-width: 414px), (max-width: 376px) {
    font-size: 20px;
    margin-left: 50px;
    margin-top: 30px;
    width: 82%;
    max-width: 100%;
  }
`;
