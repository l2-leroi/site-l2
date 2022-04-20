import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const ContainerStyled = styled.div`
  color: ${colors.black};
  background-color: ${colors.strong_gray};
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 82%);
  padding: 10rem 2.8rem 40rem;
`;

export const ContentStyled = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 1500px;
  margin: 0 auto;
`;

export const DivStyled = styled.div`
  display: flex;
  align-items: end;
  margin-bottom: 3.6rem;
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
`;

export const ParagraphStyled = styled.p`
  font-family: 'Circular Air Pro', sans-serif;
  font-size: 1.6rem;
  line-height: 22.4px;
  font-weight: 400;
`;

export const TitleStyled = styled.h2`
  font-family: 'Neue Machina', sans-serif;
  font-size: 6.4rem;
  line-height: 57.6px;
  font-weight: 800;
  width: 712px;

  @media (max-width: 800px) {
    width: 278px;
    line-height: 28.8px;
  }

  @media (max-width: 414px) {
    width: 264px;
    line-height: 28.8px;
  }
`;

export const PhraseStyled = styled.p`
  font-family: 'Circular Air Pro', sans-serif;
  weight: 400;
  font-size: 2.4rem;
  line-height: 3.36rem;
  width: 502px;
  margin-bottom: 8rem;

  @media (max-width: 800px) {
    width: 175px;
  }
`;

export const ScrollArrow = styled.div`
  position: absolute;
  right: 14.8rem;
  bottom: -7rem;
  @media (max-width: 800px) {
    bottom: -8.99rem;
    right: 0.05rem;
    width: 100%;
  }

  @media (min-width: 2560px) {
      right: 703px;
  }
`;