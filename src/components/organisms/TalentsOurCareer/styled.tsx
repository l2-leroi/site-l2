import styled, { keyframes } from 'styled-components';
import { colors } from '../../../styles/colors';

export const ContainerStyled = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${colors.gray};
  overflow: hidden;
  padding-top: 20rem;
  /* padding-bottom: 20rem; */
`;

export const DivTextStyled = styled.div`
  width: 100%;
  max-width: 100%;
  margin-top: -180px;
  margin-left: 90px;
  align-items: center;
  display: flex;
  flex-direction: column;

  h1 {
    display: flex;
    width: 45%;
    max-width: 45%;
    align-self: center;
    margin-left: 0px;
    margin-bottom: 40px;
    @media (max-width: 930px) {
      font-size: 36px;
      margin-left: -550px;
    }
    @media (max-width: 414px) {
      font-size: 24px;
      margin-top: 150px;
      margin-left: -90px;
    }
  }

  p {
    display: flex;
    width: 35%;
    max-width: 35%;
    margin-left: -135px;
    align-self: center;
    margin-bottom: 40px;
    @media (max-width: 930px) {
      font-size: 24px;
    }
    @media (max-width: 414px) {
      font-size: 12px;
      margin-top: -15px;
      margin-left: -140px;
      width: 33.5%;
      max-width: 45%;
    }
  }

  .line {
    width: 90%;
    border-bottom: 2px solid #8e9195;
    margin-left: 620px;
    margin-top: 30px;
    margin-bottom: 60px;
    @media (max-width: 1280px) {
      margin-left: 570px;
    }
    @media (max-width: 930px) {
      margin-top: 30px;
      margin-left: 380px;
    }
    @media (max-width: 414px) {
      margin-top: 20px;
      margin-left: 95px;
    }
  }
`;

export const DivText = styled.div`
  width: 100%;
  max-width: 100%;
  margin-top: 0px;
  margin-left: 90px;
  align-items: center;
  display: flex;
  flex-direction: column;

  h1 {
    display: flex;
    width: 45%;
    max-width: 45%;
    align-self: center;
    margin-left: 0px;
    margin-bottom: 40px;
    @media (max-width: 930px) {
      font-size: 36px;
      margin-left: -40px;
      margin-top: 0px;
    }
    @media (max-width: 414px) {
      font-size: 24px;
      margin-top: 0px;
      margin-left: -65px;
      width: 55%;
      max-width: 80%;
    }
  }

  p {
    display: flex;
    width: 35%;
    max-width: 35%;
    margin-left: -135px;
    align-self: center;
    margin-bottom: 40px;
    @media (max-width: 930px) {
      font-size: 24px;
    }
    @media (max-width: 414px) {
      font-size: 12px;
      margin-top: -15px;
      margin-left: -130px;
      width: 38.6%;
      max-width: 55%;
    }
  }
`;

export const DivImageStyled = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
  margin-top: 5px;
  margin-left: 460px;
  gap: 30px;

  @media (max-width: 930px) {
    margin-left: 348px;

    gap: 5px;
  }
  @media (max-width: 414px) {
    margin-left: 142px;
    margin-top: -20px;
    gap: 1px;
  }

  img {
    display: flex;
    margin-bottom: 20px;
    border-radius: 20px;
    @media (max-width: 1280px) {
      margin: 0px 60px 40px -30px;
    }
    @media (max-width: 930px) {
      width: 100px;
    }

    @media (max-width: 414px) {
      width: 64px;
    }
  }
`;

export const DivTextParagraph = styled.div`
  width: 100%;
  max-width: 100%;
  margin-top: 20px;
  margin-left: 80px;
  align-items: center;
  display: flex;
  flex-direction: column;
  p {
    display: flex;
    width: 35%;
    max-width: 35%;
    margin-left: -120px;
    margin-top: -20px;
    align-self: center;
    margin-bottom: 40px;
    @media (max-width: 930px) {
      font-size: 24px;
    }
    @media (max-width: 414px) {
      font-size: 12px;
      margin-top: -30px;
      margin-left: -102px;
      width: 41%;
      max-width: 55%;
    }
  }

  .line {
    width: 90%;
    border-bottom: 2px solid #8e9195;
    margin-left: 620px;
    margin-top: 30px;
    margin-bottom: 60px;
    @media (max-width: 1280px) {
      margin-left: 570px;
    }
    @media (max-width: 930px) {
      margin-top: 30px;
      margin-left: 380px;
    }
    @media (max-width: 414px) {
      margin-top: 0px;
      margin-left: 95px;
    }
  }
`;

export const DivParagraph = styled.div`
  width: 100%;
  max-width: 100%;
  margin-top: -100px;
  margin-left: 90px;
  align-items: center;
  display: flex;
  flex-direction: column;
  h1 {
    display: flex;
    width: 45%;
    max-width: 45%;
    align-self: center;
    margin-left: 5px;
    margin-bottom: 40px;
    margin-top: 100px;
    @media (max-width: 930px) {
      font-size: 36px;
      margin-left: -50px;
      margin-top: 120px;
    }
    @media (max-width: 414px) {
      font-size: 24px;
      margin-top: 80px;
      margin-left: -120px;
    }
  }
  p {
    display: flex;
    width: 35%;
    max-width: 35%;
    margin-left: -120px;
    align-self: center;
    margin-top: 50px;
    @media (max-width: 930px) {
      font-size: 24px;
      margin-left: -140px;
    }
    @media (max-width: 414px) {
      font-size: 12px;
      margin-top: 0px;
      margin-left: -120px;
      width: 45%;
      max-width: 50%;
    }
  }
  h2 {
    display: flex;
    width: 35%;
    max-width: 35%;
    margin-left: -120px;
    align-self: center;
    margin-top: 50px;
    @media (max-width: 930px) {
      font-size: 24px;
      margin-left: -140px;
    }
    @media (max-width: 414px) {
      font-size: 12px;
      margin-top: 10px;
      margin-left: -120px;
      width: 45%;
      max-width: 50%;
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
  display: inline-flex;
  margin-left: 60px;
  margin-top: -130px;

  @media (max-width: 930px) {
    margin-left: 40px;
    margin-top: 50px;
  }
  @media (max-width: 414px) {
    div {
      .animate {
        width: 72.01px;
        height: 72.01px;
      }
    }

    margin-top: -60px;
  }
`;
