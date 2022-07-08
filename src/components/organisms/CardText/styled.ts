// import styled from 'styled-components';
import styled, { keyframes } from 'styled-components';
import { colors } from '../../../styles/colors';

interface CardTextPropsBgColor {
  bgColor: string;
}
interface CardTextPropsBgImage {
  bgImage: string;
}

export const SectionOnePageStyled = styled.section<CardTextPropsBgColor>`
  display: flex;
  background-color: ${(props) => (props.bgColor ? props.bgColor : 'none')};
  height: 938px;
  width: 100%;
  max-width: 100%;
`;

export const DivImageStyled = styled.div<CardTextPropsBgImage>`
  background-image: url(${(props) => (props.bgImage ? props.bgImage : 'none')});
  background-size: cover;
  background-position: center;
  position: absolute;

  display: flex;
  width: 100%;
  max-width: 50%;
  height: 938px;

  float: left;
  @media (max-width: 400px) {
    max-width: 30%;
  }
`;

export const DivItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
  justify-content: center;
  margin: 0px;
  width: 100%;
  display: flex;
  float: right;
  right: 0;
  position: absolute;
  gap: 24px;

  padding-top: 251px;
  padding-left: 140px;
  padding-right: 152px;

  @media (max-width: 1060px) {
    padding-left: 36px;
  }

  @media (max-width: 800px) {
    padding-top: 110px;
    padding-left: 66px;
    padding-right: 120px;

    @media (max-width: 700px) {
      padding-right: 110px;
    }
    @media (max-width: 550px) {
      padding-right: 80px;
    }
  }

  @media (max-width: 600px) {
    padding-top: 90px;
    padding-left: 46px;
    padding-right: 100px;
  }

  @media (max-width: 500px) {
    padding-top: 80px;
    padding-left: 16px;
    padding-right: 90px;
  }

  @media (max-width: 400px) {
    max-width: 70%;
  }

  @media (max-width: 360px) {
    gap: 20px;
    padding-top: 60px;
    padding-left: 16px;
    padding-right: 71px;
  }

  ul {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    bottom: 1px;
  }

  li {
    list-style-type: none;
  }

  h1 {
    ::selection {
      background: ${colors.purple};
      color: ${colors.gray};
    }
  }

  p {
    ::selection {
      background: ${colors.purple};
      color: ${colors.gray};
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
  position: absolute;
  left: 0px;
  margin-left: -155px;
  overflow-x: hidden;
  animation: ${SpinningAnimation} 5s linear infinite;
  margin-top: 705px;

  @media (max-width: 800px) {
    margin-left: -80px; // 80% da metade da largura
    margin-top: 838px;
  }

  @media (max-width: 400px) {
    margin-left: -56px; // 80% da metade da largura
    margin-top: 868px;
  }
`;

export const SpinnerImage = styled.img`
  @media (max-width: 800px) {
    max-width: 200px;
  }

  @media (max-width: 400px) {
    max-width: 139px;
  }
`;
