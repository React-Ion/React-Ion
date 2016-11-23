import React, { PropTypes } from 'react';

const BackgroundImageInput = ({ updateProps, selected, toggleTextModal }) => {
  const callback = (value) => {
    updateProps(
      'backgroundImage',
      value,
      selected,
    );
  };

  return (
    <div className="bg-image">
      <button
        onClick={() => toggleTextModal(
          'enter url',
          'text',
          callback,
        )}
      > <i className="fa fa-image" aria-hidden="true" />
      </button>
    </div>
  );
};

BackgroundImageInput.propTypes = {
  selected: PropTypes.number.isRequired,
  updateProps: PropTypes.func.isRequired,
  toggleTextModal: PropTypes.func.isRequired,
};

export default BackgroundImageInput;
