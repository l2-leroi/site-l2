import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const SectionStyled = styled.section`
    background-color: ${colors.black};
    padding-top: 18rem;
    align-items: center;
    display: flex;
    flex-direction: column;
    color: ${colors.gray}
`;

export const TextStyled = styled.p`
    font-family: 'Circular Air Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 140%;
    letter-spacing: -0.04em;
    margin-top: 4rem;
    width: 33%;
`;