import React from 'react';
import PropTypes from 'prop-types';
import { textToUpper } from '@oliveiras-well/es-shared';
import Chip from '@material-ui/core/Chip';

const style = { backgroundColor: 'red' };

export const Alert = ({ text = 'Alerta', onClick: onClickInput, index }) => {
  const onClick = () => onClickInput(index);

  return (
    <Chip
      style={style}
      onClick={onClick}
      onKeyDown={() => {}}
      label={textToUpper(text)}
    />
  );
};

Alert.propTypes = {
  /* text input  */
  text: PropTypes.string,
  /* onClick  function */
  onClick: PropTypes.func,
};
