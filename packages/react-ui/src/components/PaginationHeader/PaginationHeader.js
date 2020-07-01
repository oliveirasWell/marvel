import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { PAGE_SIZE } from '../../constants/apiConstants';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1),
    minHeight: 44,
  },
  divMargin: {
    minHeight: 44,
    display: 'flex',
    justifyContent: 'space-between',
  },
  typography: {
    alignSelf: 'center',
  },
}));

const PaginationHeader = ({
  results,
  page,
  total,
  getPrevious,
  getNext,
  totalText,
}) => {
  const classes = useStyles();
  const currentPage = (page + 1) * PAGE_SIZE;
  const totalString = `${
    currentPage > total ? total : currentPage
  }/${total} ${totalText}`;

  return (
    <Paper
      component="form"
      variant="outlined"
      elevation={0}
      square
      className={classes.root}
    >
      <div className={classes.divMargin}>
        <Button
          type="button"
          onClick={getPrevious}
          disabled={!results || page === 0}
        >
          Previous
        </Button>
        {results && (
          <Typography variant="button" className={classes.typography}>
            {totalString}
          </Typography>
        )}
        <Button
          type="button"
          onClick={getNext}
          disabled={!results || page === total}
        >
          Next
        </Button>
      </div>
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
