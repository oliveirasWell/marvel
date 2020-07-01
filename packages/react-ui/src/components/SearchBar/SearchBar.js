import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import { useStyles } from './SearchBarStyles';

const SearchBar = ({
  value,
  onChange,
  onKeyDown,
  onSearchClick,
  onCleanClick,
  placeholder,
}) => {
  const classes = useStyles();

  return (
    <Paper
      component="form"
      variant="outlined"
      elevation={0}
      square
      className={classes.root}
    >
      <InputBase
        id="search"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className={classes.input}
        placeholder={placeholder}
        inputProps={{ 'aria-label': 'search' }}
      />
      <IconButton
        className={classes.iconButton}
        aria-label="search"
        onClick={onSearchClick}
      >
        <SearchIcon />
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton
        onClick={onCleanClick}
        className={classes.iconButton}
        aria-label="directions"
      >
        <CloseIcon />
      </IconButton>
    </Paper>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  onSearchClick: PropTypes.func,
  onCleanClick: PropTypes.func,
  placeholder: PropTypes.string,
};

export { SearchBar };
