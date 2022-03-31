import styled, { keyframes } from 'styled-components';
import { colors } from '../../../styles/colors';
import Image from "next/image";

export const ContentStyled = styled.section`
  display: flex;
  flex-direction: column;  
`;

export const ListStyled = styled.section`
  display: inline-flex;
`;

export const CaseStyled = styled.article`
  width: 464px;
  height: 1008px;
  opacity: 0;
  transition: .8s;
  transform: translate3d(0, 200px, 0);

  &:nth-child(2) {
    margin: 30rem 3.2rem 0;
  }

  &:nth-child(3) {
    margin-top: 60rem;
  }

  &.animate {
    opacity: 1;
    transform: translate3d(0, 0, 0);
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

export const LinkStyled = styled.a``;

export const ImageStyled = styled(Image)`
  cursor: pointer;
  border-radius: 8px;
`;

export const ButtonContentStyled = styled.section`
  margin: 8rem 4rem 0 0;
`;