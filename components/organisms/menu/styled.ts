import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const Teste = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  height: 100vh;
  background: ${colors.black};
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  ::-webkit-scrollbar {
    display: none;
  }
`;
export const DivLogo = styled.div`
  padding-left: 28px;
  padding-top: 45px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;
  @media (max-width: 500px) {
    img {
      display: none !important;
    }
  }
`;

export const DivTextMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 8px;
  margin-top: 33px;
`;

export const ButtonClose = styled.div`
  cursor: pointer;
`;
export const DivText = styled.div`
  @media (max-width: 930px) {
    display: none;
    visibility: hidden;
  }
`;

export const DivLanguage = styled.div`
  margin-right: 28px;
  @media (max-width: 750px) {
    margin-top: 50px;
  }
`;
export const DivLine = styled.div`
  width: 84px;
  height: 0;
  border: 1px solid ${colors.gray};
  background-color: ${colors.gray};
  margin-right: 24px;
  margin-left: 24px;
`;

export const DivMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 750px) {
    justify-content: flex-start;
  }
`;

export const DivContact = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.6vw;
  @media (max-width: 750px) {
    transform: rotate(90deg);
    width: 10%;
    position: absolute;
    bottom: 26rem;
    margin-right: 20px;
  }
`;
export const TextMenu = styled.p`
  padding-left: 10px;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  font-family: 'Circular Air Pro';
  letter-spacing: -0.04em;
  color: ${colors.gray};
  margin: 0;
`;

export const ParagraphContactUs = styled.p``;
export const ParagraphLanguage = styled.p`
  font-family: 'Circular Air Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.02em;
  color: ${colors.gray};
  text-align: right;

  @media (max-width: 930px) {
    font-size: 10px;
    line-height: 27px;
  }
`;
export const ParagraphOne = styled.p`
  font-family: 'Circular Air Pro';
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.02em;
  color: ${colors.gray};

  @media (max-width: 930px) {
    font-size: 12px;
    line-height: 17px;
  }
`;

export const ParagraphTwo = styled.p`
  font-family: 'Circular Air Pro';
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.04em;
  color: ${colors.gray};

  @media (max-width: 930px) {
    font-size: 12px;
    line-height: 17px;
  }
`;

export const ImageStyled = styled.img``;
