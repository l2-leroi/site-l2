import styled from 'styled-components';
import { colors } from '../../../styles/colors';

interface HeaderCasesBgImage {
  bgImage: string;
}

interface HeaderCasesBgImageSmall {
  bgImageSmall: string;
}

export const ContainerStyled = styled.section<HeaderCasesBgImage>`
  background-image: url(${(props) => (props.bgImage ? props.bgImage : 'none')});
  background-position: center;
  background-size: cover;
  max-width: 100%;
  height: 982px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 500px) {
    height: 800px;
  }

  @media (max-width: 400px) {
    height: 712px;
  }

  @media (max-width: 600px), (max-height: 415px) {
    width: 100% !important;
  }

  &.white {
    color: white;
  }
`;

export const MainContentStyled = styled.hgroup`
  width: 100%;
  position: relative;

  @media (max-width: 500px) {
    font-size: 10px;
    line-height: 14px;
  }
`;

export const MainTextStyled = styled.hgroup`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 280px;
  justify-content: center;

  @media (max-width: 500px) {
    font-size: 10px;
    line-height: 14px;
  }

  img {
    @media (max-width: 500px) {
      width: 43px !important;
    }
  }

  h2 {
    text-align: center;
    margin-bottom: 16px;

    @media (max-width: 910px) {
      margin-bottom: 20px;
    }

    @media (max-width: 800px) {
      margin-bottom: 18px;
    }

    @media (max-width: 500px) {
      &.textWrap {
        max-width: 220px;
        overflow-wrap: break-word;
      }
    }

    @media (max-width: 360px) {
      font-weight: 700;
    }
  }

  h1 {
    margin-left: 50px;
    margin-right: 50px;
    text-align: center;

    ::selection {
      background: ${colors.purple};
      color: ${colors.gray};
    }

    @media (max-width: 1400px) {
      font-size: 150px;
    }

    @media (min-width: 801px) and (max-width: 1220px) {
      font-size: 140px;
    }

    @media (max-width: 1060px) {
      font-size: 130px;
    }

    @media (max-width: 900px) {
      font-size: 110px;
    }

    @media (max-width: 600px) {
      font-size: 100px;
    }

    @media (max-width: 500px) {
      font-size: 56px;
    }

    @media (max-width: 360px) {
      font-size: 36px;
      line-height: 90%;
    }
  }

  p {
    text-align: center;

    @media (max-width: 1220px) {
      font-size: 20px;
    }

    @media (max-width: 800px) {
      font-size: 15px;
    }

    @media (max-width: 360px) {
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 140%;
      text-align: center;
      letter-spacing: -0.04em;
    }
  }
`;
export const ContainerImageStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  margin-top: -180px;

  @media (max-width: 1000px) {
    margin-top: -150px;
  }

  @media (max-width: 700px) {
    margin-top: -100px;
  }
`;

export const DivImageStyled = styled.img`
  width: 80%;
  height: auto;
  border-radius: 8px;

  @media (max-width: 400px) {
    width: 95%;
  }
`;

export const DivItemStyled = styled.div<HeaderCasesBgImageSmall>`
  background-image: url(${(props) =>
    props.bgImageSmall ? props.bgImageSmall : 'none'});
  background-position: center;
  background-size: cover;

  width: 80%;
  position: absolute;
  height: 600px;
  top: 801px;
  border-radius: 8px;
  max-width: 1500px;
`;

export const LanguageStyled = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
  position: absolute;
  margin-top: 2%;
  left: 96%;

  @media (min-height: 416px) and (max-width: 800px) {
    position: static;
    flex-direction: row;
    margin-top: 32px;
    gap: 16px;
    justify-content: center;
  }

  @media (max-height: 415px), (max-width: 500px) {
    opacity: 0;
    gap: 9px;
  }

  &.animate {
    opacity: 1;
    transition: opacity 0.8s;
  }

  button {
    background: transparent;
    cursor: pointer;
    border: none;

    &.white {
      color: white;
    }

    a {
      ::selection {
        background: ${colors.purple};
        color: ${colors.gray};
      }
    }

    &:first-child {
      margin-bottom: 8px;
    }

    @media (min-width: 500px) {
      &:hover {
        color: ${colors.green};
      }
    }

    @media (max-width: 800px) {
      font-size: 10px;

      &:first-child {
        margin-bottom: 0px;
      }
    }
  }
`;

export const Link = styled.div``;

export const SectionOnePageStyled = styled.section`
  display: flex;
  justify-content: center;
  background-color: #171b21;
  width: 100%;
`;

export const DivTextStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1018px;
  margin-top: 40%;
  margin-bottom: 6rem;
`;

export const DivParagraph = styled.div`
  @media (max-width: 800px) {
    width: 75%;
  }
`;

export const DivItemSTextStyled = styled.div`
  max-width: 464px;
  height: auto;

  @media (max-width: 500px) {
    width: 350px;
  }

  @media (max-width: 400px) {
    width: 225px;
  }

  h1 {
    ::selection {
      background: ${colors.purple};
      color: ${colors.gray};
    }
    padding-bottom: 24px;

    @media (max-width: 800px) {
      font-size: 64px;
    }

    @media (max-width: 500px) {
      font-size: 42px;
    }

    @media (max-width: 400px) {
      padding-bottom: 20px;
      font-size: 32px;
    }
  }

  p {
    ::selection {
      background: ${colors.purple};
      color: ${colors.gray};
    }

    @media (max-width: 800px) {
      font-size: 24px;
    }

    @media (max-width: 500px) {
      font-size: 20px;
    }

    @media (max-width: 400px) {
      font-size: 12px;
    }
  }
`;
