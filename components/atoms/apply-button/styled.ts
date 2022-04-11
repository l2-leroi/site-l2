import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const Div = styled.div`
`;

export const Button = styled.button`
    font-weight: 400;
    font-size: 24px;
    line-height: 140%;
    color: ${colors.black};
    background-color: ${colors.green};
    padding: 0px 1.6rem;
    border: 0.2rem solid ${colors.green};
    box-sizing: border-box;
    border-radius: 2.4rem;
    margin-right: 0.8rem;
    height: 5rem;
    cursor: pointer;
    `;
    
    export const Arrow = styled.button`
    border: 0.2rem solid ${colors.green};
    box-sizing: border-box;
    border-radius: 2.4rem;
    width: 5.1rem;
    height: 5rem;
    font-size: 3rem;
    background-color: ${colors.green};
    cursor: pointer;
`;