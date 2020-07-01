import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import * as Sentry from '@sentry/browser';
import 'typeface-roboto';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './pages/App/App';
import * as serviceWorker from './serviceWorker';
import { AlertContextProvider } from './context/Alert/AlertContextProvider';
import theme from './utils/theme';
import './index.css';

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_TOKEN,
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AlertContextProvider>
        <Router>
          <App />
        </Router>
      </AlertContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
