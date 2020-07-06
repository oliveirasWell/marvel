import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { MemoryRouter } from 'react-router-dom';
import { StyledComponentsThemeProvider } from 'components/styled/StyledComponentsThemeProvider';
import { AlertContextProvider } from 'context/Alert/AlertContextProvider';
import theme from '../theme';

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
