import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/styles';
import { ThemeProvider } from 'styled-components';

const StyledComponentsThemeProvider = ({ children }) => {
  const muiTheme = useTheme();

  return <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>;
};

StyledComponentsThemeProvider.propTypes = {
  /* children component  */
  children: PropTypes.node.isRequired,
};

export { StyledComponentsThemeProvider };
