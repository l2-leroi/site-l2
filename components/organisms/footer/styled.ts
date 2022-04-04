import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const FooterStyled = styled.footer`
  color: ${colors.gray};
  background-color: ${colors.purple};
  height: 1156px; 
  width: 100%;
  padding: 0 2.8rem 6.05rem;
`;

export const ContentStyled = styled.section`
  width: 515px;
  position: relative;
`;

export const AsideStyled = styled.aside`
  position: absolute;
  width: 100%;
  left: 674px;
  top: 95px;
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
  margin-bottom: 9.1rem;
`;

export const CopyrightStyled = styled.footer`
  margin-top: 9.2rem;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
`;

export const InfoStyled = styled.section`
  font-family: 'Circular Air Pro', sans-serif;
  font-size: 1.6rem;
  line-height: 22.4px;
  font-weight: 400;

  &:first-child {
    text-align: start;
  }
  
  &:last-child {
    text-align: end;
  }
`;

export const LinkStyled = styled.a``;

export const PhraseStyled = styled.p`
  &:first-child {
    margin-bottom: .9rem;
  }
`;
