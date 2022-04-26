import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const SectionStyled = styled.section`
  display: flex;
  justify-content: center;
  padding: 130px 238px 100px;

  @media (max-width: 1920px) {
    padding-top: 140px;
    padding-left: 186px;
    padding-right: 186px;
  }

  @media (max-width: 1536px) {
    padding-left: 154px;
    padding-right: 154px;
  }

  @media (max-width: 1512px) {
    padding-left: 152px;
    padding-right: 152px;
  }

  @media (max-width: 1366px) {
    padding-left: 140px;
    padding-right: 140px;
  }

  @media (max-width: 800px) {
    padding: 130px 12px 30px;
  }
`;

export const ScrollArrow = styled.div`
  position: absolute;
  right: 148px;
  bottom: -70px;

  @media (max-width: 800px) {
    bottom: -45px;
    right: 0.5px;
    width: 100%;
  }

  @media (min-width: 2560px) {
      right: 703px;
  }
`;

export const DivOurServicesStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: ${colors.black};
  border-radius: 8px;
  padding: 80px 541px 208px;

  @media (max-width: 1536px) {
    padding-left: 382px;
    padding-right: 382px;
  }

  @media (max-width: 1512px) {
    padding-left: 372px;
    padding-right: 372px;
  }

  @media (max-width: 1366px) {
    padding-left: 311px;
    padding-right: 311px;
  }

  @media (max-width: 800px) {
    padding: 40px 256px 104px;
  }

  @media (max-width: 414px) {
    padding-left: 71px;
    padding-right: 71px;
  }
`;

export const ContentStyled = styled.div`
  
`;

export const HeadingStyled = styled.h2`
  ::selection {
    background: ${colors.purple};
  }
  font-weight: 800;
  font-size: 6.4rem;
  line-height: 5.76rem;
  text-align: center;
  letter-spacing: -0.04em;
  color: ${colors.gray};
  margin-bottom: 24px;
  font-family: 'Neue Machina';
  width: 464px;

  @media (max-width: 800px) {
    width: 264px;
    margin-bottom: 20px;
  }
`;

export const ParagraphServicesStyled = styled.p`
  ::selection {
    background: ${colors.purple};
  }
  font-weight: 400;
  font-size: 2.4rem;
  line-height: 3.4rem;
  text-align: center;
  letter-spacing: -0.04em;
  color: ${colors.gray};
  font-family: 'Circular Air Pro';
  width: 464px;
  margin-bottom: 40px;

  @media (max-width: 800px) {
    width: 160px;
  }
`;