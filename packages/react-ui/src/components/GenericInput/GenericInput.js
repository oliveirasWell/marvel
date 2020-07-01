import React from 'react';
import PropTypes from 'prop-types';

const GenericInput = ({
  handleClickInput,
  handleChangeInput,
  defaultValue = '',
  buttonText = 'Okay',
  placeholder,
}) => (
  <>
    <input
      onChange={handleChangeInput}
      defaultValue={defaultValue}
      placeholder={placeholder}
    />
    {handleClickInput && (
      <button onClick={handleClickInput} type="button">
        {buttonText}
      </button>
    )}
  </>
);

GenericInput.propTypes = {
  /* button click function */
  handleClickInput: PropTypes.string,
  /* input change function */
  handleChangeInput: PropTypes.func.isRequired,
  /* input default value  */
  defaultValue: PropTypes.string,
  /* button text input  */
  buttonText: PropTypes.string,
  /* input text placeholder  */
  placeholder: PropTypes.string,
};

export { GenericInput };
