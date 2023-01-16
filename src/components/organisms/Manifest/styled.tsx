import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const ContainerStyledManifest = styled.section`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  text-align: left;
  align-self: flex-start;
  align-items: stretch;
  background-color: ${colors.gray};
  width: 100%;
  padding-top: 15.5rem;
  justify-content: flex-start;
  margin-left: 0px;
  padding-bottom: 8300px;

  @media (max-width: 800px) {
    padding-bottom: 4200px;
  }

  .scrollCircleDiv {
    margin-top: -40px;
    height: 0;
    justify-content: flex-start;

    > div {
      margin-top: -1200px; //1200px;
      height: 9500px; //8300px + 1200px;
      width: 30vw;

      @media (max-width: 800px) {
        margin-top: -500px;
        height: 4700px; // 4200px; + 500px;
        img {
          max-width: 72px;
          max-height: 72px;
        }
      }

      @media (max-width: 350px) {
        width: 20vw;
        img {
          max-width: 55px;
          max-height: 55px;
        }
      }
    }
    align-self: start;
    display: flex;
    justify-content: center;
  }
`;

export const AuxDiv = styled.div`
  max-width: 464px;
  display: flex;
  flex-direction: column;

  @media (max-width: 800px) {
    max-width: 168px;
  }
`;

export const GroupStyled = styled.div`
  display: flex;
  flex-direction: column;
  left: 0px;
  width: 100%;
  justify-content: center;
  position: absolute;
  align-items: center;

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
    // width: 100%;
    width: 100vw;
    border-bottom: 1px solid #8e9195;
    // @media (max-width: 400px) {
    //   margin-top: 40px;
    //   margin-bottom: 40px;
    // }
  }
`;

export const TitleStyled = styled.div`
  width: 712px;
  // width: 100vw;
  @media (max-width: 800px) {
    max-width: 200px;
  }
`;

export const SubTitleStyled = styled.div`
  // max-width: 600px;
  width: 712px;
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
