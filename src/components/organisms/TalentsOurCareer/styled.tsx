import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const ContainerStyled = styled.section`
  background-color: ${colors.gray};
  overflow: inherit;
  display: flex;
  flex-direction: column;
`;

export const DivMainTextStyled = styled.div`
  align-self: flex-start;
  align-items: stretch;
  justify-content: flex-end;
  width: 65%;
  display: flex;
  flex-direction: column;

  @media (max-width: 800px) {
    width: 70vw;
  }

  @media (max-width: 400px) {
    margin-top: 40px;
  }

  h1 {
    align-self: flex-start;
    display: flex;
    max-width: 712px;
    margin-bottom: 40px;

    @media (max-width: 400px) {
      margin-bottom: 20px;
    }
  }

  p {
    align-self: flex-start;
    display: flex;
    max-width: 464px;

    @media (max-width: 400px) {
      max-width: 70%;
    }
  }

  p:nth-child(11) {
    margin-top: 40px;
    margin-bottom: 40px;

    @media (max-width: 400px) {
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }

  .line {
    width: 70vw;
    border-bottom: 1px solid #8e9195;
    margin-top: 80px;
    margin-bottom: 80px;

    @media (max-width: 400px) {
      margin-top: 40px;
      margin-bottom: 40px;
    }
  }
`;

export const DivImageStyled = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 100%;
  height: auto;
  margin-bottom: 40px;
  margin-top: 40px;
  gap: 30px;
  padding-right: 14%;

  img {
    min-width: 0px;
    display: flex;
    border-radius: 18px;

    @media (max-width: 700px) {
      border-radius: 10px;
    }
  }

  @media (max-width: 700px) {
    gap: 14px;
  }

  @media (max-width: 400px) {
    margin-bottom: 20px;
    margin-top: 20px;
    padding-right: 4%;
  }
`;

export const ContainerMainStyled = styled.div`
  display: flex;
  align-items: stretch;
  overflow: inherit;

  .scrollCircleDiv {
    width: 30vw;
    min-width: 30vw;
    margin-top: -60vw;
    margin-bottom: -387px;

    @media (max-width: 800px) {
      margin-bottom: -230.5px;
    }
    > div {
      z-index: 1;
    }
  }
`;
