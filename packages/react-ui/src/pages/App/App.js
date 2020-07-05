import React, { Suspense, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory, useLocation } from 'react-router-dom';
import { useTheme } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';
import styled, { ThemeProvider } from 'styled-components';
import Button from '@material-ui/core/Button';
import { routes } from '../../routes/routes';
import { Loading } from '../../components/Loading';
import { RoutesList } from '../../routes/RoutesList/RoutesList';
import { useWindowSize } from '../../hooks/useWindowSize';
import logo from '../../assets/marvel-logo.png';
import { getCurrentNavigation } from './AppFunctions';
import { MenuDrawer } from '../../components/MenuDrawer/MenuDrawer';
import { AppBottomNav } from './AppBottomNav';

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: ${props => props.height}px;
`;

const AppContainer = styled.div`
  flex-direction: column;
  overflow: scroll;
  display: flex;
  flex-grow: 1;
  margin-top: 70px;
`;

const LogoImg = styled.img`
  max-height: 66px;
`;

const Title = styled.div`
  flex-grow: 1;
  text-align: center;
  padding-right: ${({ mobile }) => mobile && 32}px;
`;

const App = () => {
  const location = useLocation();
  const history = useHistory();
  const currentNavigation = getCurrentNavigation(location);
  const theme = useTheme();
  const mobile = !useMediaQuery(theme.breakpoints.up('sm'));
  const [, height] = useWindowSize();
  const [open, setOpen] = useState(false);

  const handleMenuClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onClickSearch = () => routes.ADVANCED_SEARCH.redirect(history);
  const onClickImage = () => routes.LIST.redirect(history);
  const onChange = (event, newValue) => routes[newValue].redirect(history);

  return (
    <ThemeProvider theme={theme}>
      <MainDiv height={height}>
        <div>
          <AppBar variant="outlined" position="fixed">
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuClick}
              >
                <MenuIcon />
              </IconButton>
              <Title mobile={mobile}>
                <LogoImg src={logo} alt="Logo" onClick={onClickImage} />
              </Title>
              {!mobile && (
                <Button
                  aria-label="search"
                  color="inherit"
                  onClick={onClickSearch}
                >
                  <SearchIcon />
                </Button>
              )}
            </Toolbar>
          </AppBar>
        </div>
        <AppContainer>
          <Suspense fallback={<Loading id="loading" />}>
            <RoutesList />
          </Suspense>
        </AppContainer>
        <MenuDrawer open={open} handleClose={handleClose} />
        {mobile && (
          <AppBottomNav
            onChange={onChange}
            currentNavigation={currentNavigation}
          />
        )}
      </MainDiv>
    </ThemeProvider>
  );
};

export default App;
