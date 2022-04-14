import styled from 'styled-components';
export const Teste = styled.section`
  height: 100%;
`;
export const Container = styled.div`
  background: #171b21;
  display: flex;
  justify-content: space-between;
  height: 100vh;
`;
export const DivLogo = styled.div`
  padding-left: 28px;
  padding-top: 45px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;
  @media (max-width: 930px) {
    height: 450px;
    width: 10%;
  }
`;

export const DivTextMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 28px;
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
`;
export const DivLine = styled.div`
  width: 84px;
  height: 0;
  border: 1px solid #f2f3f4;
  background-color: #f2f3f4;
  margin-right: 24px;
  margin-left: 24px;
`;

export const DivMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 930px) {
    width: 10%;
    height: 450px;
  }
`;

export const DivContact = styled.div`
  display: flex;
  align-items: center;
  margin-right: 28px;
  @media (max-width: 930px) {
    transform: rotate(90deg);
    width: 200%;
  }
`;
export const TextMenu = styled.p`
  padding-left: 10px;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  font-family: 'Circular Air Pro';
  letter-spacing: -0.04em;
  color: #f2f3f4;
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
  color: #f2f3f4;
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
  color: #f2f3f4;

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
  color: #f2f3f4;

  @media (max-width: 930px) {
    font-size: 12px;
    line-height: 17px;
  }
`;

export const ImageStyled = styled.img``;
