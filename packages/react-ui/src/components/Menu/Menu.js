import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { routes } from 'routes/routes';

const MenuItem = styled.div`
  font-size: 1.25rem;
  margin-top: ${({ theme }) => theme.spacing(1)}px;
  font-weight: ${({ fontWeight }) => fontWeight};
`;

const Menu = () => {
  const history = useHistory();

  return (
    <>
      {Object.values(routes)
        .filter(({ menu }) => !!menu)
        .map((route, index) => {
          const { path, title } = route;

          return (
            <MenuItem
              key={`${path}*menu`}
              onClick={() => route.redirect(history)}
              role="menuitem"
              tabIndex={index}
              fontWeight={300 + 200 * index}
            >
              {title}
            </MenuItem>
          );
        })}
    </>
  );
};

export { Menu };
