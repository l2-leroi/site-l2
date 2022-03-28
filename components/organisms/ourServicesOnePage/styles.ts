import styled from 'styled-components';

export const SectionOnePageStyled = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 10vh;
  margin-bottom: 10vh;
`;

export const ContentOnePageStyled = styled.div`
  background: #171b21;
  border-radius: 8px;
  width: 1220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 450px) {
    width: 100%;
  }

`;

export const DivServicesStyled = styled.div`
  margin-top: 90px;
  display: flex;
  text-align: center;
  flex-direction: column;
  margin-bottom: 80px;
  align-items: center;
  @media (max-width: 450px) {
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;

export const HeadingStyled = styled.p`
  ::selection {
    background: #5900cc;
  }
  width: 464px;
  font-family: 'Neue Machina';
  font-weight: 800;
  font-size: 64px;
  line-height: 58px;
  letter-spacing: -0.04em;
  color: #f2f3f4;
  margin: 0;
  @media (max-width: 760px) {
    font-size: 32px;
    padding-bottom: 20px;
    width: 264px;
    line-height: 29px;
  }
`;

export const ParagraphServicesStyled = styled.p`
  ::selection {
    background: #5900cc;
  }
  width: 464px;
  font-family: 'Circular Air Pro';
  font-weight: 400;
  font-size: 24px;
  line-height: 34px;
  letter-spacing: -0.04em;
  color: #f2f3f4;
  padding-top: 24px;
  margin: 0;
  @media (max-width: 760px) {
    font-size: 12px;
    width: 160px;
    line-height: 17px;
  }
`;

export const DivServiceItemsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  width: 80%;
  @media (max-width: 450px) {
    width: 95%;
  }
`;
export const DivItemStyled = styled.div`
  width: 30vw;
  @media (max-width: 450px) {
   width:45vw ;
  }
  @media (min-width: 1440px) {
    width:400px;
  }
`;
export const HeadingItemStyled = styled.p`
  ::selection {
    background: #5900cc;
    color: #f2f3f4;
  }
  font-family: 'Neue Machina';
  font-weight: 800;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: -0.02em;
  color: #8e9195;
  padding-bottom: 24px;
  margin: 0;
  @media (max-width: 760px) {
    font-size: 20px;
    width: 144px;
    line-height: 24px;
  }
  @media (min-width: 1440px) {
    width:200px;
  }
`;
export const ParagraphItemStyled = styled.p`
  ::selection {
    background: #5900cc;
    color: #f2f3f4;
  }
  font-family: 'Circular Air Pro';
  font-weight: 400;
  font-size: 24px;
  line-height: 34px;
  letter-spacing: -0.04em;
  color: #8e9195;
  margin-top: 0;
  margin-bottom: 80px;
  @media (max-width: 760px) {
    font-size: 12px;
    width: 144px;
    line-height: 17px;
    margin-bottom: 40px;
  }
  @media (min-width: 1440px) {
    width:300px;
  }
`;
