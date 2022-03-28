import styled from 'styled-components';

export const SectionStyled = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 10vh;
  margin-bottom: 10vh;
`;

export const DivOurServicesStyled = styled.div`
  padding-top: 80px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #171b21;
  border-radius: 8px;
  width: 1200px;
  height: 611px;
`;

export const HeadingStyled = styled.p`
  ::selection {
    background: #5900cc;
  }
  font-weight: 800;
  font-size: 64px;
  line-height: 90%;
  text-align: center;
  letter-spacing: -0.04em;
  color: #f2f3f4;
  margin-bottom: 24px;
  font-family: 'Neue Machina';
  width: 464px;
`;

export const ParagraphServicesStyled = styled.p`
  ::selection {
    background: #5900cc;
  }
  font-weight: 400;
  font-size: 24px;
  line-height: 34px;
  text-align: center;
  letter-spacing: -0.04em;
  color: #f2f3f4;
  font-family: 'Circular Air Pro';
  width: 464px;
`;

export const DivButtonServicesStyled = styled.div`
  display: flex;
  text-align: center;
  margin-top: 48px;
`;

export const ButtonServicesStyled = styled.button`
  width: 241px;
  height: 50px;
  font-size: 24px;
  background: #20bd9d;
  border: 2px solid #20bd9d;
  box-sizing: border-box;
  border-radius: 24px;
  letter-spacing: -0.04em;
  color: #171b21;
  margin-right: 8px;
  display: flex;
  justify-content:center ;
  text-align: center;
  font-family: 'Circular Air Pro';
  padding-top:8px;
`;
