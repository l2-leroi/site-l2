import styled from 'styled-components';
import { colors } from '../../../styles/colors';
import { Typography } from '../../../styles/typography';

export const ContainerStyled = styled.div`
  color: ${colors.gray};
  background-color: ${colors.black};
  padding-top: 19rem;
  display: flex;
  flex-direction: row;
  padding-left: 28px;
  padding-right: 28px;
  gap: 32px;
`;

export const ImageStyled = styled.img`
  // 340 x 340
  border-radius: 100%;
  border: 8px solid ${colors.green};
  width: 100%;
  // width: 464px;
  // max-width: 100%;
  // height: 464px;
  object-fit: cover;

  // --calc-height: calc(((100% * 360) / 360));
  --calc-height: calc(((100% * 340) / 340)- 24px);
  height: var(--calc-height);
`;

export const ContentStyled = styled.section`
  width: 33.33%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  margin: 0 auto;
  gap: 20px;
  // padding-left: 2.8rem;
  // padding-right: 2.8rem;
  // width: 100%;
  // max-width: 1500px;
`;

export const MainDivStyled = styled.div`
  width: 100%;
  align-self: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const DivStyled = styled.div`
  // display: flex;
  // align-items: end;
  // margin-bottom: 3.6rem;
`;

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

  // @media (max-width: 930px) {
  //   width: 500px;
  // }

  // @media (max-width: 800px) {
  //   width: 278px;
  //   line-height: 32px;
  // }

  // @media (max-width: 415px) {
  //   width: 264px;
  //   line-height: 32.4px;
  // }
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
  white-space: nowrap;

  ::selection {
    background: ${colors.purple};
    color: ${colors.gray};
  }
`;

export const AsideStyledbutton = styled.div`
  width: 33.33%;
  // margin-left: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LanguageStyled = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  list-style: none;
  // position: absolute;
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
export const EmailStyled = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  color: ${colors.gray};
  font-family: 'Circular Air Pro', sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 140%;
  letter-spacing: -0.04em;
  // padding-right: 25px;
  // max-width: 300px;
  // text-align: right;

  ::selection {
    background: ${colors.purple};
    color: ${colors.gray};
  }
`;

export const PhraseStyled = styled.div`
  width: 100%;
  text-align: left;
  color: ${colors.gray};
  font-family: 'Circular Air Pro', sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 140%;
  letter-spacing: -0.04em;
  // width: 502px;
  // margin-bottom: 8rem;

  &.email {
    // padding-right: 25px;
    max-width: 300px;
  }

  ::selection {
    background: ${colors.purple};
    color: ${colors.gray};
  }

  // @media (max-width: 800px) {
  //   width: 175px;
  // }
`;
