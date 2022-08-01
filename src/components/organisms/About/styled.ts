import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const ContainerStyledAbout = styled.section`
  display: flex;
  flex-direction: column;
  padding-left: 28px;
  padding-right: 28px;
  background-color: ${colors.black};
  color: ${colors.gray};
  padding-top: 20.5rem;
`;

export const SectionStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.black};
  /* width: 100%; */
`;

export const HeaderStyled = styled.div``;

export const TitleGroupStyled = styled.hgroup``;

export const TitleStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  /* margin-top: 14rem; */
  margin-bottom: 20rem;

  h1 {
    margin-top: 8rem;
    width: 35%;
    font-size: 42px;
    font-family: Neue Machina;
  }
  h2 {
    width: 40%;
    /* margin-top: 2rem; */
    font-size: small;
    font-family: Circular Air Pro;
  }
  p {
    max-width: 70%;
    margin-left: 65%;
    /* position: fixed; */
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

export const SubTitleStyled = styled.div`
  background-color: rgba(36, 42, 51, 1);
  display: grid;
  grid-template-columns: auto;
  flex-direction: column;

  width: 20%;

  h1 {
    /* max-width: 25%; */
    /* margin-top: 2rem; */
    font-size: 24px;
    font-family: Circular Air Pro;
  }
  p {
    /* max-width: 25%; */
    margin-top: 2rem;
    font-size: 20px;
    font-family: Circular Air Pro;
  }
  h2 {
    /* max-width: 20%; */
    margin-top: 2rem;
    font-size: 20px;
    font-family: Circular Air Pro;
    /* align-self: center; */
  }
  ul {
    list-style: '+ ';
  }
`;
