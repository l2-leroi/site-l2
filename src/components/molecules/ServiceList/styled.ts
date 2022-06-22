import styled from 'styled-components';
import { colors } from '../../../styles/colors';


export const ListStyled = styled.div`

`;

export const SubtitleStyled = styled.h3`

`;

export const ParagraphStyled = styled.p`
    max-width: 464px;
`;

export const ContentStyled = styled.div`

`;

export const ImageStyled = styled.img`

`;

export const VideoStyled = styled.div`

`;

export const AltVideoStyled = styled.span`

`;

export const AboutListStyled = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

export const ListItemStyled = styled.li`
    list-style: none;
    margin: 0px;
    padding: 0px;

    &:nth-of-type(odd){
        grid-column: 1/2;
    }

    &:nth-of-type(even){
        grid-column: 2/3;
    }
`;

export const VideoIconStyled = styled.img`
`;