import React from 'react';
import { formTreeData } from '../lib/helpers';
import '../scss/toolbar.scss';

const Toolbar = ({
  onUndo,
  canUndo,
  onRedo,
  canRedo,
  setZoom,
  routes,
}) => (
  <div className="toolbar">
    <button onClick={canUndo ? onUndo : null}>
      <i className="fa fa-undo" aria-hidden="true" />
    </button>
    <button onClick={canRedo ? onRedo : null}>
      <i className="fa fa-repeat" aria-hidden="true" />
    </button>
    <button onClick={() => setZoom('plus')}>
      <i className="fa fa-search-plus" aria-hidden="true" />
    </button>
    <button onClick={() => setZoom('minus')}>
      <i className="fa fa-search-minus" aria-hidden="true" />
    </button>
    <button onClick={() => { formTreeData(routes); }}>
      <i className="fa fa-download" aria-hidden="true" />
    </button>
  </div>
);

export default Toolbar;
