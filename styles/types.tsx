import styled, { css } from 'styled-components';
import React from 'react';

const theme = {
  colors: {
    black: '#171B21',
    green: '#20BD9D',
    gray: '#F2F3F4',
    strong_gray: '#E5E5E5',
    dark_gray: '#8E9195',
    purple: '#5900CC',
    lightGray: '#8E9195',
  },
  sizes: {
    xsmall: '16px',
    small: '24px',
    medium: '40px',
    large: '64px',
    xlarge: '80px',
    xxlarge: '200px',
  },
  line: {
    xsmall: '22px',
    small: '34px',
    medium: '48px',
    large: '58px',
    xlarge: '80px',
    xxlarge: '200px',
  },
  spacing: {
    space1: '-0.02em',
    space2: '-0.04em',
  },
  wheight: {
    wheight1: 400,
    wheight2: 700,
  },
  family: {
    font1: 'Neue Machina',
    font2: 'Circular Air Pro',
  },
};

export type HeadingProps = {
  color?: keyof typeof theme.colors;
  size?: keyof typeof theme.sizes;
  fontWeight?: keyof typeof theme.wheight;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  lineHeight?: keyof typeof theme.line;
  fontFamily?: keyof typeof theme.family;
  letterSpacing?: keyof typeof theme.spacing;
};

export const Heading = styled('h1').attrs<HeadingProps>(({ level }) => ({
  as: `h${level}`,
}))<HeadingProps>`
  ${({
    color = 'black',
    size = 'small',
    fontWeight = 'wheight1',
    lineHeight = 'small',
    fontFamily = 'font2',
    letterSpacing = 'space2',
  }) => css`
    font-size: ${theme.sizes[size]};
    color: ${theme.colors[color]};
    font-weight: ${fontWeight};
    line-height: ${theme.line[lineHeight]};
    font-family: ${theme.family[fontFamily]};
    letter-spacing: ${theme.spacing[letterSpacing]};
  `}
`;
