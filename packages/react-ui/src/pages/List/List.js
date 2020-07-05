import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { useComicsPaginate } from '../../hooks/useComicsPaginate';
import { LoadingTernary } from '../../components/LoadingTernary';
import { routes } from '../../routes/routes';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { ComicCard } from './ComicCard';
import { PaginationHeader } from '../../components/PaginationHeader/PaginationHeader';
import { filterResults } from './listFunctions';

const List = () => {
  const history = useHistory();
  const [comics, setComics] = useState([]);
  const [filter, setFilter] = useState('');

  const {
    results,
    page,
    total,
    loading,
    getNext,
    getPrevious,
  } = useComicsPaginate();

  const handleChangeInput = event => {
    setFilter(event.target.value);
  };

  const _handleKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleChangeInput(e);
    }
  };

  const clearSearch = () => {
    setFilter('');
  };

  useEffect(() => {
    setComics(filterResults({ filter, results }));
  }, [results, filter]);

  return (
    <Grid container spacing={0}>
      <Grid item xs={12} xl={6} md={6} id="item-header">
        <SearchBar
          value={filter}
          onChange={handleChangeInput}
          onKeyDown={_handleKeyDown}
          onSearchClick={() => {}}
          onCleanClick={clearSearch}
          placeholder="Search for character, comic name, or author"
        />
      </Grid>
      <Grid item xs={12} xl={6} md={6} id="item-header">
        <PaginationHeader
          results={comics}
          page={page}
          total={total}
          getPrevious={getPrevious}
          getNext={getNext}
          totalText="comics"
        />
      </Grid>
      <Grid item xs={12} xl={12} md={12} id="item-header">
        <LoadingTernary loading={loading}>
          <Grid container spacing={0}>
            {!loading &&
              (comics || []).map(comic => (
                <Grid item xs={12} xl={3} md={3} key={`${comic.id}`}>
                  <ComicCard
                    title={comic.title}
                    authors={(comic?.creators?.items ?? [])
                      .map(({ name }) => name)
                      .join(', ')}
                    imageSrc={`${comic?.thumbnail?.path}.${comic?.thumbnail?.extension}`}
                    onClick={() => routes.DETAILS.redirect(history, comic.id)}
                    description={comic?.description}
                    format={comic?.format}
                    images={comic?.images}
                  />
                </Grid>
              ))}
          </Grid>
        </LoadingTernary>
      </Grid>
    </Grid>
  );
};

export default List;
