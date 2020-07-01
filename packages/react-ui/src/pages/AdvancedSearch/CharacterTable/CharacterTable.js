import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { EmptyState } from '../../../components/EmptyState/EmptyState';
import { CharacterRow } from './CharacterRow/CharacterRow';

const style = { width: '100%' };

export const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1),
  },
}));

const CharacterTable = ({ results }) => {
  const classes = useStyles();

  return (
    <Paper
      component="form"
      variant="outlined"
      elevation={0}
      square
      className={classes.root}
    >
      <Table style={style}>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Name</TableCell>
            <TableCell>Options</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {results?.length === 0 && <EmptyState />}
          {(results || []).map(character => {
            const find = character?.urls.find(({ type }) => type === 'detail');
            const { url } = find || {};

            return (
              <CharacterRow
                key={character.id}
                character={character}
                url={url}
              />
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
};

CharacterTable.propTypes = {
  results: PropTypes.array,
};

export { CharacterTable };
