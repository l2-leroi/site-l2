import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const SectionOnePageStyled = styled.section`
  display: flex;
  /* justify-content: center; */
  background-color: #5900cc;
  width: 100%;
  max-width: 100%;
  height: 837px;

  @media (max-width: 1366px) {
    padding: 0px 12px;
  }
`;

export const ImageStyled = styled.img`
  position: absolute;
  width: 50%;
  height: 837px;
  left: 0px;
  align-items: left;

  @media (max-width: 800px) {
    max-width: 164px;
  }

  @media (max-width: 576px) {
    display: none;
  }
`;

export const DivItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  max-width: 35%;
  margin-left: 750px;
  justify-content: center;
  position: relative;
  
  ul {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    bottom: 1px;
    
    
  }
  li {
    
    list-style-type: none;
   
  }

  @media (max-width: 800px) {
    max-width: 200px;
    min-width: 200px;
  }

  @media (max-width: 700px) {
    max-width: 300px;
  }

  @media (max-width: 600px) {
    max-width: 160px;
    min-width: 260px;
  }

  @media (max-width: 576px) {
    max-width: 384px;
    min-width: 0px;

    &:nth-child(1) {
      order: 1;
    }
    &:nth-child(2) {
      order: 4;
    }
    &:nth-child(3) {
      order: 2;
    }
    &:nth-child(4) {
      order: 3;
    }
    &:nth-child(5) {
      order: 5;
    }
  }

  h1 {
    ::selection {
      background: ${colors.purple};
      color: ${colors.gray};
    }
    margin-bottom: 1rem;
    width: 35%;
    max-width: 35%;
    

    @media (max-width: 800px) {
      padding-bottom: 16px;
    }

    @media (max-width: 800px) {
      padding-bottom: 16px;
    }
  }

  p {
    ::selection {
    background: ${colors.purple};
    color: ${colors.gray};
    
  }
  /* margin-top: 0.4rem;
  margin-bottom: 0.4rem; */

  @media (max-width: 800px) {
    max-width: 230px;

    &.last-paragraph {
      max-width: 144px;
    }
  }

  @media (max-width: 600px) {
    max-width: 180px;

    &.last-paragraph {
      max-width: 180px;
    }
  }

  @media (max-width: 576px) {
    max-width: 300px;

    &.last-paragraph {
      max-width: 300px;
    }
  }

  }
`;


