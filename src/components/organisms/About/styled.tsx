import styled, { keyframes } from 'styled-components';
import { colors } from '../../../styles/colors';

export const ContainerStyledAbout = styled.section`
  background-color: ${colors.black};
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${colors.black};
  color: ${colors.gray};
  padding-top: 15.5rem;
  padding-bottom: 15.5rem;

  @media (max-width: 800px) {
    padding: 0px 12px;
    padding-bottom: 80px;
  }
`;

export const SectionStyled = styled.div`
  padding: 0px 28px;
  gap: 30px;
  @media (max-width: 800px) {
    padding: 0px;
    margin-top: 138px;
  }
`;

export const HeaderStyled = styled.div`
  display: flex;

  @media (max-width: 414px) {
    margin-bottom: 36px;
    width: 100%;
  }
`;

export const TitleGroupStyled = styled.hgroup`
  display: flex;
  flex-direction: column;
  max-width: 100%;

  h1 {
    margin-top: 8rem;
    @media (max-width: 800px) {
      font-size: 36px;
    }
  }

  h2 {
    @media (max-width: 800px) {
      font-size: 12px;
    }
  }
`;

export const TitleStyled = styled.div`
  margin-bottom: 40px;
  max-width: 600px;
  @media (max-width: 800px) {
    max-width: 420px;
  }
`;

export const ParagraphStyled = styled.div`
  max-width: 464px;
  @media (max-width: 800px) {
    max-width: 160px;
  }
`;
export const AsideStyled = styled.div`
  align-self: center;
  @media (max-width: 800px) {
    max-width: 100px;
    font-size: 10px;
  }
`;

export const LanguageStyled = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
  position: absolute;
  margin-top: 14rem;
  left: 96%;
  @media (min-height: 416px) and (max-width: 800px) {
    position: static;
    flex-direction: row;
    margin-top: 32px;
    gap: 16px;
  }
  @media (max-height: 415px), (max-width: 800px) {
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
      &:first-child {
        margin-bottom: 0px;
      }
    }
  }
`;
export const SecondTitleGroupStyled = styled.hgroup`
  display: flex;
  flex-direction: row;
  margin: auto;
  margin-top: 15rem;
  text-align: left;
  align-self: flex-start;
  align-items: stretch;
  justify-content: flex-end;
  margin-left: -28px;

  @media (max-width: 800px) {
    font-size: 12px;
  }

  h1 {
    @media (max-width: 800px) {
      font-size: 20px;
    }
  }

  p {
    margin-top: 4rem;
  }

  h2 {
    margin-top: 4rem;
    margin-bottom: 2rem;
  }

  ul li {
    margin-left: 20px;
    list-style: '+ ';
  }

  .button {
    width: 100%;
    display: flex;
    margin-top: 20px;
    color: ${colors.gray};
  }

  .scrollCircleDiv {
    // margin-top: 72px;
    margin-top: -40px;
    height: 0;
    > div {
      height: 3000px;
      // margin-left: -28px;
      width: 30vw;
    }
    align-self: start;
    display: flex;
    justify-content: center;
  }
`;

export const SubTitleGroupStyled = styled.hgroup`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 15rem;
  max-width: 464px;
  text-align: left;
  align-self: flex-start;
  align-items: stretch;
  justify-content: flex-end;

  @media (max-width: 800px) {
    font-size: 12px;
    margin-top: 60px;
    display: grid;
    grid-template-columns: 30vw 1fr;

    * {
      grid-column: 2;
    }
  }

  h1 {
    @media (max-width: 800px) {
      font-size: 20px;
    }
  }

  p {
    margin-top: 4rem;
  }
  h2 {
    margin-top: 4rem;
    margin-bottom: 2rem;
  }
  ul li {
    margin-left: 20px;
    list-style: '+ ';
  }

  .button {
    width: 100%;
    display: flex;
    margin-top: 20px;
    color: ${colors.gray};
  }
`;

export const SubTitleStyled = styled.div`
  max-width: 464px;
  @media (max-width: 800px) {
    max-width: 160px;
  }
`;

export const ParagraphSubTitleStyled = styled.div`
  max-width: 464px;

  p {
    @media (max-width: 800px) {
      max-width: 160px;
    }
  }
`;

export const TextStyledSuperPowers = styled.div`
  width: 70%;
  padding-left: 20px;
`;

export const TextStyled = styled.div`
  max-width: 464px;
  @media (max-width: 800px) {
    max-width: 160px;
  }
`;

export const ListStyled = styled.div`
  max-width: 464px;
  @media (max-width: 800px) {
    max-width: 160px;
  }
`;

export const SpinningAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
export const SpinningIconStyled = styled.div`
  display: flex;
  position: absolute;
  top: 108rem;
  right: 0;
  overflow: hidden;

  @media (max-width: 1220px) {
    display: none;
  }
`;
export const SpinnerImage = styled.img`
  max-width: 350px;
  right: 0;
  overflow: hidden;
  animation: ${SpinningAnimation} 5s linear infinite;
`;
export const DivCardStyled = styled.div`
  display: flex;
  margin-top: 15rem;
  overflow: hidden;

  .cards {
    z-index: 2;
    background-color: #242a33;
    width: 464px;
    // min-height: 450px;
    max-height: 550px;
    border-radius: 8px;
    padding: 28px;

    @media (max-width: 800px) {
      max-width: 160px;
      width: fit-content;
      // height: fit-content;
      min-height: 220px;
      max-height: 350px;
      padding: 16px;
      margin-right: auto;

      &:first-of-type {
        margin-left: auto;
        margin-right: 0px;
      }

      &:last-of-type {
        margin: 0 auto;
        grid-column: 1/-1;
      }
    }

    @media (max-width: 310px) {
      margin: 0 auto !important;
    }
  }
`;

export const StyledGroupCards = styled.hgroup`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: stretch;

    &:last-of-type {
      margin: 0 auto;
      grid-column: 1/4;
    }
  }

  @media (max-width: 310px) {
    grid-template-columns: 1fr;
  }

  h1 {
    text-align: center;
    padding: 20px;
    margin-top: 2rem;
  }

  p {
    margin-left: 4rem;
  }
`;

export const CardTitleStyled = styled.div`
  @media (max-width: 800px) {
    max-width: 160px;
  }
  h1 {
    margin: 0px;
    padding: 0px;
    padding-bottom: 40px;

    @media (max-width: 800px) {
      padding-bottom: 20px;
    }
  }
`;

export const CardParagraphStyled = styled.div`
  width: 100%;
  @media (max-width: 800px) {
    max-width: 160px;
  }

  p {
    margin: 0px;
  }
`;
