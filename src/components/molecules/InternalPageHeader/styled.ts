import styled from 'styled-components';
import { colors } from '../../../styles/colors';
import { Typography } from '../../../styles/typography';

export const ContainerStyled = styled.div`
  color: ${colors.gray};
  background-color: ${colors.black};
  padding-top: 24rem;
`;

export const ContentStyled = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 1500px;
  margin: 0 auto;
  padding-left: 2.8rem;
  padding-right: 2.8rem;
`;

export const MainDivStyled = styled.div`
  width: 100%;
  align-self: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const DivStyled = styled.div`
  display: flex;
  align-items: end;
  margin-bottom: 3.6rem;
`;

export const TitleStyled = styled.h2`
  font-family: 'Neue Machina', sans-serif;
  font-size: 6.4rem;
  line-height: 57.6px;
  font-weight: 800;
  width: 686px;
  letter-spacing: -0.04em;

  ::selection {
    background: ${colors.purple};
    color: ${colors.gray};
  }

  @media (max-width: 930px) {
    width: 500px;
  }

  @media (max-width: 800px) {
    width: 278px;
    line-height: 28.8px;
  }

  @media (max-width: 415px) {
    width: 264px;
    line-height: 28.8px;
  }
`;

export const AsideStyled = styled.aside`
  margin-bottom: -8px;
  margin-left: 25px;

  @media (max-width: 800px) {
    margin-left: 5px;
  }
  @media (min-width: 400px) {
    margin-left: 60px;
  }
  @media (max-width: 400px) {
    margin-left: 19px;
  }
`;

export const ParagraphStyled = styled.p`
  font-family: 'Circular Air Pro', sans-serif;
  font-size: 1.6rem;
  line-height: 22.4px;
  font-weight: 400;
  letter-spacing: -0.02em;

  ::selection {
    background: ${colors.purple};
    color: ${colors.gray};
  }
`;

export const AsideStyledbutton = styled.div`
  margin-left: 15px;
  display: flex;
  align-items: center;
`;

export const LanguageStyled = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
  position: absolute;
  right: 28px;

  @media (max-width: 800px) {
    gap: 16px;
  }

  @media (max-width: 500px) {
    opacity: 0;
    gap: 9px;
  }

  &.animate {
    opacity: 1;
    transition: opacity 0.8s;
  }

  ${Typography} {
    background: transparent;
    cursor: pointer;
    border: none;
    font-style: normal;
    text-align: right;
    color: ${colors.gray};
    a {
      ::selection {
        background: ${colors.purple};
        color: ${colors.gray};
      }
    }
    &:first-child {
      margin-bottom: 8px;
    }

    &:hover {
      color: ${colors.green};
    }

    @media (max-width: 800px) {
      font-size: 10px;

      &:first-child {
        margin-bottom: 0px;
      }
    }
    &.white {
      color: ${colors.gray};
    }
  }
`;

export const PhraseStyled = styled.p`
  font-family: 'Circular Air Pro', sans-serif;
  font-weight: 400;
  font-size: 2.4rem;
  line-height: 3.36rem;
  width: 502px;
  margin-bottom: 8rem;
  letter-spacing: -0.04em;

  ::selection {
    background: ${colors.purple};
    color: ${colors.gray};
  }

  @media (max-width: 800px) {
    width: 175px;
  }
`;
