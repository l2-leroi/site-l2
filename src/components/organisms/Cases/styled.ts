import styled from 'styled-components';
import { colors } from '../../../styles/colors';
import { Typography } from '../../../styles/typography';

export const ContainerStyled = styled.div`
  color: ${colors.black};
  background-color: ${colors.gray};
  // clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80%);
  // padding: 10rem 2.8rem 48rem;
  padding: 10rem 2.8rem 10rem;  

  // @media (min-width: 2560px) {
  //   clip-path: polygon(0 0, 100% 0, 100% 100%, 0 77%);
  // }

  // @media (min-width: 1920px) {
  //   clip-path: polygon(0 0, 100% 0, 100% 100%, 0 76%);
  // }

  // @media (max-width: 800px) {
  //   clip-path: polygon(0 0, 100% 0, 100% 100%, 0 86%);
  // }

  // @media (max-width: 600px) {
  //   padding-right: 0px;
  // }
`;

export const ContentStyled = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 1500px;
  margin: 0 auto;
  >p{
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
  h2{
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
    margin-left: 60px;
  }
  @media (max-width: 400px) {
    margin-left: 19px;
  }
  p{
    ::selection {
      background: ${colors.purple};
      color: ${colors.gray};
    }
  }
`;

