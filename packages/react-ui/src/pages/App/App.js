import React, { Suspense, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory, useLocation } from 'react-router-dom';
import { useTheme } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { routes } from '../../routes/routes';
import { Loading } from '../../components/Loading';
import { RoutesList } from '../../routes/RoutesList/RoutesList';
import { useWindowSize } from '../../hooks/useWindowSize';
import logo from '../../assets/marvel-logo.png';
import { getCurrentNavigation } from './AppFunctions';
import { useAppStyles } from './AppStyles';
import { MenuDrawer } from '../../components/MenuDrawer/MenuDrawer';

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

const style = { maxHeight: 66 };

const App = () => {
  const location = useLocation();
  const history = useHistory();
  const currentNavigation = getCurrentNavigation(location);
  const theme = useTheme();
  const mobile = !useMediaQuery(theme.breakpoints.up('sm'));
  const classes = useAppStyles();
  const [, height] = useWindowSize();
  const [open, setOpen] = useState(false);

  const handleMenuClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <MainDiv height={height}>
      <div className={classes.rootAppBar}>
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
            <div className={classes.title}>
              <img
                src={logo}
                alt="Logo"
                style={style}
                onClick={() => routes.LIST.redirect(history)}
              />
            </div>
            {!mobile && (
              <Button
                aria-label="search"
                color="inherit"
                onClick={() => routes.ADVANCED_SEARCH.redirect(history)}
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
        <BottomNavigation
          value={currentNavigation}
          classes={{
            root: classes.root,
          }}
          onChange={(event, newValue) => routes[newValue].redirect(history)}
          showLabels
        >
          <BottomNavigationAction
            label="Comics"
            icon={<MenuBookIcon />}
            value="LIST"
          />
          <BottomNavigationAction
            label="Search"
            icon={<SearchIcon />}
            value="ADVANCED_SEARCH"
          />
        </BottomNavigation>
      )}
    </MainDiv>
  );
};

export default App;
