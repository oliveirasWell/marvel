import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CloseIcon from '@material-ui/icons/Close';
import {
  Divider as DividerMui,
  InputBase as InputBaseMui,
  IconButton as IconButtonMui,
  Paper as PaperMui,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const Paper = styled(PaperMui)`
  margin: ${props => props && props.theme && props.theme.spacing(1)}px;
  display: flex;
  align-items: center;
`;

const Divider = styled(DividerMui)`
  height: 28px;
  margin: 4px;
`;

const IconButton = styled(IconButtonMui)`
  padding: 10px;
`;

const InputBase = styled(InputBaseMui)`
  margin-left: ${props => props && props.theme && props.theme.spacing(1)}px;
  flex: 1;
`;

const SearchBar = ({
  value,
  onChange,
  onKeyDown,
  onSearchClick,
  onCleanClick,
  placeholder,
}) => (
  <Paper component="form" variant="outlined" elevation={0} square>
    <InputBase
      id="search"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      inputProps={{ 'aria-label': 'search' }}
    />
    <IconButton aria-label="search" onClick={onSearchClick}>
      <SearchIcon />
    </IconButton>
    <Divider orientation="vertical" />
    <IconButton onClick={onCleanClick} aria-label="directions">
      <CloseIcon />
    </IconButton>
  </Paper>
);

SearchBar.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  onSearchClick: PropTypes.func,
  onCleanClick: PropTypes.func,
  placeholder: PropTypes.string,
};

export { SearchBar };
