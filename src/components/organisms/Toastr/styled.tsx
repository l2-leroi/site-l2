import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { colors } from '../../../styles/colors';

export const Message = styled.span``;

export const StyledContainer = styled(ToastContainer).attrs({
  enableMultiContainer: true,
  containerId: 'Toastr',
})`
  .Toastify__toast-body > div:last-child {
    display: flex;
    flex: 1 1;
    justify-content: center;
  }

  &.Toastify__toast-container {
    padding: 0px;
    width: 100%;
    margin-bottom: 0;
    position: absolute;
    top: 108px;
    z-index: 58;
    @media (max-width: 800px) {
      top: 101px;
    }
    @media (max-width: 500px) {
      top: 0px;
    }
  }

  .Toastify__toast {
    background-color: ${colors.black_1};
    border-radius: 0px;
    margin: 0;
    padding: 20px;
    z-index: 1;
  }

  .Toastify__toast-theme--light {
    color: #f2f3f4;
  }

  button {
    color: #f2f3f4;
    opacity: 1;
    margin: auto 0;
  }

  .Toastify__toast-icon {
    display: none;
  }
`;
