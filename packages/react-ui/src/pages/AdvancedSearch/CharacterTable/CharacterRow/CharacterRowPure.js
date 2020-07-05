import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const CharacterRowPure = React.memo(
  ({ name, thumbnail: { extension, path }, url }) => {
    const onClick = () => window.open(url);

    return (
      <TableRow>
        <TableCell>
          <Avatar alt={name} src={`${path}.${extension}`} />
        </TableCell>
        <TableCell>{name}</TableCell>
        <TableCell>
          {url && (
            <Button onClick={onClick} size="small">
              More Details
            </Button>
          )}
        </TableCell>
      </TableRow>
    );
  }
);

CharacterRowPure.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  thumbnail: PropTypes.shape({
    extension: PropTypes.string,
    path: PropTypes.string,
  }),
};

export { CharacterRowPure };
