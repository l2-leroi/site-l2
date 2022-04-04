import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const SectionStyled = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 10vh;
  margin-bottom: 10vh;
`;

export const DivOurServicesStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: ${colors.black};
  border-radius: 8px;
  width: 1200px;
  height: 611px;
  @media (max-width: 500px) {
    width: 336px;
    height: 442px;
  }
`;

export const HeadingStyled = styled.p`
  margin-bottom: 0;
  margin-top: 80px;
  ::selection {
    background: ${colors.purple};
  }
  font-weight: 800;
  font-size: 64px;
  line-height: 90%;
  text-align: center;
  letter-spacing: -0.04em;
  color: ${colors.gray};
  margin-bottom: 24px;
  font-family: 'Neue Machina';
  width: 464px;
  @media (max-width: 500px) {
    font-size: 32px;
    width: 200px;
    margin-top: 40px;
    margin-bottom: 0;
  }
`;

export const ParagraphServicesStyled = styled.p`
  ::selection {
    background: ${colors.purple};
  }
  font-weight: 400;
  font-size: 24px;
  line-height: 34px;
  text-align: center;
  letter-spacing: -0.04em;
  color: ${colors.gray};
  font-family: 'Circular Air Pro';
  width: 464px;
  margin-bottom: 40px;
  @media (max-width: 500px) {
    width: 160px;
    font-size: 12px;
    line-height: 17px;
    margin-top: 20px;
  }
`;

export const DivButtonServicesStyled = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  @media (max-width: 500px) {
    img {
      width: 32px !important;
    }
  }
`;

export const ButtonServicesStyled = styled.button`
  ::selection {
    background: ${colors.purple};
    color: ${colors.gray};
  }
  width: 241px;
  height: 50px;
  font-size: 24px;
  color: ${colors.green};
  border: 2px solid  ${colors.green};
  border-radius: 24px;
  letter-spacing: -0.04em;
  color: ${colors.black};
  margin-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Circular Air Pro';
  @media (max-width: 500px) {
    width: 126px;
    height: 32px;
    font-size: 12px;
    font-weight: 400;
  }
`;

