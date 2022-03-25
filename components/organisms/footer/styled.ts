import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const FooterStyled = styled.footer`
  color: ${colors.gray};
  background-color: ${colors.purple};
  clip-path: polygon(0 0, 100% 41.6%, 100% 100%, 0% 100%);
  width: 100%;
  padding: 35.5rem 2.8rem 6.05rem;
`;

export const ContentStyled = styled.div`
  position: relative;
`;

export const AsideStyled = styled.aside`
  position: absolute;
  width: 100%;
  left: 676px;
  top: 101px;
`;

export const ParagraphStyled = styled.p`
  font-family: 'Circular Air Pro', sans-serif;
  font-size: 1.6rem;
  line-height: 22.4px;
  font-weight: 400;
  letter-spacing: -0.02em;
`;

export const TitleStyled = styled.h2`
  font-family: 'Neue Machina', sans-serif;
  font-size: 6.4rem;
  line-height: 57.6px;
  font-weight: 800;
  letter-spacing: -0.04em;
  margin-bottom: 10rem;
  padding-right: 815px;
`;

export const CopyrightStyled = styled.div`
  margin-top: 9.5rem;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
`;

export const InfoStyled = styled.div`
  font-family: 'Circular Air Pro', sans-serif;
  font-size: 1.6rem;
  line-height: 22.4px;
  font-weight: 400;
  letter-spacing: -0.02em;

  &:first-child {
    text-align: start;
  }
  
  &:last-child {
    text-align: end;
  }
`;

export const LinkStyled = styled.a`
  margin: 0 375px 0 329px;
`;

export const PhraseStyled = styled.p`
  &:first-child {
    margin-bottom: .85rem;
  }
`;

export const IconStyled = styled.span`
  margin: 0 0.8rem 0 0.9rem;
  vertical-align: middle;
`;
