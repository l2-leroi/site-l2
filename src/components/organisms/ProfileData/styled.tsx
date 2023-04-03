import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const SectionStyled = styled.div``;

export const DivStyled = styled.div`
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

  // .scrollCircleDiv {
  //   width: 30vw;
  //   min-width: 30vw;
  //   margin-top: -70vw;
  // }

  .scrollCircleDiv {
    margin-top: -40px;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;

    > div {
      // height: 1000px;
      width: 30vw;
    }
    align-self: start;
    display: flex;
    justify-content: center;
  }
`;
export const ArrowSpinnerContainerStyled = styled.section``;
export const ArrowSpinnerComponentStyled = styled.div`
  position: absolute;
  margin: 0 auto;
  transition: top 0.2s linear;

  img {
    max-width: 200px;
    max-height: 200px;
  }

  @media (max-width: 800px) {
    img {
      max-width: 72px;
      max-height: 72px;
    }
  }
`;

export const SectionStyledProfileData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // width: 70%;
  width: 100%;
  // text-align: left;
  background-color: ${colors.gray};

  .line {
    width: 100vw;
    border-bottom: 1px solid #8e9195;
    margin-top: 80px;
    margin-bottom: 80px;

    @media (max-width: 400px) {
      margin-top: 40px;
      margin-bottom: 40px;
    }
  }
`;

export const ContainerStyledProfileData = styled.div`
  max-width: 464px;
  display: flex;
  flex-direction: column;
  @media (max-width: 800px) {
    max-width: 168px;
  }
`;

export const TitleStyled = styled.div`
  margin-bottom: 40px;
  width: 712px;
  @media (max-width: 800px) {
    max-width: 200px;
  }
`;

export const ParagraphStyled = styled.div`
  max-width: 464px;

  @media (max-width: 800px) {
    max-width: 250px;
  }
`;

export const IconContainerStyled = styled.div`
  display: flex;
  width: 70vw;
`;

export const PreferencesContainerStyled = styled.div`
  display: flex;
`;
