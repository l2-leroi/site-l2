import styled, { keyframes }  from 'styled-components';
import { colors } from '../../../styles/colors';

export const HeaderStyled = styled.header`
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    z-index: 50;
    position: relative;

    &.white{
        color: white;
    }
`;

export const MainContentStyled = styled.div`
    width: 100%;
    display: flex;
    padding: 0px 28px;
    box-sizing: border-box;
    align-self: center;
    z-index: 50;
`;

export const MainTextStyled = styled.hgroup`
    align-self: center;
    margin: 0 auto;
    text-align: center;
    box-sizing: border-box;
`;

export const TitleStyled = styled.h1`
    align-self: center;
    font-family: 'Neue Machina';
    font-style: normal;
    font-weight: 800;
    font-size: 200px;
    line-height: 100%;
    text-align: center;
    letter-spacing: -0.04em;
    margin: 0 auto;
    cursor: pointer;
    
`;

export const SubtitleStyled = styled.h2`
    align-self: center;
    font-family: 'Neue Machina';
    font-style: normal;
    font-weight: 800;
    font-size: 40px;
    line-height: 120%;
    text-align: center;
    letter-spacing: -0.02em;
    margin: 0 auto;
    
`;

export const TitleComplementStyled = styled.h3`
    align-self: center;
    font-family: 'Circular Air Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 140%;
    text-align: center;
    letter-spacing: -0.04em;
    max-width: 464px;
    margin: 0 auto;
    
`;

export const LanguageStyled = styled.ul`
    align-self: center;
    justify-self: flex-end;
    list-style: none;
    position: absolute;
    right: 28px;
    
`;

export const LanguageItemSyled = styled.li`
    font-family: 'Circular Air Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    text-align: right;
    letter-spacing: -0.02em;
    
`;

export const FooterContentStyled = styled.div`
    width: 100%;
    display: flex;
    position: relative;
    align-self: flex-end;
    box-sizing: border-box;
    padding 28px 0px;
`;

export const SocialMediaStyled = styled.ul`
    list-style: none;
    align-self: center;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SocialMediaTitleStyled = styled.li`
    
    margin-right: 120px;
    margin-left: 24px;
    position: relative;
    font-family: 'Circular Air Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    letter-spacing: -0.02em;


    &:after {
        content: "";
        width: 84px;
        height: 1px;
        background-color: ${colors.lightGray};
        position: absolute;
        top: 50%;
        margin: 0px 24px;

    }
`;

export const SocialMediaItemStyled = styled.li`
    margin: 0px 12px;
    font-family: 'Circular Air Pro';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 140%;
    letter-spacing: -0.02em;
`;

export const ArrowSpinnerContainerStyled = styled.div`
    align-self: center;
    justify-self: flex-end;
    position: absolute;
    right: 10%;
`;

export const ArrowSpinnerComponentStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

export const SpinningAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const ImageArrowSpinnerStyled = styled.img`

    &.absolute {
        position: absolute;
        animation: ${SpinningAnimation} 27s linear infinite;

    }
`;

export const ImageStyled = styled.img`
    display: none;  
    position: absolute;
    z-index: 0;
    height: 100vh;
    width: 100%;

    &.noneImage {
        display: none;
    }

    &.activeImage {
        display: block;
    }
    
`;

