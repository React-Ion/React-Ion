import React, { PropTypes } from 'react';

const LinkDisplay = ({ url }) => {
  if (url) {
    return (
      <span className="link-display">
        <i className="fa fa-link" aria-hidden="true" /> {url}
      </span>
    );
  } return null;
};

// LinkDisplay.propTypes = {
//   url: PropTypes.string.isRequired,
// };

export default LinkDisplay;
