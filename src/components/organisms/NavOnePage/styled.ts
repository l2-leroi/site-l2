import styled from "styled-components";
import { colors } from "../../../styles/colors";
import { Typography } from "../../../styles/typography";

export const NavStyled = styled.nav`
  position: absolute;
  width: 100%;
  z-index: 60;
  color: ${colors.black};
  background-color: ${colors.gray};

  &.white {
    background-color: transparent;
  }

  &.smallFixed {
    position: fixed;

    ul.navList {
      padding: 25px 28px;
      transition: padding 0.4s;
    }
  }

  @media (max-width: 500px) {
    opacity: 0;

    &.animate {
      opacity: 1;
      transition: opacity 0.8s;
    }
  }
`;

export const NavContentStyled = styled.ul`
  padding: 43px 28px;
  margin: 0;
  display: flex;
  justify-content: space-between;
`;

export const NavItemStyled = styled.li`
  list-style-type: none;
  min-width: 173px;

  ${Typography} {
    &.white {
      color: ${colors.gray};
    }
    @media (max-width: 500px) {
      font-size: 10px;
      line-height: 140%;
      text-align: right;
    }
  }

  ::selection {
    background: ${colors.purple};
    color: ${colors.gray};
  }

  &:first-of-type {
    @media (max-width: 980px) {
      min-width: 43px;
    }
  }

  &:nth-of-type(2) {
    @media (max-width: 880px) {
      display: none;
      height: 0px;
    }
  }

  img {
    @media (max-width: 500px) {
      width: 43px !important;
    }
  }
`;

export const NavLinkListStyled = styled.ul`
  margin: 0;
  display: flex;
  justify-content: space-between;

  ${Typography} {
    list-style-type: none;
    padding: 0px 40px;
    cursor: pointer;
    ::selection {
      background: ${colors.purple};
      color: ${colors.gray};
    }
    &:hover {
      color: ${colors.green};
    }
    @media (max-width: 500px) {
      font-size: 10px;
      line-height: 14px;
    }
  }
`;

export const ImageStyled = styled.img`
  user-select: none;
  cursor: pointer;
`;
