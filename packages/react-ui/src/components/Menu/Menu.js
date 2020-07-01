import React from 'react';
import { useHistory } from 'react-router-dom';
import { useTheme } from '@material-ui/styles';
import { routes } from '../../routes/routes';

const Menu = () => {
  const history = useHistory();
  const theme = useTheme();

  return (
    <>
      {Object.values(routes)
        .filter(({ menu }) => !!menu)
        .map((route, index) => {
          const { path, title } = route;
          const style = {
            fontSize: '1.25rem',
            fontWeight: 300 + 200 * index,
            marginTop: theme.spacing(1),
          };

          return (
            <div
              key={`${path}*menu`}
              onClick={() => route.redirect(history)}
              role="menuitem"
              tabIndex={index}
              style={style}
            >
              {title}
            </div>
          );
        })}
    </>
  );
};

export { Menu };
