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

  //
  //width: 100%;
  //padding-bottom: 100px;

  @media (max-width: 600px), (max-height: 415px) {
    width: 100% !important;
  }

  &.white {
    color: white;
  }
`;

export const MainContentStyled = styled.hgroup`
  width: 100%;
  @media (max-width: 500px) {
    font-size: 10px;
    line-height: 14px;
  }

  //
  position: relative;
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

    /*@media (max-width: 600px) {
      font-size: 60px;
    }*/

    @media (max-width: 910px) {
      //font-size: 120px;
      margin-bottom: 20px;
    }

    @media (max-width: 800px) {
      //font-size: 64px;
      //margin-bottom: 13px;
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
    text-align: center;
    //font-size: 15rem;
    //margin-bottom: 16px;

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

    @media (max-width: 960px) {
      font-size: 110px;
    }

    @media (max-width: 910px) {
      //margin-bottom: 15px;
    }

    @media (max-width: 500px) {
      font-size: 56px;
    }

    @media (max-width: 360px) {
      font-size: 36px;
      line-height: 90%;
    }

    /*@media (orientation: portrait) and (max-width: 800px) {
      margin-top: 120px;
      margin-bottom: 8px;
    }*/
  }

  p {
    text-align: center;

    @media (max-width: 1220px) {
      font-size: 20px;
    }

    @media (max-width: 910px) {
      //font-size: 20px;
      //margin-bottom: 20px;
    }

    @media (max-width: 800px) {
      font-size: 15px;
      //margin-bottom: 13px;
    }

    /*@media (max-width: 500px) {
      &.textWrap {
        max-width: 220px;
        overflow-wrap: break-word;
      }
    }*/

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

export const DivItemStyled = styled.div<HeaderCasesBgImageSmall>`
  background-image: url(${(props) =>
    props.bgImageSmall ? props.bgImageSmall : 'none'});
  background-position: center;
  background-size: cover;

  width: 80%;
  //width: 100%;
  position: absolute;
  height: 600px;
  top: 801px;
  border-radius: 8px;
  //padding: 0px 152px;

  //
  max-width: 1500px;

  /*@media (max-width: 800px) {
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
  } */
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

  @media (max-width: 1366px) {
    //padding: 0px 12px;
  }
`;

export const DivTextStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  //align-self: stretch;
  //justify-content: space-between;
  max-width: 1018px;
  //margin: 0 auto;
  margin-top: 40%;
  margin-bottom: 6rem;

  /*@media (max-width: 800px) {
    max-width: 1018px;
  }

  @media (max-width: 576px) {
    flex-direction: column;
  }*/
`;

export const DivItemSTextStyled = styled.div`
  //min-width: 225px; //314px;
  max-width: 464px;
  height: auto;

  @media (max-width: 500px) {
    width: 350px;
  }

  @media (max-width: 400px) {
    width: 225px;
  }

  /*
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
  */

  h1 {
    ::selection {
      background: ${colors.purple};
      color: ${colors.gray};
    }
    padding-bottom: 24px;
    //width: 314px;

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

    /*
    @media (max-width: 800px) {
      padding-bottom: 16px;
    }

    @media (max-width: 800px) {
      padding-bottom: 16px;
    }
    */
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

    //width: 430px;
    //margin-bottom: 6rem;

    /*@media (max-width: 800px) {
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
    }*/
  }
`;
