import styled, { keyframes } from 'styled-components';
import { colors } from '../../../styles/colors';

export const ContainerStyledAbout = styled.section`
  background-color: ${colors.black};
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${colors.black};
  color: ${colors.gray};
  padding-bottom: 15.5rem;

  @media (max-width: 800px) {
    padding: 0px 12px;
    padding-bottom: 80px;
  }
`;

export const SectionStyled = styled.div`
  padding: 0px 28px;
  gap: 30px;
`;

export const HeaderStyled = styled.div`
  display: flex;

  @media (max-width: 414px) {
    margin-bottom: 36px;
    width: 100%;
  }
`;

export const TitleGroupStyled = styled.hgroup`
  display: flex;
  flex-direction: column;
  max-width: 100%;

  h1 {
    margin-top: 8rem;
    width: 60%;
    @media (max-width: 800px) {
      font-size: 36px;
    }
  }

  h2 {
    @media (max-width: 800px) {
      font-size: 12px;
    }
  }
`;

export const TitleStyled = styled.div`
  margin-bottom: 40px;
  @media (max-width: 800px) {
    max-width: 400px;
  }
`;

export const ParagraphStyled = styled.div`
  max-width: 464px;
  @media (max-width: 800px) {
    max-width: 160px;
  }
`;
export const AsideStyled = styled.div`
  align-self: center;
  @media (max-width: 800px) {
    max-width: 100px;
    font-size: 10px;
  }
`;

export const LanguageStyled = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
  position: absolute;
  margin-top: 14rem;
  left: 96%;
  @media (min-height: 416px) and (max-width: 800px) {
    position: static;
    flex-direction: row;
    margin-top: 32px;
    gap: 16px;
  }
  @media (max-height: 415px), (max-width: 800px) {
    opacity: 0;
    gap: 9px;
  }
  &.animate {
    opacity: 1;
    transition: opacity 0.8s;
  }
  button {
    background: transparent;
    cursor: pointer;
    border: none;
    &.white {
      color: white;
    }
    a {
      ::selection {
        background: ${colors.purple};
        color: ${colors.gray};
      }
    }
    &:first-child {
      margin-bottom: 8px;
    }
    @media (min-width: 500px) {
      &:hover {
        color: ${colors.green};
      }
    }
    @media (max-width: 800px) {
      font-size: 10px;
      &:first-child {
        margin-bottom: 0px;
      }
    }
  }
`;
export const SecondTitleGroupStyled = styled.hgroup`
  display: flex;
  flex-direction: row;
  margin: auto;
  margin-top: 15rem;
  text-align: left;
  align-self: flex-start;
  align-items: stretch;
  //justify-content: flex-end;
  //margin-left: -28px;

  //NOVO
  justify-content: flex-start;
  padding-bottom: 688px;
  margin-left: 0px;

  @media (max-width: 800px) {
    font-size: 12px;
    max-width: 168px;

    //NOVO
    padding-bottom: 500px;
  }

  h1 {
    @media (max-width: 800px) {
      font-size: 20px;
    }
  }

  p {
    margin-top: 4rem;
  }

  h2 {
    margin-top: 4rem;
    margin-bottom: 2rem;
  }

  ul li {
    margin-left: 20px;
    list-style: '+ ';
  }

  .button {
    width: 100%;
    display: flex;
    margin-top: 20px;
    color: ${colors.gray};
  }

  .scrollCircleDiv {
    margin-top: -40px;
    height: 0;

    //NOVO
    margin-left: -28px;
    justify-content: flex-start;

    > div {
      height: 3000px;
      width: 30vw;

      @media (max-width: 800px) {
        margin-left: -12px;
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

export const SubTitleGroupStyled = styled.hgroup`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 15rem;
  max-width: 464px;
  text-align: left;
  align-self: flex-start;
  align-items: stretch;
  justify-content: flex-end;

  @media (max-width: 800px) {
    font-size: 12px;
    max-width: 168px;
  }

  h1 {
    @media (max-width: 800px) {
      font-size: 20px;
    }
  }

  p {
    margin-top: 4rem;
  }
  h2 {
    margin-top: 4rem;
    margin-bottom: 2rem;
  }
  ul li {
    margin-left: 20px;
    list-style: '+ ';
  }

  .button {
    width: 100%;
    display: flex;
    margin-top: 20px;
    color: ${colors.gray};
  }
`;

export const SubTitleStyled = styled.div`
  max-width: 464px;
  @media (max-width: 800px) {
    max-width: 168px;
  }
`;

export const ParagraphSubTitleStyled = styled.div`
  max-width: 464px;
  @media (max-width: 800px) {
    max-width: 168px;
  }
`;
export const AuxDiv = styled.div`
  width: 100%;
`;

export const TextStyledSuperPowers = styled.div`
  //width: 70%;

  //NOVO
  left: 0px;
  width: 100%;
  justify-content: center;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextStyled = styled.div`
  max-width: 464px;
  @media (max-width: 800px) {
    max-width: 168px;
  }
`;

export const ListStyled = styled.div`
  max-width: 464px;
  @media (max-width: 800px) {
    max-width: 168px;
  }
`;

export const SpinningAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
export const SpinningIconStyled = styled.div`
  display: flex;
  position: absolute;
  top: 108rem;
  right: 0;
  overflow: hidden;

  @media (max-width: 1220px) {
    display: none;
  }
`;
export const SpinnerImage = styled.img`
  max-width: 350px;
  right: 0;
  overflow: hidden;
  animation: ${SpinningAnimation} 5s linear infinite;
`;
export const DivCardStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15rem;
  overflow: hidden;

  .cards {
    z-index: 2;
    background-color: #242a33;
    width: 33.33%;
    // width: 464px;
    min-height: 450px;
    max-height: 550px;
    border-radius: 8px;
    padding: 28px;

    @media (max-width: 1150px) {
      width: 464px;
    }

    @media (max-width: 800px) {
      width: 168px;
      min-height: 300px;
      max-height: 350px;
      padding: 16px;
    }
  }
`;

export const StyledGroupCards = styled.hgroup`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1512px;
  justify-content: space-between;
  gap: 32px;

  @media (max-width: 1200px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  h1 {
    text-align: center;
    padding: 20px;
    margin-top: 2rem;
  }

  p {
    margin-left: 4rem;
  }
`;

export const CardTitleStyled = styled.div`
  @media (max-width: 800px) {
    max-width: 160px;
  }
  h1 {
    margin: 0px;
    padding: 0px;
    padding-bottom: 40px;

    @media (max-width: 800px) {
      padding-bottom: 20px;
    }
  }
`;

export const CardParagraphStyled = styled.div`
  width: 100%;
  @media (max-width: 800px) {
    max-width: 160px;
  }

  p {
    margin: 0px;
  }
`;
