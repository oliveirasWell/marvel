import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { LoadingTernary } from 'components/LoadingTernary';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { PaginationHeader } from 'components/PaginationHeader/PaginationHeader';
import { useComicsPaginate } from 'hooks/useComicsPaginate';
import { useTheme } from '@material-ui/styles';
import { Theme, useMediaQuery } from '@material-ui/core';
import { routes } from 'routes/routes';
import { ComicCard } from './ComicCard';
import { filterResults } from './listFunctions';

const List = () => {
  const history = useHistory();
  const [comics, setComics] = useState([]);
  const [filter, setFilter] = useState('');
  const theme: Theme = useTheme();
  const mobile = !useMediaQuery(theme.breakpoints.up('sm'));
  // FIXME remove to styled-component
  const style = mobile ? { overflow: 'hide' } : {};

  const {
    results,
    page,
    total,
    loading,
    getNext,
    getPrevious,
  } = useComicsPaginate();

  // @ts-ignore
  const handleChangeInput = ({ target }) => {
    setFilter(target.value);
  };

  // @ts-ignore
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
    <Grid container spacing={0} style={style}>
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
              (comics || []).map((comic: any) => (
                <Grid item xs={12} xl={3} md={3} key={`${comic.id}`}>
                  <ComicCard
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    //@ts-ignore
                    title={comic.title}
                    authors={(comic?.creators?.items ?? [])
                      .map(({ name }: { name: string }) => name)
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

export { List };
