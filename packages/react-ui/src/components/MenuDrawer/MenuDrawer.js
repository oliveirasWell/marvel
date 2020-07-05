import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { routes } from '../../routes/routes';
import { DivFullList } from './MenuStyles';
import logo from '../../assets/marvel-logo.png';

const MenuImg = styled.img`
  max-height: 66px;
`;

export const MenuDrawer = ({ open, handleClose }) => {
  const history = useHistory();

  return (
    <Drawer anchor="left" open={Boolean(open)} onClose={handleClose}>
      <DivFullList role="presentation" onClick={handleClose}>
        <List>
          <ListItem button>
            <MenuImg
              src={logo}
              alt="Logo"
              onClick={() => routes.LIST.redirect(history)}
            />
          </ListItem>
          <Divider />
          {Object.values(routes)
            .filter(({ menu }) => !!menu)
            .map((route, index) => {
              const { path, title } = route;

              return (
                <ListItem
                  button
                  onClick={() => route.redirect(history)}
                  key={`${path}*menu`}
                  role="menuitem"
                  tabIndex={index}
                >
                  <ListItemText primary={title} />
                </ListItem>
              );
            })}
        </List>
      </DivFullList>
    </Drawer>
  );
};
