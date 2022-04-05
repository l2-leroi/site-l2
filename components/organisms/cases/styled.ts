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

export const AsideStyled = styled.aside`
  position: absolute;
  left: 765px;
  top: 200px;
`;

export const ParagraphStyled = styled.p`
  font-family: 'Circular Air Pro', sans-serif;
  font-size: 1.6rem;
  line-height: 22.4px;
  font-weight: 400;
`;

export const Teste = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const TitleStyled = styled.h2`
  font-family: 'Neue Machina', sans-serif;
  font-size: 6.4rem;
  line-height: 57.6px;
  font-weight: 800;
  margin-bottom: 3.6rem;
  width: 716px;
`;

export const PhraseStyled = styled.p`
  font-family: 'Circular Air Pro', sans-serif;
  weight: 400;
  font-size: 2.4rem;
  line-height: 33.6px;
  width: 502px;
  margin-bottom: 8rem;
  text-align: justify;
`;