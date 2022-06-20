import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const SectionStyled = styled.section`
    background-color: ${colors.gray};
    overflow: hidden;
    padding-bottom: 20rem;
`; 

export const DivStyled = styled.div`
    margin-top: 8rem;
    display:flex;
    flex-direction: column;
`;

export const Title = styled.h4`
    font-family: 'Neue Machina';
    font-style: normal;
    font-weight: 800;
    font-size: 4rem;
    line-height: 120%;
    letter-spacing: -0.02em;
    align-self: center;
    width: 46rem;
`;

export const Paragraph = styled.p`
    font-family: 'Circular Air Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 140%;
    letter-spacing: -0.04em;
    margin: 4rem 0;
    width: 46rem;
    align-self: center;
`;