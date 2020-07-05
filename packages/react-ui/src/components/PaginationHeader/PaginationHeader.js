import React from 'react';
import { Paper as PaperMui } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { PAGE_SIZE } from '../../constants/apiConstants';

const Container = styled.div`
  min-height: 48px;
  display: flex;
  justify-content: space-between;
`;

const TypographyStyled = styled(Typography)`
  align-self: center;
`;

const Paper = styled(PaperMui)`
  margin: ${props => props?.theme && props.theme.spacing(1)}px;
  min-height: 48px;
`;

const PaginationHeader = ({
  results,
  page,
  total,
  getPrevious,
  getNext,
  totalText,
}) => {
  const currentPage = (page + 1) * PAGE_SIZE;
  const totalString = `${
    currentPage > total ? total : currentPage
  }/${total} ${totalText}`;

  return (
    <Paper component="form" variant="outlined" elevation={0} square>
      <Container>
        <Button
          type="button"
          onClick={getPrevious}
          disabled={!results || page === 0}
        >
          Previous
        </Button>
        {results && (
          <TypographyStyled variant="button">{totalString}</TypographyStyled>
        )}
        <Button
          type="button"
          onClick={getNext}
          disabled={!results || page === total}
        >
          Next
        </Button>
      </Container>
    </Paper>
  );
};

PaginationHeader.propTypes = {
  /* results array */
  totalText: PropTypes.string,
  /* results array */
  results: PropTypes.array,
  /* current page */
  page: PropTypes.number,
  /* total of items */
  total: PropTypes.number,
  /* getPrevious of pagination function */
  getPrevious: PropTypes.func.isRequired,
  /* getNext of pagination function */
  getNext: PropTypes.func.isRequired,
};

export { PaginationHeader };
