import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import { AlertContextProvider } from '../../context/Alert/AlertContextProvider';
import theme from '../../utils/theme';

test('renders learn react link', () => {
  const { getByTestId } = render(
    <ThemeProvider theme={theme}>
      <AlertContextProvider>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </AlertContextProvider>
    </ThemeProvider>
  );
  const linkElement = getByTestId(/loading/i);

  expect(linkElement).toBeInTheDocument();
});
