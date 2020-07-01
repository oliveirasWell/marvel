import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { useComicsPaginate } from '../../hooks/useComicsPaginate';
import { LoadingTernary } from '../../components/LoadingTernary';
import { routes } from '../../routes/routes';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { ComicCard } from './Card/ComicCard';
import { PaginationHeader } from '../../components/PaginationHeader/PaginationHeader';

const List = () => {
  const history = useHistory();
  const [comics, setComics] = useState([]);
  const [filter, setFilter] = useState(undefined);

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

  useEffect(() => {
    setComics(
      filter
        ? (results || []).filter(comic => {
            const searchString = filter.toLowerCase();

            const t = (comic?.characters?.items || []).find(
              item => item.name.toLowerCase().indexOf(searchString) > -1
            );

            const t2 = (comic?.creators?.items || []).find(
              item => item.name.toLowerCase().indexOf(searchString) > -1
            );

            const t3 =
              (comic?.title || {}).toLowerCase().indexOf(searchString) > -1;

            return t || t2 || t3;
          })
        : results
    );
  }, [results, filter]);

  const _handleKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleChangeInput(e);
    }
  };

  const clearSearch = () => {
    setFilter('');
  };

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
                <Grid item xs={12} xl={4} md={4} key={`${comic.id}`}>
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
