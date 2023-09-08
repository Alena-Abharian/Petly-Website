import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import App from 'components/App';
import GlobalStyles from 'utils/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from 'utils/theme';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { StyledToastContainer } from 'config/toast/toastifyConfig';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="Petly-Website">
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ThemeProvider>
    <GlobalStyles />
    <StyledToastContainer closeButton={false} />
  </React.StrictMode>
);
