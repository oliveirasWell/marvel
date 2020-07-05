import React from 'react';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BottomNavigation as MuiBottomNavigation } from '@material-ui/core';

const BottomNavigation = styled(MuiBottomNavigation)`
  & .MuiBottomNavigation-root {
    position: sticky;
    bottom: 0;
  }
`;

const AppBottomNav = ({ currentNavigation, onChange }) => (
  <BottomNavigation value={currentNavigation} onChange={onChange} showLabels>
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
);

AppBottomNav.propTypes = {
  currentNavigation: PropTypes.number,
  onChange: PropTypes.func,
};

export { AppBottomNav };
