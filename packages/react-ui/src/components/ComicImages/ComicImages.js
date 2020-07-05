import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ComicImg = styled.img`
  max-width: 100px;
  margin: ${({ theme }) => theme.spacing(1 / 2)}px;
`;

const ComicImages = ({ comic }) =>
  (comic?.images ?? []).map(({ path, extension }, index) => (
    <ComicImg
      key={`${comic.id}--image-${index}`}
      src={`${path}.${extension}`}
      alt="thumbnail"
      onClick={() => window.open(`${path}.${extension}`)}
    />
  ));

ComicImages.propTypes = {
  comic: PropTypes.object,
};

export { ComicImages };
