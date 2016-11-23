import React, { PropTypes } from 'react';

const UpdateText = ({ toggleTextModal, updateProps, selected }) => {
  const callback = (value) => {
    updateProps(
      'content',
      value,
      selected,
    );
  };

  return (
    <div>
      <button
        onClick={() => toggleTextModal(
          'new text',
          callback,
        )}
      > <i className="fa fa-pencil" aria-hidden="true" /> UPDATE TEXT
      </button>
    </div>
  );
};

UpdateText.propTypes = {
  selected: PropTypes.number.isRequired,
  updateProps: PropTypes.func.isRequired,
  toggleTextModal: PropTypes.func.isRequired,
};

export default UpdateText;
