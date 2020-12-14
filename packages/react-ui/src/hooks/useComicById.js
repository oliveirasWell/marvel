import React, { useEffect } from 'react';
import { AlertContext } from 'context/Alert/AlertContext';

import { useQuery } from 'react-query';
import { ROOT_MARVEL_API_URL } from '../constants/apiConstants';

export function useComicById({ id }) {
  const { addAlert } = React.useContext(AlertContext);

  const {
    isLoading: loading,
    error,
    data: { data: { results } = {} } = {},
  } = useQuery('repoData', () =>
    fetch(
      `${ROOT_MARVEL_API_URL}/comics/${id}?apikey=${process.env.REACT_APP_API_PUBLIC_KEY}`
    ).then(res => res.json())
  );

  useEffect(() => {
    if (error) {
      addAlert(error.message);
    }
  }, [error, addAlert]);

  return {
    result: results && results[0],
    loading,
    error,
  };
}
