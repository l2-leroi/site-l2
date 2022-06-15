import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const FooterStyled = styled.footer`
  color: ${colors.gray};
  background-color: ${colors.purple};
  width: 100%;
  padding: 0rem 2.8rem 6.05rem;
`;

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1500px;
  margin: 0 auto;
  position: relative;
`;

export const Teste4 = styled.div`
  position: absolute;
  top: -225px;
  right: -28px;
  background: ${colors.black};
  width: 692px;
  height: 200px;
  z-index: 1;
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 100% 100%);
`;

export const ContentStyled = styled.div``;

export const DivStyled = styled.div`
  display: flex;
  align-items: end;
  margin-bottom: 10rem;
  h2 {
    width: 404px;
    ::selection {
      background: ${colors.green};
      color: ${colors.black};
    }

    @media (max-width: 930px) {
      width: 300px;
    }

    @media (max-width: 800px) {
      width: 264px;
      line-height: 28.8px;
    }

    @media (max-width: 414px) {
      width: 229px;
    }
  }
`;

export const AsideStyled = styled.aside`
  margin-bottom: -8px;
  margin-left: 270px;

  @media (max-width: 800px) {
    margin-left: 5px;
  }

  @media (max-width: 414px) {
    margin-left: 70px;
  }

  @media (max-width: 376px) {
    margin-left: 39px;
  }
  p {
    ::selection {
      background: ${colors.green};
      color: ${colors.black};
    }
  }
`;

export const CopyrightStyled = styled.div`
  margin-top: 9.5rem;
  display: flex;
  text-align: center;
  align-items: start;
  justify-content: space-between;
`;

export const InfoStyled = styled.div`
  &:first-child {
    text-align: start;
    width: 339px;

    @media (max-width: 800px) {
      width: 160px;
    }
  }

  &.align-end {
    text-align: end;
    width: 339px;

    @media (max-width: 800px) {
      width: 160px;
    }
  }

  &.mobile {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 800px) {
    &.desktop {
      display: none;
    }
  }

  @media (min-width: 801px) {
    &.mobile {
      display: none;
    }
  }
  p {
    ::selection {
      background: ${colors.green};
      color: ${colors.black};
    }

    @media (max-width: 800px) {
      font-size: 10px;
      line-height: 14px;
    }

    &:first-child {
      margin-bottom: 9px;

      @media (max-width: 800px) {
        margin-bottom: 16px;
      }
    }
  }
`;

export const ImageStyled = styled.img`
  user-select: none;

  @media (max-width: 800px) {
    width: 58px;
    height: 20px;
    margin-top: 80px;
  }
`;

export const IconStyled = styled.span`
  margin: 0 8px 0 9px;
  vertical-align: middle;
  user-select: none;
`;
