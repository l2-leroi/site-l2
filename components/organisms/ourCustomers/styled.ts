import styled, { keyframes } from 'styled-components';
import { colors } from '../../../styles/colors';

export const OurCustomersStyled = styled.section`
  background-color: #fff;
  width: 100%;
  overflow: hidden;
  // transform: skewY(30deg);
`;

export const Teste = styled.section`
  // background-color: #fff;
  width: 100%;
  transform: skewY(17deg);
  background-color: ${colors.black};
  padding: 100px 0px;
`;

export const BlackLineStyled = styled.section`
  color: ${colors.gray};
  // background-color: ${colors.black};
  // clip-path: polygon(0 0, 100% 40%, 100% 100%, 0% 100%);
  transform: skewY(-17deg);
  // background: -webkit-linear-gradient(73deg, ${colors.black} 67%, #fff 0%);
  // background: linear-gradient(20deg, ${colors.black} 60%, transparent 30%);
  z-index: 1;
  width: 100%;
  padding: 13px 28px;
`;

export const HeaderStyled = styled.hgroup`
  max-width: 648px;
`;

export const TitleStyled = styled.h2`
  font-family: 'Neue Machina', sans-serif;
  font-style: normal;
  font-size: 6rem;
  line-height: 90%;
  font-weight: 800;
  margin-bottom: 40px;
  letter-spacing: -0.04em;
`;

export const SubtitleStyled = styled.h3`
  font-family: 'Circular Air Pro', sans-serif;
  max-width: 464px;
  margin-bottom: 117px;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 140%;
  letter-spacing: -0.04em;
`;

export const ContentStyled = styled.section`
  max-width: 646px;
  position: relative;
`;

export const SignStyled = styled.div`
  font-family: 'Neue Machina', sans-serif;
  font-style: normal;
  font-size: 2.5rem;
  line-height: 200%;
  font-weight: 800;
  letter-spacing: -0.02em;
  // transform: rotate(17.76deg);
  text-align: center;
  color: ${colors.darkgray};
  overflow: hidden;
  padding-left: 30px;
  width: 100%;
  max-height: 40px;
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
  position: absolute;
  top: 0px;
  right: 40px;
  z-index: 99;  
  overflow-x: hidden;
  animation: ${SpinningAnimation} 5s linear infinite;
`;