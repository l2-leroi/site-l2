import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const ContainerStyledManifest = styled.section`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  text-align: left;
  align-self: flex-start;
  align-items: stretch;
  justify-content: flex-end;
  background-color: ${colors.gray};
  width: 100%;
  padding-top: 15.5rem;
  padding-bottom: 15.5rem;

  .scrollCircleDiv {
    width: 30vw;
    min-width: 30vw;
    margin-top: -70vw;
  }
`;

export const GroupStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  text-align: left;

  h1 {
    @media (max-width: 800px) {
      font-size: 32px;
    }
  }

  h2 {
    margin-top: 8rem;
    @media (max-width: 800px) {
      font-size: 12px;
    }
  }

  h3 {
    @media (max-width: 800px) {
      font-size: 12px;
    }
  }

  b {
    color: ${colors.purple};
    @media (max-width: 800px) {
      font-size: 12px;
    }
  }

  p {
    margin-top: 4rem;
    @media (max-width: 800px) {
      font-size: 12px;
    }
  }

  .line {
    width: 100%;
    border-bottom: 1px solid #8e9195;
    @media (max-width: 400px) {
      margin-top: 40px;
      margin-bottom: 40px;
    }
  }
`;

export const TitleStyled = styled.div`
  @media (max-width: 800px) {
    max-width: 200px;
  }
`;

export const SubTitleStyled = styled.div`
  max-width: 600px;
  @media (max-width: 800px) {
    max-width: 250px;
    h2 {
      font-size: 20px;
    }
  }
`;

export const ParagraphStyled = styled.div`
  max-width: 464px;
  @media (max-width: 800px) {
    max-width: 250px;
  }
`;

export const ImageStyled = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  gap: 30px;

  img {
    margin-top: 4rem;
    margin-bottom: 8rem;
    overflow: hidden;
  }
`;
