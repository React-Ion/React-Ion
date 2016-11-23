import React, { PropTypes } from 'react';

const TextAlign = ({ updateProps, selected }) => (
  <div>
    <button
      onClick={() => updateProps(
        'textAlign',
        'left',
        selected,
      )}
    > <i className="fa fa-align-left" aria-hidden="true" />
    </button>
    <button
      onClick={() => updateProps(
        'textAlign',
        'center',
        selected,
      )}
    > <i className="fa fa-align-center" aria-hidden="true" />
    </button>
    <button
      onClick={() => updateProps(
        'textAlign',
        'right',
        selected,
      )}
    > <i className="fa fa-align-right" aria-hidden="true" />
    </button>
  </div>
);

TextAlign.propTypes = {
  selected: PropTypes.number.isRequired,
  updateProps: PropTypes.func.isRequired,
};

export default TextAlign;
