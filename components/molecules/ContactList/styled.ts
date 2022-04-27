import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const ContentStyled = styled.ul`
  list-style-type: none;
`;

export const ItemStyled = styled.li`
  margin-bottom: 4.6rem;

  &:last-child {
    margin-bottom: 0px;
  }
`;

export const TitleStyled = styled.h3`
  font-family: 'Circular Air Pro', sans-serif;
  font-size: 2.4rem;
  line-height: 3.36rem;
  font-weight: 400;
  letter-spacing: -0.04em;
  margin-bottom: 19px;
  ::selection {
    background: ${colors.green};
    color: ${colors.black};
  }

  @media (max-width: 800px) {
    margin-bottom: 16px;
  }
`;

export const ContactStyled = styled.a`
  font-family: 'Neue Machina', sans-serif;
  font-size: 4rem;
  line-height: 4.8rem;
  letter-spacing: -0.02em;
  font-weight: 800;
  ::selection {
    background: ${colors.green};
    color: ${colors.black};
  }
`;





