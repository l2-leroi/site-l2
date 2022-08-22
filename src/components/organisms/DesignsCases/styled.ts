import styled from 'styled-components';
import { colors } from '../../../styles/colors';
import { device } from '../../../styles/medias';

export const ContainerStyled = styled.div`
  color: ${colors.black};
  background-color: #171b21;
  // padding: 18rem 2.8rem 10rem;
  padding-top: 18rem;
  padding-bottom: 10rem;
`;

export const ContentStyled = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  position: sticky;
  top: 94px;
  z-index: 80;
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
  padding-top: 100px;
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
  @media ${device.xs} {
    padding-top: 140px;
  }
`;

export const TitleStyled = styled.h2`
  font-family: 'Neue Machina', sans-serif;
  font-size: 32px;
  text-align: center;
  font-weight: 800;
  color: #f2f3f4;
  letter-spacing: -0.04em;

  ::selection {
    background: ${colors.purple};
    color: ${colors.gray};
  }

  @media ${device.xs} {
    font-size: 48px;
  }

  @media ${device.sm} {
    font-size: 64px;
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
  padding: 10px;
  padding-left: 16px;
  padding-right: 16px;
  font-size: 12px;

  border-radius: 100px;
  cursor: pointer;
  background-color: #242a33;
  font-family: 'Circular Air Pro';
  font-style: normal;
  font-weight: 400;
  color: #ffffff;
  line-height: 140%;
  border-style: none;

  &.classBtn2 {
    background-color: black;
    z-index: 2;
  }
  &.classPadding2 {
    padding-left: 40px;
  }

  @media ${device.xs} {
    // 450
    padding: 10px;
    padding-left: 40px;
    padding-right: 40px;
    font-size: 24px;

    &.classPadding2 {
      padding-left: 80px;
    }
  }
`;

export const ButtonPrototype = styled.button`
  padding: 10px;
  padding-left: 16px;
  padding-right: 16px;
  margin-right: -30px;
  font-size: 12px;

  background-color: #242a33;
  z-index: 2;
  border-radius: 100px;
  cursor: pointer;
  font-family: 'Circular Air Pro';
  font-style: normal;
  font-weight: 400;
  color: #ffffff;
  line-height: 140%;
  border-style: none;

  &.classBtn1 {
    background-color: black;
  }

  &.classPadding1 {
    padding-right: 40px;
  }

  @media ${device.xs} {
    // 450
    padding: 10px;
    padding-left: 40px;
    padding-right: 40px;
    margin-right: -45px;
    font-size: 24px;

    &.classPadding1 {
      padding-right: 80px;
    }
  }
`;

export const ButtonStyled = styled.div`
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
  max-width: 60px;
  min-width: 30px;
  height: auto;
  left: 0px;

  @media ${device.xs} {
    max-width: 80px;
    height: auto;
  }

  @media ${device.sm} {
    min-width: 100px;
    height: auto;
    max-width: 200px;
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
  padding-right: 21%;
  padding-left: 21%;

  &.centerIcon {
    justify-content: center;
  }
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: space-between;
    padding-right: 29%;
    padding-left: 29%;
    gap: 47px;
  }

  @media (max-width: 500px) {
    padding-right: 25%;
    padding-left: 25%;
    grid-gap: 25px;
  }

  @media (max-width: 360px) {
    padding-top: 42px;
    gap: 20px;
    padding-right: 20%;
    padding-left: 20%;
  }
`;

export const LineAnimation = styled.div``;
