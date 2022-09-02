import styled from 'styled-components';
import { colors } from '../../../styles/colors';
import ScrollCircle from '../../atoms/ScrollCircle';

export const Container = styled.div`
  .TopWhiteSpinner {
    height: 300%;
    width: 30%;
    position: relative;
    // top: -295px;
    z-index: 5;
  }
  #divTopSpinner {
    height: 210px;
    margin-top: -295px;
    bacground: grey;
  }
  .topSpinner {
    //height: 300%;
    height: 500%;
    width: 30%;
    position: relative;
    top: -295px;
    z-index: 5;
  }
  .bottomSpinner {
    top: -200px;
    z-index: 1;
    width: 30%;
    // height: 2350px;
    height: 2860px;
    position: absolute;
    @media (max-width: 800px) {
      height: 1400px;
    }
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
