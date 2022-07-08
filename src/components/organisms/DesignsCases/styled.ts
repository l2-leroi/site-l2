import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const ContainerStyled = styled.div`
  color: ${colors.black};
  background-color: #171b21;
  padding: 18rem 2.8rem 10rem;
  display: flex;
  margin: auto;
  justify-content: center;
`;

export const ContentStyled = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 280px;
  -webkit-box-pack: center;
  justify-content: center;
`;

export const DivStyled = styled.div`
  text-align: center;
  color: White;
  width: fit-content;
  width: 100%;
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
  width: 100%;
  justify-content: center;
  display: flex;
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

  @media (max-width: 400px) {
    font-size: 48px;
  }

  @media (max-width: 360px) {
    font-size: 32px;
  }
`;

export const TitleStyled = styled.h2`
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

  @media (max-width: 400px) {
    font-size: 48px;
  }

  @media (max-width: 360px) {
    font-size: 32px;
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
  width: 100%;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-top: 60px;
  margin-bottom: 80px;

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
    max-width: 100px;
    height: auto;
  }

  @media (max-width: 380px) {
    max-width: 80px;
    height: auto;
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

  @media (max-width: 800px) {
    grid-gap: 40px;
  }

  @media (max-width: 360px) {
    grid-gap: 40px;
    padding-top: 42px;
  }
`;

export const LineAnimation = styled.div``;
