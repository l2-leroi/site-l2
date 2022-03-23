import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const ContentStyled = styled.section``;

export const ListStyled = styled.section`
  display: inline-flex;
`;

export const CaseStyled = styled.article`
  width: 464px;
  height: 1008px;

  &:nth-child(2) {
    margin: 30rem 3.2rem 0;
  }

  &:nth-child(3) {
    margin-top: 60rem;
  }
`;

export const CaseNumberStyled = styled.h3`
  font-family: 'Circular Air Pro', sans-serif;
  weight: 400;
  font-size: 1.6rem;
  line-height: 22.4px;
  padding-bottom: 3.2rem;
  border-bottom: 1px solid ${colors.dark_gray};
`;

export const TitleStyled = styled.h4`
  font-family: 'Neue Machina', sans-serif;
  weight: 800;
  font-size: 4rem;
  line-height: 48px;
  padding: 4.4rem 0 2.8rem 0;
`;

export const InfoStyled = styled.p`
  font-family: 'Circular Air Pro', sans-serif;
  weight: 400;
  font-size: 2.4rem;
  line-height: 33.6px;
  padding-bottom: 3.2rem;
  width: 345px;
`;

export const LinkStyled = styled.a`
  cursor: pointer;
`;

export const ButtonContentStyled = styled.section`
  float: right;
  margin: 8rem 5rem 0 0;
`;

export const ButtonStyled = styled.button`
  width: 50px;
  height: 50px;
  border: 2px solid ${colors.green};
  border-radius: 24px;
  font-family: 'Circular Air Pro', sans-serif;
  weight: 400;
  font-size: 2.4rem;
  line-height: 3.36rem;
  margin-right: .8rem;

  &:first-child {
    width: 320px;
    padding: 0 1.6rem;
  }
`;