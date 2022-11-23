import styled from 'styled-components';
import { colors } from '../../../styles/colors';
import ScrollCircle from '../../atoms/ScrollCircle';

export const Container = styled.div`
  .topSpinner {
    height: 500%;
    width: 30vw;
    position: relative;
    top: -300px;
    z-index: 5;
  }

  h1,
  h2,
  p {
    ::selection {
      background: ${colors.purple};
      color: ${colors.gray};
    }
  }
`;

export const StyledScrollCircle = styled(ScrollCircle)`
  top: 300px;
`;
