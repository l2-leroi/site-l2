import styled  from 'styled-components';
import { colors } from '../../../styles/colors';

export const HeaderStyled = styled.header`
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    z-index: 50;
    position: relative;
    padding: 0px 28px;
    background-color: ${colors.gray}; 
    overflow: hidden;

    @media (max-width: 500px) {
        user-select: none;
    }
    
    &.white{
        color: white;
    }
`;

export const MainContentStyled = styled.div`
    width: 100%;
    display: flex;
    align-self: center;
    z-index: 50;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const MainTextStyled = styled.hgroup`
    align-self: center;
    margin: 0 auto;
    text-align: center;
    width: 100%;
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
    margin: 0 auto 10px;
    user-select: none;

    @media (max-width: 1220px) {
        font-size: 140px;
    }

    @media (max-width: 910px) {
        font-size: 120px;
        margin-bottom: 20px;
    }

    @media (max-width: 800px) {
        font-size: 64px;   
        margin-bottom: 13px;
    }

    @media (max-width: 500px) {
        &.textWrap {
            max-width: 220px;
            overflow-wrap: break-word;
        } 
    }
`;

export const SubtitleStyled = styled.h2`
    align-self: center;
    font-family: 'Neue Machina';
    font-style: normal;
    font-weight: 800;
    font-size: 4rem;
    line-height: 120%;
    text-align: center;
    letter-spacing: -0.02em;
    margin: 0 auto -10px;
    ::selection {
        background: ${colors.purple};
        color: ${colors.gray};
    }

    @media (min-width: 801px) and (max-width: 1220px) {
        font-size: 34px;
    }

    @media (max-width: 910px) {
        margin-bottom: 15px;
    }

    @media (max-width: 800px) {
        margin-top: 120px;
        margin-bottom: 8px;
    } 
`;

export const TitleComplementStyled = styled.h3`
    align-self: center;
    font-family: 'Circular Air Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 2.4rem;
    line-height: 140%;
    text-align: center;
    letter-spacing: -0.04em;
    max-width: 464px;
    margin: 0 auto;
    ::selection {
        background: ${colors.purple};
        color: ${colors.gray};
    }

    @media (max-width: 800px) {
        width: 212px;
    }  
`;

export const LanguageStyled = styled.div`
    display: flex;
    flex-direction: column;
    list-style: none;
    position: absolute;
    right: 28px;
    
    @media (max-width: 800px) {
        position: static;
        flex-direction: row;
        margin-top: 32px;
        gap: 16px;
    }

    @media (max-width: 500px) {
        opacity: 0;
        gap: 9px;
        
        &.animate {
            opacity: 1;
            transition: opacity .8s;
        }
    }
`;

export const LanguageItemStyled = styled.button`
    background: transparent;
    cursor: pointer;
    border: none;   
    font-family: 'Circular Air Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    text-align: right;
    letter-spacing: -0.02em;

    &.white {
        color: white;
    }

    ::selection {
        background: ${colors.purple};
        color: ${colors.gray};
    }

    &:first-child {
        margin-bottom: 8px;
    }

    &:hover {
        color: ${colors.green};
    }

    @media (max-width: 800px) {
        font-size: 10px;

        &:first-child {
            margin-bottom: 0px;
        }
    }  
`;

export const FooterContentStyled = styled.div`
    width: 100%;
    display: flex;
    align-self: flex-end;
    position: absolute;
    box-sizing: border-box;

    @media (max-width: 800px) {
        position: static;
        align-self: center;
        margin-bottom: 80px;
    }
    
    @media (max-width: 416px) {
        margin-bottom: 34px;
    }

    @media (max-width: 375px) {
        margin-bottom: 80px;
    }

    @media (max-width: 361px) {
        margin-bottom: 0px;
    }
`;

export const SocialMediaStyled = styled.div`
    list-style: none;
    align-self: center;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    bottom: 30px;

    @media (max-width: 500px) {
        opacity: 0;

        &.animate {
            opacity: 1;
            transition: opacity .8s;
        }
    }
`;

export const SocialMediaTitleStyled = styled.span`  
    margin-right: 120px;
    margin-left: 1.2rem;
    position: relative;
    font-family: 'Circular Air Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    letter-spacing: -0.02em;
    ::selection {
        background: ${colors.purple};
        color: ${colors.gray};
    }

    @media (max-width: 800px) {
        font-size: 10px;
        margin-right: 57px;
    }

    &:after {
        content: "";
        width: 84px;
        height: 1px;
        background-color: ${colors.lightGray};
        position: absolute;
        top: 50%;
        margin: 0px 2.4rem;

        @media (max-width: 800px) {
            width: 39px;
        }
    }
`;

export const SocialMediaItemStyled = styled.a`
    margin: 0px 1.2rem;
    font-family: 'Circular Air Pro';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 140%;
    letter-spacing: -0.02em;
    z-index: 50;
    cursor: pointer;

    ::selection {
        background: ${colors.purple};
        color: ${colors.gray};
    }

    @media (max-width: 800px) {
        font-size: 10px;
    }

    &:hover {
        color: ${colors.green};
    }
`;

export const ImageStyled = styled.img`
    display: none;  
    position: absolute;
    z-index: 0;
    height: 100vh;
    width: auto;

    @media (min-width: 2560px) {
        width: 100%;
    }

    &.noneImage {
        display: none;
    }

    &.activeImage {
        display: block;
    }    
`;

export const ArrowSpinnerContainerStyled = styled.div`
    position: absolute;
    right: 148px;
    bottom: -70px;

    @media (min-width: 2560px) {
        right: 703px;
    }

    @media (max-width: 1365px) {
        right: 70px;
    }

    @media (max-width: 800px) {
        right: 0;
        bottom: -45px;
        justify-self: center;
        width: 100%;
    }

    @media (max-width: 500px) {
        opacity: 0;

        &.animate {
            opacity: 1;
            transition: opacity .8s;
        }
    }
`;
