import { Interface } from 'readline';
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

  @media (max-width: 600px), (max-height: 415px) {
    width: 100% !important;
  }

  &.white {
    color: white;
  }
`;

export const MainContentStyled = styled.hgroup`
  background-color: rgba(23, 27, 33, 0.6);
  width: 100%;
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

    @media (max-width: 600px) {
      font-size: 60px;
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
  }

  h1 {
    text-align: center;
    font-size: 15rem;
    margin-bottom: 16px;

    ::selection {
      background: ${colors.purple};
      color: ${colors.gray};
    }

    @media (min-width: 801px) and (max-width: 1220px) {
      font-size: 140px;
    }

    @media (max-width: 910px) {
      margin-bottom: 15px;
    }

    @media (orientation: portrait) and (max-width: 800px) {
      margin-top: 120px;
      margin-bottom: 8px;
    }
  }

  p {
    text-align: center;

    @media (max-width: 1220px) {
      font-size: 34px;
    }

    @media (max-width: 910px) {
      font-size: 30px;
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
  padding: 0px 152px;

  @media (max-width: 800px) {
    max-width: 270px;
    min-width: 270px;
  }

  @media (max-width: 700px) {
    max-width: 300px;
  }

  @media (max-width: 600px) {
    max-width: 160px;
    min-width: 260px;
  }

  @media (max-width: 576px) {
    max-width: 384px;
    min-width: 0px;

    &:nth-child(1) {
      order: 1;
    }
    &:nth-child(2) {
      order: 4;
    }
    &:nth-child(3) {
      order: 2;
    }
    &:nth-child(4) {
      order: 3;
    }
    &:nth-child(5) {
      order: 5;
    }
  }
`;

// export const ImageStyled = styled.img`
//   width: 100%;
//   height: auto;
//   border-radius: 8px;

//   @media (max-width: 800px) {
//     max-width: 164px;
//   }

//   @media (max-width: 576px) {
//     display: none;
//   }
// `;

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

  @media (max-width: 1366px) {
    padding: 0px 12px;
  }
`;

export const DivTextStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-self: stretch;
  justify-content: space-between;
  max-width: 1018px;
  margin: 0 auto;
  margin-top: 40%;
  margin-bottom: 6rem;

  @media (max-width: 800px) {
    max-width: 1018px;
  }

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const DivItemSTextStyled = styled.div`
  max-width: 314px;

  @media (max-width: 800px) {
    max-width: 270px;
    min-width: 270px;
  }

  @media (max-width: 700px) {
    max-width: 300px;
  }

  @media (max-width: 600px) {
    max-width: 160px;
    min-width: 260px;
  }

  @media (max-width: 576px) {
    max-width: 384px;
    min-width: 0px;

    &:nth-child(1) {
      order: 1;
    }
    &:nth-child(2) {
      order: 4;
    }
    &:nth-child(3) {
      order: 2;
    }
    &:nth-child(4) {
      order: 3;
    }
    &:nth-child(5) {
      order: 5;
    }
  }

  h1 {
    ::selection {
      background: ${colors.purple};
      color: ${colors.gray};
    }
    padding-bottom: 18px;
    width: 314px;

    @media (max-width: 800px) {
      padding-bottom: 16px;
    }

    @media (max-width: 800px) {
      padding-bottom: 16px;
    }
  }

  p {
    ::selection {
      background: ${colors.purple};
      color: ${colors.gray};
    }
    width: 430px;
    margin-bottom: 6rem;

    @media (max-width: 800px) {
      max-width: 230px;

      &.last-paragraph {
        max-width: 144px;
      }
    }

    @media (max-width: 600px) {
      max-width: 180px;

      &.last-paragraph {
        max-width: 180px;
      }
    }

    @media (max-width: 576px) {
      max-width: 300px;

      &.last-paragraph {
        max-width: 300px;
      }
    }
  }
`;
