import React from 'react';
import PropTypes from 'prop-types';
import { Loading } from '../Loading';

const LoadingTernary = ({ children, loading }) => (
  <>
    {loading ? (
      <Loading id="loading-ternary" />
    ) : (
      React.Children.map(children, (child, index) =>
        React.cloneElement(child, { id: index })
      )
    )}
  </>
);

LoadingTernary.propTypes = {
  /* children component  */
  children: PropTypes.node.isRequired,
  /* boolean that represents if parent component is loading  */
  loading: PropTypes.bool.isRequired,
};

export { LoadingTernary };
