import styled from 'styled-components';
import { colors } from '../../../styles/colors';


export const SectionStyled = styled.section`
    background-color: ${colors.black};
    display: grid;
    grid-template-columns: 1fr 2fr;
    color: ${colors.gray};
`;

export const HeaderStyled = styled.div`
    grid-column: 1/-1;
`;

export const TitleGroupStyled = styled.hgroup`

`;

export const TitleStyled = styled.h2`
    max-width: 712px;

`;

export const ParagraphStyled = styled.p`
    max-width: 464px;
`;

export const AsideStyled = styled.aside`

`;

export const AsideTextStyled = styled.span`

`;

export const ContentStyled = styled.div`
    grid-column: 2/3;
`;

export const VideoSectionStyled = styled.div`
    grid-column: 1/-1;
`;

export const VideoTitleStyled = styled.h2`

`;