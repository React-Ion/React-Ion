import React, { PropTypes } from 'react';

const ZoomPercent = ({ zoom }) => (
  <span className="zoom-percent">
    <i className="fa fa-search" aria-hidden="true" />
    {`${Math.round(100 * (zoom))}%`}
  </span>
);

ZoomPercent.propTypes = {
  zoom: PropTypes.number.isRequired,
};

export default ZoomPercent;
