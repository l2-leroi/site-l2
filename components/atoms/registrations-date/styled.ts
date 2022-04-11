import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const Div = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.div`
    font-weight: 400;
    font-size: 2.4rem;
    line-height: 140%;
    text-align: center;
    letter-spacing: -0.04em;
`;

export const Date = styled.div`
    font-family: 'Neue Machina';
    font-style: normal;
    font-weight: 800;
    font-size: 4rem;
    line-height: 120%;
    text-align: center;
    letter-spacing: -0.02em;
`;

export const ExpireDate = styled.div`
    font-family: 'Neue Machina';
    font-style: normal;
    font-weight: 800;
    font-size: 4rem;
    line-height: 120%;
    text-align: center;
    letter-spacing: -0.02em;
    text-decoration-line: line-through;
`;