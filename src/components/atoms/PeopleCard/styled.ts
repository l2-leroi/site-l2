import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
    background-color: ${colors.black};
    gap: 20px;
`;

export const ImagesContainer = styled.div`
    position: relative
`;

export const ImageProtect = styled.div`
    width: 100%;
    height: 100%;
    z-index: 40;
    position: absolute;
    top: 0;
    left: 0;
`;

export const ImageIcon = styled.img`
    max-width: 100%;
    border-radius: 16px;
    min-width: 250px;
    display: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    @media (max-width: 600px) {
        min-width: 120px;
    }

    &.active {
        display: block;
    }
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

`;
