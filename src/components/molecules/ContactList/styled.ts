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
  h3 {
    margin-bottom: 19px;
    ::selection {
      background: ${colors.green};
      color: ${colors.black};
    }

    @media (max-width: 800px) {
      margin-bottom: 16px;
    }
  }
`;

export const ContactStyled = styled.a`
  ::selection {
    background: ${colors.green};
    color: ${colors.black};
  }

  &:hover {
    color: ${colors.green};
  }
`;
