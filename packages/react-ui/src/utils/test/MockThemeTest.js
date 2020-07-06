import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { MemoryRouter } from 'react-router-dom';
import { AlertContextProvider } from '../../context/Alert/AlertContextProvider';
import theme from '../theme';
import { StyledComponentsThemeProvider } from '../../components/styled/StyledComponentsThemeProvider';

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
