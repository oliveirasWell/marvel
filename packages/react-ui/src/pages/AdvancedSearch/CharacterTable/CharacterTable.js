import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { EmptyState } from 'components/EmptyState';
import { CharacterRowPure } from './CharacterRow';

const StyledTable = styled(Table)`
  width: 100%;
`;

const StyledPaper = styled(Paper)`
  margin: ${props => props && props.theme && props.theme.spacing(1)}px;
`;

const CharacterRowWrapper = ({ urls, id, name, thumbnail }) => {
  const find = urls.find(({ type }) => type === 'detail');
  const { url } = find || {};

  return (
    <CharacterRowPure key={id} name={name} thumbnail={thumbnail} url={url} />
  );
};

CharacterRowWrapper.propTypes = {
  urls: PropTypes.string,
  id: PropTypes.number,
  name: PropTypes.string,
  thumbnail: PropTypes.object,
};

const CharacterTable = ({ results }) => {
  const isEmpty = results?.length === 0;

  return (
    <StyledPaper component="form" variant="outlined" elevation={0} square>
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Name</TableCell>
            <TableCell>Options</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isEmpty && <EmptyState />}
          {(results || []).map(CharacterRowWrapper)}
        </TableBody>
      </StyledTable>
    </StyledPaper>
  );
};

CharacterTable.propTypes = {
  results: PropTypes.array,
};

export { CharacterTable };
