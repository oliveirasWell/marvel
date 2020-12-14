import React from 'react';
import PropTypes from 'prop-types';
import { textToUpper } from '@oliveiras-well/es-shared';
import { Chip as ChipMui } from '@material-ui/core';
import styled from 'styled-components';

const Chip = styled(ChipMui)`
  background-color: red;
`;

const onKeyDown = () => {};

export const Alert = ({ text = 'Alerta', onClick: onClickInput, index }) => {
  const onClick = () => onClickInput(index);

  return (
    <Chip onClick={onClick} onKeyDown={onKeyDown} label={textToUpper(text)} />
  );
};

Alert.propTypes = {
  /* text input  */
  text: PropTypes.string,
  /* onClick  function */
  onClick: PropTypes.func,
};
