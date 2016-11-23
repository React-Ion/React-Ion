import React, { PropTypes } from 'react';

const CurrentComponent = ({ name }) => (
  <span className="current-component">
    Component Name: {name}
  </span>
);

CurrentComponent.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CurrentComponent;
