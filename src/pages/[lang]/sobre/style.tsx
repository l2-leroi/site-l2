import styled from 'styled-components';
import ScrollCircle from '../../../components/atoms/ScrollCircle';

export const Container = styled.div`
  .topSpinner {
    height: 100%;
    width: 30%;
  }
  .bottomSpinner {
    width: 30%;
    height: 3000px;
    @media (max-width: 800px) {
      height: 1400px;
    }
  }
`;
export const StyledScrollCircle = styled(ScrollCircle)`
  top: 300px;
`;
