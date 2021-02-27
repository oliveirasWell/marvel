import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { MemoryRouter } from 'react-router-dom';
import theme from '../theme';
import { AlertContextProvider } from '../../context/Alert/AlertContextProvider';
import { StyledComponentsThemeProvider } from '../../providers/StyledComponentsThemeProvider';

const MockedProvidersTest = ({ children }) => (
  <AlertContextProvider>
    <MemoryRouter>
      <MuiThemeProvider theme={theme}>
        <StyledComponentsThemeProvider>
          {children}
        </StyledComponentsThemeProvider>
      </MuiThemeProvider>
    </MemoryRouter>
  </AlertContextProvider>
);

export { MockedProvidersTest };
