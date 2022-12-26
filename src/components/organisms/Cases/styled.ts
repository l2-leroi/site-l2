import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const ContainerStyled = styled.div`
  color: ${colors.black};
  background-color: ${colors.gray};
  padding: 10rem 2.8rem 10rem;
  padding-bottom: 80px;
`;

export const ContentStyled = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 1500px;
  margin: 0 auto;
  > p {
    margin-bottom: 8rem;
    width: 502px;
    ::selection {
      background: ${colors.purple};
      color: ${colors.gray};
    }

    @media (max-width: 800px) {
      width: 175px;
    }
  }
`;

export const DivStyled = styled.div`
  display: flex;
  align-items: end;
  margin-bottom: 3.6rem;
  h2 {
    width: 686px;
    ::selection {
      background: ${colors.purple};
      color: ${colors.gray};
    }

    @media (max-width: 930px) {
      width: 500px;
    }

    @media (max-width: 800px) {
      width: 278px;
      line-height: 28.8px;
    }

    @media (max-width: 415px) {
      width: 264px;
      line-height: 28.8px;
    }
  }
`;

export const AsideStyled = styled.aside`
  margin-bottom: -8px;
  margin-left: 25px;

  @media (max-width: 800px) {
    margin-left: 5px;
  }
  @media (min-width: 400px) {
    // margin-left: 60px;
    margin-left: 43px;
  }
  @media (max-width: 400px) {
    margin-left: 19px;
  }
  p {
    ::selection {
      background: ${colors.purple};
      color: ${colors.gray};
    }
  }
`;
