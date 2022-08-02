import styled, { keyframes } from 'styled-components';
import { colors } from '../../../styles/colors';

export const ContainerStyledAbout = styled.section`
  overflow: hidden;
  background-color: ${colors.black};
  display: grid;
  grid-template-columns: 1fr minmax(280px, 1456px) 1fr;
  color: ${colors.gray};
  width: 100%;
  padding-top: 15.5rem;
  padding-bottom: 15.5rem;
  @media (max-width: 800px) {
    padding: 0px 12px;
    padding-bottom: 80px;
  }
`;

export const SectionStyled = styled.div`
  grid-column: 2/3;
  display: grid;
  grid-template-columns: 1fr;
  box-sizing: border-box;
  padding: 0px 28px;
  gap: 30px;
  @media (max-width: 800px) {
    margin-top: 138px;
  }
`;

export const HeaderStyled = styled.div`
  grid-column: 1/-1;
  position: relative;
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
  z-index: 50;
  h1 {
    margin-top: 8rem;
    width: 60%;
    line-height: 64.8px;
  }

  h2 {
    line-height: 33.6px;
  }

  p {
    line-height: 19.6px;
  }
`;

export const TitleStyled = styled.div`
  margin-bottom: 40px;
  @media (max-width: 800px) {
    max-width: 400px;
  }
`;

export const ParagraphStyled = styled.div`
  max-width: 464px;
  @media (max-width: 800px) {
    max-width: 160px;
  }
`;
export const AsideStyled = styled.div`
  text-align: right;
  align-self: center;
  font-family: 'Circular Air Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 140%;
  letter-spacing: -0.02em;
  z-index: 2;
  @media (max-width: 800px) {
    max-width: 50px;
  }
  p {
    ::selection {
      background: ${colors.purple};
    }
    @media (max-width: 800px) {
      max-width: 61px;
    }
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

export const DivSubTitleStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 15rem;
  align-items: center;
  width: 40%;
  margin-left: 40rem;

  .button {
    width: 100%;
    display: flex;
    margin-top: 20px;
    color: ${colors.gray};
  }

  div {
    .svg {
      fill: red;
    }
  }
`;

export const SubTitleStyled = styled.div`
  text-align: left;
  h1 {
    line-height: 48px;
  }
  p {
    /* max-width: 25%; */
    margin-top: 2rem;
    line-height: 33.6px;
  }
  h2 {
    line-height: 33.6px;
    /* max-width: 20%; */
    margin-top: 2rem;
  }
  ul li {
    line-height: 33.6px;
    margin-left: 25px;
    list-style: '+ ';
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
  top: 115rem;
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
  flex-direction: row;
  margin-top: 15rem;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
  overflow: hidden;

  .cards {
    z-index: 2;
    background-color: #242a33;
    width: 464px;
    height: 391px;
    border-radius: 8px;
  }

  h1 {
    line-height: 48px;
    text-align: center;
    padding: 20px;
    margin-top: 2rem;
  }

  p {
    line-height: 33.6px;
    padding: 20px 20px;
  }
`;
