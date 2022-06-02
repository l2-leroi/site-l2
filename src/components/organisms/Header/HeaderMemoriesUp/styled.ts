import styled from 'styled-components';
import { colors } from '../../../../styles/colors';


export const ContainerStyled = styled.section`
  background-image: url('../images/capa-memories-up.jpg');
  background-size: cover;
  position: relative;
  background-position: center;
  width: 100%;
  height: 1200px;
  
`;

export const MainContentStyled = styled.section`
 
  width: 100%;
  height: 1200px;
  display: flex;
  align-self: center;
  z-index: 50;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin: 0 auto;
  /* background: #171b21;
  opacity: 0.3; */
`;

export const MainTextStyled = styled.hgroup`
  align-self: center;
  margin: 0 auto;
  text-align: center;
  width: 100%;
  height: 70%;
  margin-top: 25rem;
  position:absolute;
`;

export const TitleStyled = styled.h1`
  align-self: center;
  font-family: 'Neue Machina';
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 48%;
  padding-top: 0;
  text-align: center;
  letter-spacing: -0.04em;
  margin: 0 auto 10px;
  user-select: none;
  color: white;

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

export const SubtitleStyled = styled.h2`
  align-self: center;
  font-family: 'Neue Machina';
  font-style: normal;
  font-weight: 800;
  font-size: 100px;
  line-height: 200px;
  text-align: center;
  letter-spacing: -0.02em;
  padding-top: 10px;
  margin: 0 auto -10px;
  color: white;

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
  align-self: center;
  font-family: 'Neue Machina';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 140%;
  padding-top: 10px;
  padding-bottom: 10%;
  text-align: center;
  letter-spacing: -0.04em;
  margin: 0 auto 10px;
  user-select: none;
  color: #f2f3f4;

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
  width: 600px;
  height: 200px;
  display: flex;
  position: absolute;
  
  /* background: #171b21;
  opacity: 0.7; */

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
  /* user-select: none; */
  
  background-position: center;
  background-size: cover;
  margin-left: 5%;
  margin-top: -20%;
  border-radius: 8px;
  position: absolute;

  > div, img {
    #main-banner {
    padding:0;
    width: 1000px;
    margin-top: -10px;
  }
  #main-banner-content {
    margin-top: -10px;
  }
  }
  
  

 


  

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
  right: 28px;
  margin-top: -25%;

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
