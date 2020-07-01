import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { useCharactersPaginate } from '../../hooks/useCharactersPaginate';
import { LoadingTernary } from '../../components/LoadingTernary';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { PaginationHeader } from '../../components/PaginationHeader/PaginationHeader';
import { CharacterTable } from './CharacterTable/CharacterTable';

const AdvancedSearch = () => {
  const [nameStartsWith, setNameStartsWith] = useState(undefined);
  const [searchNameStartsWith, setSearchNameStartsWith] = useState(undefined);

  const handleClickInput = () => {
    setSearchNameStartsWith(nameStartsWith);
  };

  const handleChangeInput = event => {
    setNameStartsWith(event.target.value);
  };

  const {
    results: characters,
    page,
    total,
    loading,
    getNext,
    getPrevious,
  } = useCharactersPaginate({ nameStartsWith: searchNameStartsWith });

  const _handleKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleChangeInput(e);
      handleClickInput();
    }
  };

  const clearSearch = () => {
    setSearchNameStartsWith('');
    setNameStartsWith('');
  };

  return (
    <Grid container spacing={0}>
      <Grid item xs={12} xl={6} md={6} id="item-header">
        <SearchBar
          value={nameStartsWith}
          onChange={handleChangeInput}
          onKeyDown={_handleKeyDown}
          onSearchClick={handleClickInput}
          onCleanClick={clearSearch}
          placeholder="Search for a character"
        />
      </Grid>
      <Grid item xs={12} xl={6} md={6} id="item-header">
        <PaginationHeader
          results={characters}
          page={page}
          total={total}
          getPrevious={getPrevious}
          getNext={getNext}
          totalText="Characters"
        />
      </Grid>
      <Grid item xs={12} xl={12} md={12} id="item-header">
        <LoadingTernary loading={loading}>
          <CharacterTable results={characters} />
        </LoadingTernary>
      </Grid>
    </Grid>
  );
};

export { AdvancedSearch };
export default AdvancedSearch;
