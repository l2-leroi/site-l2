import styled from 'styled-components';

export const Container = styled.div`
  .topSpinner {
    height: 100%;
    width: 30%;
  }
  .bottomSpinner {
    width: 30%;
    height: 9950px;
    @media (max-width: 800px) {
      height: 5000px;
    }
  }
`;
