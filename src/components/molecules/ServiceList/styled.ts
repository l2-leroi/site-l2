import styled from 'styled-components';
import { colors } from '../../../styles/colors';


export const ListStyled = styled.div`

    &:last-child div:last-child li:nth-of-type(4){
        margin-top: -35px;
    }

`;

export const SubtitleStyled = styled.h3`
    margin-bottom: 40px;
`;

export const ParagraphStyled = styled.p`
    max-width: 464px;
    margin: 40px 0px;
`;

export const ContentStyled = styled.div`
    &:last-child hr{
        display: none;
    }
`;
export const ImageContainerStyled = styled.div`

`;

export const ImageStyled = styled.img`
    margin-right: 32px;
`;

export const VideoStyled = styled.div`
   display: flex;
   flex-direction: column;
`;

export const AltVideoStyled = styled.span`
    margin-top: 28px;
    width: 100%;
    align-self: flex-end;
    justify-self: flex-end;
`;

export const AboutListStyled = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 40px;
    margin-bottom: 80px;
`;

export const ListItemStyled = styled.li`
    list-style: none;
    margin: 0px;
    padding: 0px;
    padding-left: 26px;
    position: relative;

    &::before {
        content: "+";
        position: absolute;
        top: 6px;
        left: 0px;
        z-index: 6;
        font-size: 18px;
        color: ${colors.gray};
        font-weight: 800;
        text-shadow: 1px 0px 0 #fff, 0px 1px 0 #fff;
    }

    &:nth-of-type(odd){
        grid-column: 1/2;
    }

    &:nth-of-type(even){
        grid-column: 2/3;
    }
`;

export const VideoIconStyled = styled.img`
    max-width: 100%;
    display: block;
    flex: 1 1 90px;
    // align-items: baseline;
    
    // :first-of-type {
    //     width: 120px;
    //     height: 120px;
    //     padding-right: 40px;
    //     flex: 1 1 40px;
    // }
`;

export const VideoIconContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const LineStyled = styled.hr`
    border-color: ${colors.lightGray};
    margin-bottom: 80px;
`;