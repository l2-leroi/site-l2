import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const ContainerStyled = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 2.8rem;
  background-color: ${colors.black};
  color: ${colors.gray};
  padding-top: 20.5rem;

  h1 {
    margin-top: 4rem;
    width: 50%;
    position: relative;
    ::selection {
      background: ${colors.purple};
      color: ${colors.gray};
    }
    @media (min-width: 801px) and (max-width: 1220px) {
      font-size: 80px;
    }
    @media (max-width: 910px) {
      margin-bottom: 15px;
    }
    @media (orientation: portrait) and (max-width: 800px) {
      margin-top: 120px;
      margin-bottom: 8px;
    }
  }
  h2 {
    margin-bottom: 2.8rem;
    margin-top: 4rem;
    width: 35%;
    height: 136px;

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
  }

  p {
    margin-left: 772px;
    margin-top: 15rem;
    width: 10%;
    height: 20px;
    position: absolute;
  }
`;

export const MainTextStyled = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 2.8rem;
  @media (max-width: 500px) {
  }

  h1 {
    margin-top: 4rem;
    width: 10%;
    position: relative;
    ::selection {
      background: ${colors.purple};
      color: ${colors.gray};
    }
    @media (min-width: 801px) and (max-width: 1220px) {
      font-size: 80px;
    }
    @media (max-width: 910px) {
      margin-bottom: 15px;
    }
    @media (orientation: portrait) and (max-width: 800px) {
      margin-top: 120px;
      margin-bottom: 8px;
    }
  }

  h2 {
    margin-bottom: 2.8rem;
    margin-top: 4rem;
    width: 50%;
    height: 136px;

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
  }

  p {
    margin-left: 772px;
    margin-top: 15rem;
    width: 10%;
    height: 20px;
    position: absolute;
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

export const DivStyled = styled.div`
  background-color: rgba(36, 42, 51, 1);
  display: flex;
  flex-direction: column;
  border-radius: 0.8rem;
  margin-top: 150px;
  margin-bottom: 10px;
  margin-left: 13%;
  min-width: 30%;
  max-width: 70%;
  /* width: 961px; */
  height: auto;
  /* min-height: 20%;
  max-height: 50%; */
  position: relative;
`;

export const DateStyled = styled.div`
  margin: 0 6rem;
  display: flex;
  width: 80%;
  margin-top: 2.4rem;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin-left: 55px;

  h1 {
    display: flex;
    margin-bottom: 30px;
    margin-top: 50px;
    flex-direction: column;
  }

  h3 {
    display: flex;
    margin-bottom: 30px;
    margin-top: 50px;
    flex-direction: column;
  }
`;

export const ValidDate = styled.div`
  font-family: 'Neue Machina';
  font-style: normal;
  font-weight: 800;
  font-size: 4rem;
  line-height: 120%;
  letter-spacing: -0.02em;
`;
export const ExpireDate = styled.div`
  font-family: 'Neue Machina';
  font-style: normal;
  font-weight: 800;
  font-size: 4rem;
  line-height: 120%;
  justify-content: space-between;
  letter-spacing: -0.02em;
  text-decoration-line: line-through;
`;

export const TextStyled = styled.p`
  font-family: 'Circular Air Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 140%;
  letter-spacing: -0.04em;
  margin-top: 4rem;
  width: 33%;
`;

export const DivButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 16px;
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: 250px;
  gap: 8px;
  width: 50%;
  min-width: 30%;
  max-width: 50%;
  height: auto;
  color: black;
`;
