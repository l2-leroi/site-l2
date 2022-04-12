import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const FooterStyled = styled.footer`
  color: ${colors.gray};
  background-color: ${colors.purple};
  clip-path: polygon(0 0, 100% 41.6%, 100% 100%, 0% 100%);
  width: 100%;
  padding: 35.5rem 2.8rem 6.05rem;

  @media (min-width: 2560px) {
    clip-path: polygon(0 0, 100% 57%, 100% 100%, 0% 100%);
  }

  @media (min-width: 1920px) {
    clip-path: polygon(0 0, 100% 49%, 100% 100%, 0% 100%);
  }

  @media (max-width: 800px) {
    clip-path: polygon(0 0, 100% 20%, 100% 100%, 0% 100%);
  }
`;

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1500px;
  margin: 0 auto;
`;

export const ContentStyled = styled.div``;

export const DivStyled = styled.div`
  display: flex;
  align-items: end;
  margin-bottom: 10rem;
`;

export const AsideStyled = styled.aside`
  margin-bottom: -8px;
  margin-left: 270px;

  @media (max-width: 800px) {
    margin-left: 5px;
  }

  @media (max-width: 414px) {
    margin-left: 70px;
  }

  @media (max-width: 376px) {
    margin-left: 39px;
  }
`;

export const ParagraphStyled = styled.p`
  font-family: 'Circular Air Pro', sans-serif;
  font-size: 1.6rem;
  line-height: 22.4px;
  font-weight: 400;
  letter-spacing: -0.02em;
`;

export const TitleStyled = styled.h2`
  font-family: 'Neue Machina', sans-serif;
  font-size: 6.4rem;
  line-height: 57.6px;
  font-weight: 800;
  letter-spacing: -0.04em;
  width: 404px;

  @media (max-width: 800px) {
    width: 264px;
    line-height: 28.8px;
  }

  @media (max-width: 414px) {
    width: 229px;
  }
`;

export const CopyrightStyled = styled.div`
  margin-top: 9.5rem;
  display: flex;
  text-align: center;
  align-items: start;
  justify-content: space-between;
`;

export const InfoStyled = styled.div`
  &:first-child {
    text-align: start;
    width: 339px;

    @media (max-width: 800px) {
      width: 160px;
    }
  }
  
  &.align-end {
    text-align: end;
    width: 339px;

    @media (max-width: 800px) {
      width: 160px;
    }
  }

  &.mobile {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 800px) {
    &.desktop {
      display: none;
    }
  }

  @media (min-width: 801px) {
    &.mobile {
      display: none;
    }
  }
`;

export const LinkStyled = styled.a``;

export const ImageStyled = styled.img`
  @media (max-width: 800px) {
    width: 58px;
    height: 20px;
    margin-top: 80px;
  }
`;

export const PhraseStyled = styled.p`
  font-family: 'Circular Air Pro', sans-serif;
  font-size: 16px;
  line-height: 22.4px;
  font-weight: 400;
  letter-spacing: -0.02em;

  @media (max-width: 800px) {
    font-size: 10px;
    line-height: 14px;
  }

  &:first-child {
    margin-bottom: 9px;

    @media (max-width: 800px) {
      margin-bottom: 16px;
    }
  }
`;

export const IconStyled = styled.span`
  margin: 0 8px 0 9px;
  vertical-align: middle;
`;

    margin-bottom: 0.9rem;
  }
`;

export const ImageStyled = styled.img``;
