import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const ContainerStyledManifest = styled.section`
  display: flex;
  flex-direction: column;
  padding-left: 30%;
  max-width: 100%;
  text-align: left;
  align-self: flex-start;
  align-items: stretch;
  justify-content: flex-end;
  background-color: ${colors.gray};
  width: 100%;
  padding-top: 15.5rem;
  padding-bottom: 15.5rem;
`;

export const TitleGroupStyled = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;

  h1 {
    font-family: Neue Machina;
    font-size: 64px;
    font-weight: 800;
    line-height: 58px;
    letter-spacing: -0.04em;
    text-align: left;
  }

  h2 {
    font-family: Circular Air Pro;
    font-size: 40px;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: -0.02em;
    text-align: left;
    margin-top: 8rem;
  }

  h3 {
    font-family: Circular Air Pro;
    font-size: 24px;
    font-weight: 400;
    line-height: 34px;
    letter-spacing: -0.04em;
    text-align: left;
  }

  b {
    color: ${colors.purple};
  }

  p {
    font-family: Circular Air Pro;
    font-size: 24px;
    font-weight: 400;
    line-height: 34px;
    letter-spacing: -0.04em;
    text-align: left;
    margin-top: 4rem;
  }

  .line {
    width: 100%;
    border-bottom: 1px solid #8e9195;
    @media (max-width: 400px) {
      margin-top: 40px;
      margin-bottom: 40px;
    }
  }
`;

export const TitleStyled = styled.div`
  @media (max-width: 800px) {
    max-width: 160px;
  }
`;

export const SubTitleStyled = styled.div`
  max-width: 600px;
  @media (max-width: 800px) {
    max-width: 160px;
  }
`;

export const ParagraphStyled = styled.div`
  max-width: 464px;
  @media (max-width: 800px) {
    max-width: 160px;
  }
`;

export const ImageStyled = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
  img {
    margin-top: 4rem;
    margin-bottom: 8rem;
  }
`;
