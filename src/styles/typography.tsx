import styled, { css } from 'styled-components';

const theme = {
  colors: {
    black: '#171B21',
    green: '#20BD9D',
    gray: '#F2F3F4',
    strong_gray: '#E5E5E5',
    dark_gray: '#8E9195',
    purple: '#5900CC',
    lightGray: '#8E9195',
    secondary1: '#27E5BF',
    black_1: '#242A33',
  },
  sizes: {
    xxsmall: '1.6rem',
    xsmall: '2.4rem',
    small: '4.0rem',
    medium: '6.4rem',
    large: '7.2rem',
    xlarge: '8rem',
    xxlarge: '20rem',
  },
  line: {
    line90: '90%',
    line100: '100%',
    line120: '120%',
    line140: '140%',
  },
  spacing: {
    space1: '-0.02em',
    space2: '-0.04em',
    space3: '-0.06em',
  },
  weight: {
    weight1: 400,
    weight2: 700,
    weight3: 800,
  },
  family: {
    font1: 'Neue Machina',
    font2: 'Circular Air Pro',
  },
};

export type TypographyProps = {
  color?: keyof typeof theme.colors;
  size?: keyof typeof theme.sizes;
  fontWeight?: keyof typeof theme.weight;
  tag?: any;
  lineHeight?: keyof typeof theme.line;
  fontFamily?: keyof typeof theme.family;
  letterSpacing?: keyof typeof theme.spacing;
};

export const Typography = styled('p').attrs<TypographyProps>(({ tag }) => ({
  as: `${tag}`,
}))<TypographyProps>`
  ${({
    color = 'black',
    size = 'xsmall',
    fontWeight = 'weight1',
    lineHeight = 'line140',
    fontFamily = 'font2',
    letterSpacing = 'space2',
  }) => css`
    font-size: ${theme.sizes[size]};
    color: ${theme.colors[color]};
    font-weight: ${theme.weight[fontWeight]};
    line-height: ${theme.line[lineHeight]};
    font-family: ${theme.family[fontFamily]}, 'Helvetica', 'Arial', sans-serif;
    letter-spacing: ${theme.spacing[letterSpacing]};
  `}
`;
