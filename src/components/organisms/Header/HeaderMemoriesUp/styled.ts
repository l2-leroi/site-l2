import styled from 'styled-components';
import { colors } from '../../../../styles/colors';

export const ContainerStyled = styled.section`
 background-image: url('../images/capa-maior-memories-up.jpg');
  background-position: center;
  background-size: cover;
  max-width: 100%;
  height: 982px;
  top: 0px;
  overflow: hidden;
  /* background-color: ${colors.gray}; */
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
  height: 1008.12px;
  left: 0px;
  top: -26px;
  padding: 0px 28px;
  @media (max-width: 500px) {
    font-size: 10px;
    line-height: 14px;
  }
 
`;

export const MainTextStyled = styled.hgroup`

 align-self: center;
  position: absolute;
  width: 800px;
  height: 100px;
  left: 0px;
  top: 25rem;
  text-align: center;

  @media (max-width: 500px) {
    font-size: 10px;
    line-height: 14px;
  }
  img {
    @media (max-width: 500px) {
      width: 43px !important;
    }
  }
`;

export const TitleStyled = styled.h1`
  font-family: 'Neue Machina';
  font-style: normal;
  font-weight: 800px;
  font-size: 40px;
  line-height: 48%;
  top: 50px;
  left: 600px;
  max-width: 50%;
  text-align: center;
  letter-spacing: -0.04em;
  color: #f2f3f4;
  position: absolute;

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
`;

export const SubtitleStyled = styled.h2`
  font-family: 'Neue Machina';
  font-style: normal;
  font-weight: 800px;
  font-size: 100px;
  line-height: 200px;
  text-align: center;
  letter-spacing: -6px;
  padding-top: 80px;
  left: 300px;
  width: 100%;
  height: 200px;
  color: #f2f3f4;
  position: absolute;

  ::selection {
    background: ${colors.purple};
    color: ${colors.gray};
  }

  @media (min-width: 801px) and (max-width: 1220px) {
    font-size: 34px;
  }

  @media (max-width: 910px) {
    margin-bottom: 15px;
  }

  @media (orientation: portrait) and (max-width: 800px) {
    margin-top: 120px;
    margin-bottom: 8px;
  }
`;

export const TextStyled = styled.p`
  font-family: 'Circular Air Pro';
  font-style: normal;
  font-weight: 400px;
  font-size: 24px;
  line-height: 140%;
  padding-bottom: 10%;
  text-align: center;
  letter-spacing: -0.04em;
  margin: 0 auto 10px;
  user-select: none;
  color: #f2f3f4;
  position: absolute;
  width: 464px;
  height: 34px;
  left: 460px;
  top: 300px;

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
`;

export const DivItemStyled = styled.div`

 position: absolute;
  width: 100%;
  /* max-width: 1208px; */
  height: 700px;
  /* left: calc(50% - 1208px / 2); */
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

export const ImageStyled = styled.img`
 
  width: 100%;
  height: auto;
  border-radius: 8px;
  /* position: absolute; */
  


  @media (max-width: 800px) {
    max-width: 164px;
  }

  @media (max-width: 576px) {
    display: none;
  }
`;

export const LanguageStyled = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
  position: absolute;
  right: 0px;
  margin-top: -43%;
  left: 0px;
  color: aliceblue;

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
`;

export const LanguageItemStyled = styled.button`
  background: transparent;
  cursor: pointer;
  border: none;
  font-family: 'Circular Air Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  text-align: right;
  margin-right: 30px;
  top: -100px;

  letter-spacing: -0.02em;
  color: white;

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
`;

export const Link = styled.div``;
