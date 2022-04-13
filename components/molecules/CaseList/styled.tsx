import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const ContentStyled = styled.section`
  display: flex;
  flex-direction: column;  
  overflow: hidden;
`;

export const ListStyled = styled.section`
  display: inline-flex;
`;

export const CaseStyled = styled.article`
  width: 464px;
  height: 1088px;
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
  
  @media (max-width: 1350px) {
    height: 930px;
    width: 415px;
  }
  
  @media (max-width: 1155px) {
    height: 880px;
  }

  @media (max-width: 800px) {
    width: 248px;
    height: 565px;
  }

  @media (max-width: 600px) {
    height: 440px;
  }

  @media (max-width: 540px) {
    height: 400px;
  }
`;

export const CaseNumberStyled = styled.h3`
  font-family: 'Circular Air Pro', sans-serif;
  weight: 400;
  font-size: 16px;
  line-height: 22.4px;
  padding: 0 0 3.2rem 10px;
  border-bottom: 1px solid ${colors.dark_gray};

  @media (max-width: 800px) {
    font-size: 10px;
    line-height: 14px;
  }
`;

export const TitleStyled = styled.h4`
  font-family: 'Neue Machina', sans-serif;
  weight: 800;
  font-size: 4rem;
  line-height: 4.8rem;
  padding: 4.4rem 0 2.8rem 0;
`;

export const InfoStyled = styled.p`
  font-family: 'Circular Air Pro', sans-serif;
  weight: 400;
  font-size: 2.4rem;
  line-height: 3.36rem;
  padding-bottom: 3.2rem;
  width: 345px;

  @media (max-width: 800px) {
    width: 175px;
  }
`;

export const LinkStyled = styled.a`
  cursor: pointer;
`;

export const ImageStyled = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  position: absolute;
  
  &.imageBlock {
    display: block;
  }

  &.imageNone {
    display: none;
  }
`;

export const ButtonContentStyled = styled.section`
  margin-right: 40px;

  @media (max-width: 1366px) {
    margin-right: 0px;
  }
`;