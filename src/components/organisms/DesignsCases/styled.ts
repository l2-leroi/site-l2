import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const ContainerStyled = styled.div`
  color: ${colors.black};
  background-color: #171b21;
  padding: 18rem 2.8rem 10rem;
  display: flex;

  // clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80%);
  // padding: 10rem 2.8rem 48rem;

  // @media (min-width: 2560px) {
  //   clip-path: polygon(0 0, 100% 0, 100% 100%, 0 77%);
  // }

  // @media (min-width: 1920px) {
  //   clip-path: polygon(0 0, 100% 0, 100% 100%, 0 76%);
  // }

  // @media (max-width: 800px) {
  //   clip-path: polygon(0 0, 100% 0, 100% 100%, 0 86%);
  // }

  // @media (max-width: 600px) {
  //   padding-right: 0px;
  // }
`;

export const ContentStyled = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 1500px;
  //margin: 0 auto;
  //margin: auto;
  //height: 1500px;
  height: 100%;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
`;

export const DivStyled = styled.div`
  text-align: center;
  color: White;
  margin-left: 54rem;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
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

export const TecTitleStyled = styled.h2`
  font-family: 'Neue Machina', sans-serif;
  font-size: 64px;
  line-height: 57.6px;
  text-align: center;
  font-weight: 800;
  color: #f2f3f4;
  letter-spacing: -0.04em;

  ::selection {
    background: ${colors.purple};
    color: ${colors.gray};
  }

  // @media (max-width: 930px) {
  //   width: 500px;
  // }

  // @media (max-width: 800px) {
  //   width: 278px;
  //   line-height: 28.8px;
  // }

  // @media (max-width: 415px) {
  //   width: 264px;
  //   line-height: 28.8px;
  // }
`;

export const TitleStyled = styled.h2`
  width: fit-content;
  margin-left: auto;
  margin-right: auto;

  font-family: 'Neue Machina', sans-serif;
  font-size: 64px;
  text-align: center;
  font-weight: 800;
  color: #f2f3f4;
  letter-spacing: -0.04em;

  ::selection {
    background: ${colors.purple};
    color: ${colors.gray};
  }

  // @media (max-width: 930px) {
  //   width: 500px;
  // }

  // @media (max-width: 800px) {
  //   width: 278px;
  //   line-height: 28.8px;
  // }

  // @media (max-width: 415px) {
  //   width: 264px;
  //   line-height: 28.8px;
  // }
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

export const ButtonImages = styled.button`
  background-color: #242a33;
  padding: 10px;
  padding-left: 40px;
  padding-right: 40px;
  border-radius: 100px;
  cursor: pointer;
  font-family: 'Circular Air Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  color: #ffffff;
  line-height: 140%;
  border-style: none;

  &.classBtn2 {
    background-color: black;
    z-index: 2;
  }
  &.classPadding2 {
    padding-left: 80px;
  }
`;

export const ButtonPrototype = styled.button`
  padding: 10px;
  padding-left: 40px;
  padding-right: 40px;
  background-color: #242a33;
  margin-right: -45px;
  z-index: 2;
  border-radius: 100px;
  cursor: pointer;
  font-family: 'Circular Air Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  color: #ffffff;
  line-height: 140%;
  border-style: none;

  &.classBtn1 {
    background-color: black;
  }

  &.classPadding1 {
    padding-right: 80px;
  }
`;

export const ButtonStyled = styled.div`
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 80px;
  margin-top: 60px;

  &:first-child {
    margin-bottom: 8px;
  }

  &:hover ${ButtonPrototype} {
    background-color: #242a33;
  }

  ${ButtonPrototype}:hover + ${ButtonImages} {
    background-color: #242a33;
  }

  ${ButtonPrototype}:hover {
    background-color: black;
  }

  ${ButtonImages}:hover {
    background-color: black;
  }
`;

export const ImageStyled = styled.img`
  width: 150px;
  height: 150px;
  left: 0px;

  @media (max-width: 800px) {
    max-width: 150px;
  }

  @media (max-width: 576px) {
    display: none;
  }

  > div {
    width: 50px;
    height: 50px;
    margin-left: 40px;
    border: 12px solid #000000;
    border-radius: 24px;
  }
`;

export const TechnologiesStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
  grid-gap: 80px;
`;

export const LineAnimation = styled.div``;
