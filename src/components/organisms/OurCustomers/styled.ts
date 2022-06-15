import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const OurCustomersStyled = styled.section`
  width: 100%;
  overflow: hidden;
  position: relative;

  width: 100%;
  background-color: ${colors.gray};
  transition: 0.1s linear all;
`;

export const BlackLineStyled = styled.div`
  color: ${colors.gray};
  background-color: ${colors.black};
  width: 100%;
  display: grid;
  grid-template-columns: 1fr minmax(280px, 1456px) 1fr;
  padding: 0px 28px;
  overflow: hidden;
  padding-bottom: 80px;
  @media (max-width: 800px) {
    padding: 0px 12px;
    padding-bottom: 80px;
  }
`;

export const HeaderStyled = styled.hgroup`
  max-width: 648px;
  z-index: 50;

  @media (max-width: 1000px) {
    max-width: 400px;
  }

  @media (max-width: 800px) {
    max-width: 264px;
  }
  p {
    max-width: 464px;
    ::selection {
      background: ${colors.purple};
    }
    @media (max-width: 800px) {
      max-width: 160px;
    }
  }
  h2 {
    margin-bottom: 40px;
    ::selection {
      background: ${colors.purple};
    }

    @media (max-width: 800px) {
      max-width: 264px;
      margin-bottom: 16px;
    }
  }
`;

export const AsideStyled = styled.aside`
  text-align: right;
  align-self: center;
  font-family: "Circular Air Pro";
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

export const ContentStyled = styled.section`
  position: relative;
  display: flex;
  margin-bottom: 124px;
  grid-column: 2;

  @media (max-width: 800px) {
    margin-bottom: 39px;
  }

  @media (max-width: 414px) {
    margin-bottom: 36px;
    width: 100%;
  }
`;

export const CustomersContainer = styled.div`
  z-index: 5;
  grid-column: 2;
`;
