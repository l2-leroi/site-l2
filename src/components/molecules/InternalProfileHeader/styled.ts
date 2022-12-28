import styled from 'styled-components';
import { colors } from '../../../styles/colors';
import { Typography } from '../../../styles/typography';

export const ContainerStyled = styled.div`
  background-color: ${colors.black};
  padding-top: 18rem;
  display: flex;
  flex-direction: row;
  padding-left: 28px;
  padding-right: 28px;
  gap: 32px;
  // margin-bottom: -100px;
  @media (max-width: 800px) {
    gap: 16px;
  }
`;

export const ContainerImageStyled = styled.div`
  width: 30%;
  display: flex;
  align-items: center;

  @media (max-width: 800px) {
    width: 50%;
  }
`;

export const ImageStyled = styled.img`
  // 340 x 340
  // 464 x 464
  z-index: 90;
  border-radius: 714px 140px 32px;
  width: 100%;
  object-fit: cover;

  // --calc-height: calc(((100% * 360) / 360));
  --calc-height: calc(((100% * 464) / 464)- 24px);
  height: var(--calc-height);
`;

export const ContentStyled = styled.section`
  width: 30%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  margin: 0 auto;
  gap: 24px;

  @media (max-width: 800px) {
    gap: 8px;
    width: 50%;
  }
`;

export const DivStyled = styled.div``;

export const TitleStyled = styled.h1`
  font-size: 6.4rem;
  font-family: 'Neue Machina';
  letter-spacing: -0.04em;
  line-height: 90%;
  font-weight: 800;
  color: ${colors.green};

  ::selection {
    background: ${colors.purple};
    color: ${colors.gray};
  }
  @media (max-width: 1200px) {
    font-size: 4rem;
  }
  @media (max-width: 800px) {
    font-size: 4rem;
  }
`;

export const AsideStyledbutton = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const LanguageStyled = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  list-style: none;
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

export const ContactStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const PhraseStyled = styled.div`
  width: 100%;
  text-align: left;
  color: ${colors.gray};
  font-family: 'Circular Air Pro';
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 140%;
  letter-spacing: -0.04em;

  ::selection {
    background: ${colors.purple};
    color: ${colors.gray};
  }
`;

export const IconsStyled = styled.img`
  // height: 20px;

  @media (max-width: 900px) {
    height: 20px;
  }
`;

export const IconsContent = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;
`;

export const DivIcons = styled.div`
  display: flex;
  gap: 20px;
`;

export const PersonalIcons = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SubtitleStyle = styled.div`
  white-space: nowrap;
  width: 100%;
  text-align: left;
  color: ${colors.gray};
  font-family: 'Circular Air Pro';
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 140%;
  letter-spacing: -0.02em;

  ::selection {
    background: ${colors.purple};
    color: ${colors.gray};
  }
`;
