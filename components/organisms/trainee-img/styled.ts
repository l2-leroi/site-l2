import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const SectionStyled = styled.section`
    background-color: ${colors.black};
    color: ${colors.gray};
    padding-top: 24rem;
    display: flex;
    padding-right: 15rem;
    padding-left: 2.8rem;
    padding-bottom: 60rem;
    clip-path: polygon(0 0,100% 0,100% 100%,0 70%);
    margin-top: -0.1rem;
    align-items: center;
`;

export const TextStyled = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15rem;
    width: 36%;
`;

export const Title = styled.h4`
    font-family: 'Neue Machina';
    font-style: normal;
    font-weight: 800;
    font-size: 4rem;
    line-height: 120%;
    letter-spacing: -0.02em;
`;

export const Paragraph = styled.p`
    font-family: 'Circular Air Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 2.4rem;
    line-height: 140%;
    letter-spacing: -0.04em;
    margin-top: 4rem;
`;

export const Subtitle = styled.p`
    font-family: 'Circular Air Pro';
    font-style: normal;
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 140%;
    letter-spacing: -0.04em;
    margin-top: 4rem;
    margin-bottom: 2rem;
`;

export const List = styled.ul`
    padding-left: 2.5rem;
    list-style: "+ ";
    margin-bottom: 8rem
`;

export const ListItem = styled.li`
    font-family: 'Circular Air Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 2.4rem;
    line-height: 140%;
    letter-spacing: -0.04em;
`;