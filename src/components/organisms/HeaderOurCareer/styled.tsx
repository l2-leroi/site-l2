import styled, { keyframes } from 'styled-components';

import { colors } from '../../../styles/colors';

export const ContainerStyled = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 2.8rem;
  background-color: ${colors.black};
  color: ${colors.gray};
  padding-top: 20.5rem;
  h1 {
    margin-top: 4rem;
    width: 50%;
    position: relative;
    ::selection {
      background: ${colors.purple};
      color: ${colors.gray};
    }
    @media (min-width: 801px) and (max-width: 1220px) {
      font-size: 36px;
    }
    @media (max-width: 910px) {
      margin-bottom: 15px;
    }
    @media (orientation: portrait) and (max-width: 800px) {
      margin-top: 80px;
      margin-bottom: 8px;
    }
  }
  h2 {
    margin-bottom: 2.8rem;
    margin-top: 4rem;
    width: 35%;
    height: 136px;
    @media (max-width: 600px) {
      font-size: 24px;
    }
    @media (max-width: 910px) {
      font-size: 24px;
      margin-bottom: 20px;
    }
    @media (max-width: 800px) {
      font-size: 32px;
      margin-bottom: 13px;
    }
    @media (max-width: 500px) {
      &.textWrap {
        max-width: 220px;
        overflow-wrap: break-word;
      }
    }
  }
  p {
    margin-left: 772px;
    margin-top: 15rem;
    width: 10%;
    height: 20px;
    position: absolute;
  }
`;

export const MainTextStyled = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 2.8rem;
  @media (max-width: 500px) {
  }
  h1 {
    margin-top: 4rem;
    width: 10%;
    position: relative;
    ::selection {
      background: ${colors.purple};
      color: ${colors.gray};
    }
    @media (min-width: 801px) and (max-width: 1220px) {
      font-size: 120px;
    }
    @media (max-width: 910px) {
      margin-bottom: 15px;
    }
    @media (orientation: portrait) and (max-width: 800px) {
      margin-top: 120px;
      margin-bottom: 8px;
    }
  }
  h2 {
    margin-bottom: 2.8rem;
    margin-top: 4rem;
    width: 50%;
    height: 136px;
    @media (max-width: 600px) {
      font-size: 60px;
    }
    @media (max-width: 910px) {
      font-size: 120px;
      margin-bottom: 20px;
    }
    @media (max-width: 800px) {
      font-size: 64px;
      margin-bottom: 13px;
    }
    @media (max-width: 500px) {
      &.textWrap {
        max-width: 220px;
        overflow-wrap: break-word;
      }
    }
  }
  p {
    margin-left: 772px;
    margin-top: 15rem;
    width: 10%;
    height: 20px;
    position: absolute;
  }
`;

export const LanguageStyled = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
  position: absolute;
  margin-top: 14rem;
  left: 96%;
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
  /* background-color: aliceblue; */
  display: flex;
  flex-direction: column;
  border-radius: 0.8rem;
  margin-top: 150px;
  margin-bottom: 10px;
  margin-left: 13%;
  min-width: 30%;
  max-width: 70%;
  height: auto;
  position: relative;

  @media (max-width: 500px) {
    margin-top: 0px;
    margin-left: 0px;
    margin-bottom: 0px;
    min-width: 100%;
    max-width: 100%;
    height: auto;
    position: static;
  }
`;

export const DateStyled = styled.div`
  @media (min-width: 801px) and (max-width: 1400px) {
    margin: 0 1rem;
    display: flex;
    width: 92%;
    margin-top: 2.4rem;
    margin-left: 2rem;
    /* background-color: red; */
  }

  /* div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    margin-left: 20px;
    background-color: pink;
  }

  h1 {
    display: flex;
    margin-bottom: 30px;
    margin-top: 50px;
    flex-direction: column;
  } */
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin-left: 40px;
  margin-top: 50px;
  /* background-color: pink; */

  h1 {
    display: flex;
    margin-bottom: 30px;
    margin-top: 50px;
    flex-direction: column;
  }
`;

export const ValidDate = styled.div`
  font-family: 'Neue Machina';
  font-style: normal;
  font-weight: 800;
  font-size: 4rem;
  line-height: 120%;
  letter-spacing: -0.02em;
`;
export const ExpireDate = styled.div`
  font-family: 'Neue Machina';
  font-style: normal;
  font-weight: 800;
  font-size: 4rem;
  line-height: 120%;
  justify-content: space-between;
  letter-spacing: -0.02em;
  text-decoration-line: line-through;
  p {
    margin-top: 4rem;
    width: 33%;
  }
`;

export const TextStyled = styled.p`
  margin-top: 4rem;
  width: 33%;
`;

export const DivButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 16px;
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: 250px;
  gap: 8px;
  width: 50%;
  min-width: 30%;
  max-width: 50%;
  height: auto;
  color: #171b21; ;
`;

export const DivImageStyled = styled.div`
  display: flex;
  width: 100%;
  max-width: 100%;
  height: auto;
  margin-bottom: 80px;
  margin-top: 250px;
  img {
    display: flex;
    width: 50%;
    max-width: 50%;
    height: auto;
    border-radius: 8px;
    position: relative;
  }
  p {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-top: 460px;
    margin-left: 5px;
    text-align: center;
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
  margin-top: 50px;
  margin-bottom: 80px;
`;

export const SpinningIconStyled = styled.div`
  position: absolute;
  left: 0px;
  margin-top: 79%;
  margin-left: -155px;
  overflow-x: hidden;
  animation: ${SpinningAnimation} 5s linear infinite;
  @media (max-width: 800px) {
    max-width: 248px;
  }
  @media (max-width: 414px) {
    max-width: 140px;
  }
`;

export const SpinnerImage = styled.img``;

export const DivTextStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-left: 200px;
  align-self: stretch;
  h1 {
    display: flex;
    flex-direction: column;
    width: 60%;
    margin-top: -930px;
    margin-bottom: 20px;
    margin-left: 550px;
    position: relative;
    font-style: normal;
    color: #f2f3f4;
    ::selection {
      background: ${colors.purple};
      color: ${colors.gray};
    }
    @media (min-width: 801px) and (max-width: 1220px) {
      font-size: 10px;
    }
    @media (max-width: 910px) {
      margin-bottom: 15px;
    }
    @media (orientation: portrait) and (max-width: 800px) {
      margin-top: 120px;
      margin-bottom: 8px;
    }
  }
  p {
    display: flex;
    flex-direction: column;
    width: 34%;
    margin-top: -800px;
    margin-left: 550px;
    font-style: normal;
    font-weight: 400;
    /* font-size: 20px; */
  }
  h2 {
    display: flex;
    flex-direction: column;
    width: 14%;
    margin-top: 320px;
    margin-left: 550px;
    position: relative;
  }
  ul {
    display: flex;
    flex-direction: column;
    bottom: 10px;
    margin-left: 280px;
    margin-top: -60px;
    width: 80%;
  }
  li {
    width: 80%;
    margin-left: 280px;
    bottom: 50px;
    position: relative;
    list-style: '+ ';
  }
`;

export const DivButtonStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 16px;
  margin-top: -10px;
  margin-bottom: 100px;
  margin-left: 510px;
  gap: 8px;
  width: 100%;
  min-width: 30%;
  max-width: 70%;
  height: auto;
  color: #171b21;
`;
