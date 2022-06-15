import styled from "styled-components";
import { colors } from "../../../styles/colors";
import { Typography } from "../../../styles/typography";

export const MenuStyled = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  height: 100vh;
  background: ${colors.black};
`;

export const ContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const DivLogoStyled = styled.div`
  padding-left: 28px;
  padding-top: 45px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;

  @media (max-width: 500px) {
    img {
      display: none !important;
    }
  }
`;

export const ImageStyled = styled.img`
  user-select: none;
`;

export const DivContactStyled = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 835px) {
    transform: rotate(90deg);
    position: absolute;
    top: 53%;
  }

  &.first {
    left: -140px;
  }

  &.last {
    right: -140px;
    visibility: hidden;
  }

  ${Typography} {
    ::selection {
      background: ${colors.purple};
    }

    @media (max-width: 980px) {
      font-size: 12px;
      line-height: 140%;
    }
  }
`;

export const DivLineStyled = styled.div`
  width: 84px;
  height: 0;
  border: 1px solid ${colors.gray};
  background-color: ${colors.gray};
  margin-right: 24px;
  margin-left: 24px;
`;

export const DivMenuStyled = styled.div`
  display: flex;
  padding-right: 28px;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 750px) {
    justify-content: flex-start;
  }
`;

export const DivTextMenuStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 33px;
`;

export const ButtonCloseStyled = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const DivTextStyled = styled.div`
  @media (max-width: 930px) {
    display: none;
    visibility: hidden;
  }
`;

export const TextMenuStyled = styled.p`
  padding-left: 10px;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  font-family: "Circular Air Pro";
  letter-spacing: -0.04em;
  color: ${colors.gray};
  margin: 0;

  ::selection {
    background: ${colors.purple};
  }
`;

export const DivLanguageStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 28px;
  top: 46.3%;

  @media (max-width: 835px) {
    top: 90px;
  }

  ${Typography} {
    text-align: right;

    &:first-child {
      margin-bottom: 8px;
    }

    a {
      ::selection {
        background: ${colors.purple};
      }
    }

    @media (max-width: 930px) {
      font-size: 10px;
      line-height: 27px;
    }

    @media (min-width: 500px) {
      &:hover {
        color: ${colors.green};
      }
    }
  }
`;
