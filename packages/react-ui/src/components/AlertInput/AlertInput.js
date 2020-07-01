import React from 'react';
import { AlertContext } from '../../context/Alert/AlertContext';
import { GenericInput } from '../GenericInput';

const AlertInput = () => {
  const { addAlert } = React.useContext(AlertContext);
  const [alertText, setAlertText] = React.useState('');

  const handleClickInput = () => {
    addAlert(alertText);
  };

  const handleChangeInput = event => {
    setAlertText(event.target.value);
  };

  return (
    <GenericInput
      handleClickInput={handleClickInput}
      handleChangeInput={handleChangeInput}
      buttonText="Alert"
    />
  );
};

export { AlertInput };
