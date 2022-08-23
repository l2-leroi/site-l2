import styled from 'styled-components';
import ScrollCircle from '../../atoms/ScrollCircle';

export const Container = styled.div`
  .topSpinner {
    height: 300%;
    width: 30%;
  }
  .bottomSpinner {
    width: 30%;
    height: 2350px;
    @media (max-width: 800px) {
      height: 1400px;
    }
  }
`;
export const StyledScrollCircle = styled(ScrollCircle)`
  top: 300px;
`;
