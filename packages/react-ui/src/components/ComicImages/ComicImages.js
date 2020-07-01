import React from 'react';
import PropTypes from 'prop-types';

const style = { maxWidth: '100px' };

const ComicImages = ({ comic }) =>
  (comic?.images ?? []).map(({ path, extension }, index) => (
    <img
      key={`${comic.id}--image-${index}`}
      src={`${path}.${extension}`}
      alt="thumbnail"
      style={style}
      onClick={() => window.open(`${path}.${extension}`)}
    />
  ));

ComicImages.propTypes = {
  comic: PropTypes.object,
};

export { ComicImages };
