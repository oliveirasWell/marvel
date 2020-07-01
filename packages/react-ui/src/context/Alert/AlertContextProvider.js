import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Alert } from '../../components/Alert';
import { AlertContext } from './AlertContext';

const AlertContextProvider = ({ children }) => {
  const [alerts, _setAlerts] = useState([]);

  const addAlert = text => _setAlerts([...alerts, text]);
  const removeAlert = index => {
    _setAlerts([...alerts.slice(0, index), ...alerts.slice(index + 1)]);
  };

  return (
    <AlertContext.Provider
      value={{
        addAlert,
      }}
    >
      {(alerts || []).map((text, index) => (
        <Alert
          key={`${text}-${index}`}
          text={text}
          onClick={removeAlert}
          index={index}
        />
      ))}
      {children}
    </AlertContext.Provider>
  );
};

AlertContextProvider.propTypes = {
  /* children component  */
  children: PropTypes.element.isRequired,
};

export { AlertContextProvider };
