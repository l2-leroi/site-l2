import styled from 'styled-components';
import { colors } from '../../../styles/colors';
import { Typography } from '../../../styles/typography';

interface HeaderProps {
  height: number;
}

export const HeaderStyled = styled.header<HeaderProps>`
  height: ${(props) => `${props.height}px`};
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  z-index: 50;
  position: relative;
  padding: 0px 28px;
  background-color: ${colors.gray};
  overflow: visible;

  .whiteSpinner {
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 500px), (max-height: 415px) {
    user-select: none;
  }
`;

export const MainContentStyled = styled.div`
  width: 100%;
  display: flex;
  align-self: center;
  z-index: 50;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const MainTextStyled = styled.hgroup`
  align-self: center;
  margin: 0 auto;
  text-align: center;
  width: 100%;
  h2 {
    align-self: center;
    font-style: normal;
    text-align: center;
    margin: 0 auto -10px;
    ::selection {
      background: ${colors.purple};
      color: ${colors.gray};
    }

    @media (min-width: 801px) and (max-width: 1220px) {
      font-size: 3.4rem;
    }

    @media (max-width: 910px) {
      margin-bottom: 15px;
    }

    @media (orientation: portrait) and (max-width: 800px) {
      margin-top: 120px;
      margin-bottom: 8px;
    }
    &.white {
      color: white;
    }
  }
  h1 {
    align-self: center;
    font-style: normal;
    text-align: center;
    margin: 0 auto 10px;
    user-select: none;

    @media (max-width: 1220px) {
      font-size: 140px;
    }

    @media (max-width: 910px) {
      font-size: 120px;
      margin-bottom: 20px;
    }

    @media (max-width: 800px) {
      font-size: 64px;
      margin-bottom: 13px;
    }

    @media (max-width: 500px) {
      &.textWrap {
        max-width: 220px;
        overflow-wrap: break-word;
      }
    }
    &.white {
      color: white;
    }
  }
  p {
    align-self: center;
    font-style: normal;
    text-align: center;
    max-width: 464px;
    margin: 0 auto;
    ::selection {
      background: ${colors.purple};
      color: ${colors.gray};
    }

    @media (max-width: 800px) {
      width: 212px;
    }
    &.white {
      color: ${colors.gray};
    }
  }
`;

export const LanguageStyled = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
  position: absolute;
  right: 28px;

  @media (min-height: 416px) and (max-width: 800px) {
    position: static;
    flex-direction: row;
    margin-top: 32px;
    gap: 16px;
  }

  @media (max-height: 415px), (max-width: 500px) {
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

export const FooterContentStyled = styled.div`
  width: 100%;
  display: flex;
  align-self: flex-end;
  position: absolute;
  box-sizing: border-box;

  @media (orientation: portrait) and (max-width: 800px) {
    position: static;
    align-self: center;
    margin-bottom: 80px;
  }

  @media (max-width: 416px) {
    margin-bottom: 34px;
  }

  @media (max-width: 375px) {
    margin-bottom: 80px;
  }

  @media (max-width: 361px) {
    margin-bottom: 0px;
  }
`;

export const SocialMediaStyled = styled.div`
  list-style: none;
  align-self: center;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  bottom: 30px;

  @media (max-height: 415px), (max-width: 500px) {
    opacity: 0;
  }

  &.animate {
    opacity: 1;
    transition: opacity 0.8s;
  }
  span {
    margin-right: 120px;
    margin-left: 1.2rem;
    position: relative;
    font-style: normal;
    ::selection {
      background: ${colors.purple};
      color: ${colors.gray};
    }

    @media (max-width: 800px) {
      font-size: 10px;
      margin-right: 57px;
    }

    &:after {
      content: '';
      width: 84px;
      height: 1px;
      background-color: ${colors.lightGray};
      position: absolute;
      top: 50%;
      margin: 0px 2.4rem;

      @media (max-width: 800px) {
        width: 39px;
      }
    }
    &.white {
      color: ${colors.gray};
    }
  }
`;

export const SocialMediaLinkStyled = styled.a`
  ${Typography} {
    border: none;
    margin: 0px 1.2rem;
    font-style: normal;
    background: none;
    z-index: 50;
    cursor: pointer;

    ::selection {
      background: ${colors.purple};
      color: ${colors.gray};
    }

    @media (max-width: 800px) {
      font-size: 10px;
    }

    &:hover {
      color: ${colors.green};
    }
    &.white {
      color: ${colors.gray};
    }
  }
`;
export const ImageStyled = styled.img`
  display: none;
  position: absolute;
  z-index: 0;
  height: 100vh;
  width: auto;

  @media (min-width: 2000px) {
    width: 100%;
  }

  &.noneImage {
    display: none;
  }

  &.activeImage {
    display: block;
  }
`;

export const ArrowSpinnerContainerStyled = styled.div`
  position: absolute;
  right: 148px;
  bottom: -69.5px;
  user-select: none;

  @media (min-width: 2560px) {
    right: 703px;
  }

  @media (max-width: 1365px) {
    right: 70px;
    bottom: -70px;
  }

  @media (max-width: 800px) {
    bottom: -44.5px;
  }

  @media (max-height: 600px) and (max-width: 800px) {
    bottom: -44.6px;
  }

  @media (max-height: 415px) and (max-width: 800px) {
    bottom: -45px;
  }

  @media (orientation: portrait) and (max-width: 800px) {
    right: 0.5px;
    bottom: -44.6px;
    justify-self: center;
    width: 100%;
  }

  @media (orientation: portrait) and (max-width: 500px) {
    bottom: -45.1px;
  }

  @media (max-height: 415px), (max-width: 500px) {
    opacity: 0;
  }

  &.animate {
    opacity: 1;
    transition: opacity 0.8s;
  }
`;
