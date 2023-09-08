import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

export const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast-body {
    color: #212121;
  }

  .Toastify__progress-bar {
    background: linear-gradient(
      to right,
      #ffffff,
      #9b9faa,
      #9b9faa,
      #9b9faa,
      #fc842d,
      #fc842d,
      #ffffff
    );
  }
`;
