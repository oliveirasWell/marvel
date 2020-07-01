import React, { useEffect, useState } from 'react';
import { AlertContext } from '../context/Alert/AlertContext';
import { MarvelComicsApiService } from '../services/MarvelComicsApiService';
import { PAGE_SIZE } from '../constants/apiConstants';

export function useComicsPaginate() {
  const { addAlert } = React.useContext(AlertContext);
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [error, setErros] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    MarvelComicsApiService.getPaginated(page, PAGE_SIZE)
      .then(response => {
        setTotal(response?.total);
        setResults(response?.results);
      })
      .catch(e => setErros(e))
      .finally(() => setLoading(false));
  }, [page]);

  useEffect(() => {
    if (error) {
      addAlert(error);
    }
  }, [error, addAlert]);

  const getNext = () => {
    setLoading(true);
    setPage(page < total ? page + 1 : total);
  };

  const getPrevious = () => {
    setLoading(true);
    setPage(page > 1 ? page - 1 : 0);
  };

  return {
    results,
    page,
    total,
    loading,
    error,
    getNext,
    getPrevious,
  };
}
