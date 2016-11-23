import React, { PropTypes } from 'react';

const NameInput = ({ toggleTextModal, updateInfos, selected, setSelected }) => {
  const capitalizeFirstLetter = s => s.charAt(0).toUpperCase() + s.slice(1);
  const makeComponentName = string => string.split(' ').map(word => capitalizeFirstLetter(word)).join('');

  const callback = (value) => {
    const componentName = makeComponentName(value);
    updateInfos(
      'name',
      componentName,
      selected,
    );
    setTimeout(() => setSelected(null, selected), 0);
  };

  return (
    <div>
      <button
        onClick={() => toggleTextModal(
          'enter component name',
          callback,
        )}
      > COMPONENT NAME <i className="fa fa-pencil" aria-hidden="true" />
      </button>
    </div>
  );
};

NameInput.propTypes = {
  selected: PropTypes.number.isRequired,
  setSelected: PropTypes.func.isRequired,
  toggleTextModal: PropTypes.func.isRequired,
  updateInfos: PropTypes.func.isRequired,
};

export default NameInput;
