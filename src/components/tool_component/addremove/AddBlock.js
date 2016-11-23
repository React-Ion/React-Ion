import React, { PropTypes } from 'react';

const AddBlock = ({
  addChild,
  selected,
  nextId,
}) => (
  <div className="add-block">
    <button
      onClick={() => {
        addChild('Block', {
          backgroundColor: 'rgba(255,255,255,.1)',
          flex: 1,
          height: [50, '%'],
          width: [20, '%'],
          margin: '20px',
          flexDirection: 'row' },
          `Block${nextId}`,
          selected,
          nextId,
        );
      }}
    > <i className="fa fa-plus" aria-hidden="true" /> BLOCK
    </button>
  </div>
);

AddBlock.propTypes = {
  selected: PropTypes.number.isRequired,
  nextId: PropTypes.number.isRequired,
  addChild: PropTypes.func.isRequired,
  removeChild: PropTypes.func.isRequired,
};


export default AddBlock;
