import React from 'react';

const AddImage = ({
  addChild,
  toggleTextModal,
  selected,
  nextId,
}) => {
  const callback = (value) => {
    addChild('Image', {
      flex: 1,
      height: [50, '%'],
      width: [20, '%'],
      margin: '20px',
      flexDirection: 'row',
      url: value },
      `Image${nextId}`,
      selected,
      nextId,
    );
    // setTimeout(() => setSelected(null, selected), 0);
  };

  return (
    <div className="add-image">
      <button
        onClick={() => toggleTextModal(
          'enter link url',
          'text',
          callback,
        )}
      > <i className="fa fa-plus" aria-hidden="true" /> IMAGE
      </button>
    </div>
  );
};

export default AddImage;
