import React, { PropTypes } from 'react';

const Delete = ({
  selected,
  removeChild,
}) => (
  <div className="delete">
    <button
      onClick={() => removeChild(selected)}
    > <i className="fa fa-trash" aria-hidden="true" />
    </button>
  </div>
);

Delete.propTypes = {
  selected: PropTypes.number.isRequired,
  removeChild: PropTypes.func.isRequired,
};

export default Delete;
