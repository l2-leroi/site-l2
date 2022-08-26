import styled, { keyframes } from 'styled-components';
import { colors } from '../../../styles/colors';

export const SectionStyled = styled.section`
  background-image: linear-gradient(${colors.black} 50%, ${colors.purple} 50%);
  overflow: auto;
`;

export const DiagonalDivStyled = styled.div`
  height: 90vh;
  transform: skewY(17.76deg);
  overflow: hidden;
  transition: transform 0.5s ease;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;

  * {
    transition: transform 0.5s ease;
    transform: skewY(-17.76deg);
  }

  &.wasAnimated {
    transform: skewY(0deg);
    * {
      transform: skewY(0deg);
    }
  }
`;

export const VideoStyled = styled.video`
  top: 0;
  bottom: 0;
  transition: transform 0.5s ease;
  height: 160%;
  background: ${colors.black};
  transform: skewY(0deg) !important;

  &.mouseHide {
    cursor: none;
  }
`;

export const AnchorStyled = styled.a`
  position: absolute;
  top: -50px;
  width: 20px;
  height: 20px;
  background-color: blue;
`;

export const VideoContainerStyled = styled.div`
  top: 0;
  width: 100%;
  transition: transform 0.5s ease;
  background: ${colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const VideoIconStyled = styled.div`
  position: absolute;
  align-self: center;
  justify-self: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  transform: skewY(0deg);

  img {
    transform: skewY(0deg);
  }
`;

export const OpacityAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const TitleStyled = styled.div`
  transform: skewY(17.76deg);
  position: absolute;
  top: 20%;
  left: 30px;
  z-index: 20;
  pointer-events: none;

  &.animate {
    animation: ${OpacityAnimation} 0.5s linear;
  }
`;

export const PlayerIconStyled = styled.img`
  transition: all 0.5s ease;
  grid-column: 1;
  grid-row: 1;
  max-width: 140px;
  cursor: pointer;

  &.animate {
    animation: ${OpacityAnimation} 0.5s linear;
  }

  @media (max-width: 800px) {
    max-width: 34px;
  }
`;

export const VideoControlsStyled = styled.div`
  width: 100%;
  display: none;
  flex-direction: column;
  padding: 0px 12px;
  box-sizing: border-box;
  padding-bottom: 10px;
  transition: all 0.5s ease;
  pointer-events: all;
  position: absolute;
  align-self: end;
  margin-top: -80px;

  &.animate {
    animation: ${OpacityAnimation} 0.5s linear;
    display: flex;
  }
`;

export const ControlsStyled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 16px;
`;

export const ProgressContainerStyled = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
`;

export const ProgressStyled = styled.input`
  width: 100%;
  margin-bottom: 14px;
  height: 2px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: none;
  border: none;
  background-color: ${colors.black_1};
  background-size: 10% 100%;
  background-image: linear-gradient(${colors.green}, ${colors.green});
  background-repeat: no-repeat;
  cursor: pointer;

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: ${colors.green};
    transition: all 0.5s ease;
  }
`;

export const ProgressCircle = styled.span`
  content: '';
  display: block;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: ${colors.green};
  position: absolute;
  top: -10px;
  transition: left 0.5s ease;
`;

export const PrimaryButtonsStyled = styled.div`
  width: 100%;
  display: flex;
  gap: 40px;

  @media (max-width: 800px) {
    gap: 20px;
  }
`;

export const ButtonStyled = styled.img`
  max-width: 35px;
  max-height: 35px;
  cursor: pointer;
  transition: all 0.2s ease;

  &.lastButtons {
    margin-right: 40px;
  }

  @media (max-width: 800px) {
    &.lastButtons {
      margin-right: 20px;
    }
  }

  @media (max-width: 600px) {
    max-width: 30px;
    max-height: 30px;
  }

  &.muted {
    max-height: 40px;
    margin-top: -2px;
  }
`;

export const VolumeContainerStyled = styled.div`
  display: flex;
  position: relative;

  &:hover div,
  div:hover {
    display: flex;
  }
`;

export const SliderContainer = styled.div`
  width: 100px;
  height: 35px;
  display: none;
  margin: 0 auto;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    max-height: 30px;
  }
`;

export const VolumeSliderStyled = styled.input`
  height: 4px;
  width: 100%;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: none;
  border: none;
  background-color: ${colors.gray};
  background-size: 10% 100%;
  background-image: linear-gradient(${colors.green}, ${colors.green});
  background-repeat: no-repeat;
  cursor: pointer;

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: ${colors.green};
  }
`;
