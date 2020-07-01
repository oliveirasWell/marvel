import React from 'react';
import PropTypes from 'prop-types';

const ComicCreators = ({ comic }) => (
  <>
    {(comic?.creators?.items ?? []).map(({ name }) => (
      <div key={`${comic.id}*${name}`}>{name}</div>
    ))}
  </>
);

ComicCreators.propTypes = {
  comic: PropTypes.object,
};

export { ComicCreators };
