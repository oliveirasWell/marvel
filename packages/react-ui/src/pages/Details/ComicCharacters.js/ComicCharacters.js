import React from 'react';
import PropTypes from 'prop-types';

const ComicCharacters = ({ comic }) => (
  <>
    {(comic?.characters?.items ?? []).map(({ name }) => (
      <div key={`${comic.id}*${name}`}>{name}</div>
    ))}
  </>
);

ComicCharacters.propTypes = {
  comic: PropTypes.object,
};

export { ComicCharacters };
