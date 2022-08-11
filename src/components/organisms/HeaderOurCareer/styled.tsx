import styled from 'styled-components';

import { colors } from '../../../styles/colors';

export const ContainerStyled = styled.section`
  display: flex;
  flex-direction: column;
  padding-left: 28px;
  padding-right: 28px;
  background-color: ${colors.black};
  color: ${colors.gray};
  padding-top: 20.5rem;
`;
export const TextStyled = styled.div`
  margin-top: 4rem;
  margin-bottom: 30px;

  h1 {
    max-width: 50%;
  }

  h2 {
    max-width: 50%;
    margin-top: 20px;
  }

  p {
    max-width: 20%;
    margin-left: 55%;
  }
`;

export const LanguageStyled = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
  position: absolute;
  margin-top: 14rem;
  left: 90%;

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

export const StyledDate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin-top: 25px;
    margin-bottom: 40px;
    width: 45%;
    @media (max-width: 600px) {
      font-size: 12px;
      width: 50%;
      text-align: center;
    }
  }
`;

export const DivStyledDate = styled.div`
  background-color: rgba(36, 42, 51, 1);
  display: flex;
  flex-direction: column;
  width: 70%;
  max-width: 100%;
  margin-top: 150px;
  height: auto;
  border-radius: 8px;
  @media (max-width: 1260px) {
    margin-left: 0;
    width: 100%;
  }

  .button {
    display: flex;
    margin-left: 12%;
    justify-content: center;
    margin-top: 40px;
    margin-bottom: 40px;
    width: 80%;
    height: 100%;
    color: ${colors.black};
  }
`;

export const DateStyled = styled.div`
  display: flex;
  margin-top: 60px;
  @media (max-width: 1220px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const DivDate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  max-width: 60%;

  h1 {
    margin-bottom: 15px;
    margin-top: 30px;
    @media (max-width: 600px) {
      font-size: 12px;
    }
  }
  h2 {
    display: flex;
    flex-direction: column;
    @media (max-width: 600px) {
      font-size: 20px;
    }
  }
`;
