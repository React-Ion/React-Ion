import React, { PropTypes } from 'react';

const AddLink = ({
  toggleTextModal,
  updateInfos,
  selected,
  setSelected,
}) => {
  const callback = (value) => {
    updateInfos(
      'aUrl',
      value,
      selected,
    );
    setTimeout(() => setSelected(null, selected), 0);
  };

  return (
    <div className="link-button">
      <button
        onClick={() => toggleTextModal(
          'enter link url',
          'text',
          callback,
        )}
      > <i className="fa fa-link" aria-hidden="true" />
      </button>
    </div>
  );
};

AddLink.propTypes = {
  selected: PropTypes.number.isRequired,
  setSelected: PropTypes.func.isRequired,
  updateInfos: PropTypes.func.isRequired,
  toggleTextModal: PropTypes.func.isRequired,
};

export default AddLink;
