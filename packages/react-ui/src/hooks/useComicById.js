import React, { useEffect, useState } from 'react';
import { AlertContext } from '../context/Alert/AlertContext';
import { MarvelComicsApiService } from '../services/MarvelComicsApiService';

export function useComicById({ id }) {
  const { addAlert } = React.useContext(AlertContext);
  const [result, setResult] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    MarvelComicsApiService.getById(id)
      .then(response => setResult(response?.results[0]))
      .catch(e => setError(e))
      .finally(() => setLoading(false));
  }, [id]);

  useEffect(() => {
    if (error) {
      addAlert(error.message);
    }
  }, [error, addAlert]);

  return {
    result,
    loading,
    error,
  };
}
