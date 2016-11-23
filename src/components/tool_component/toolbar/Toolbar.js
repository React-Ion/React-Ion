import React from 'react';
import { formTreeData } from '../../../lib/helpers';
import ToolbarButton from './ToolbarButton';
import '../../../scss/toolbar.scss';


const Toolbar = ({
  onUndo,
  canUndo,
  onRedo,
  canRedo,
  setZoom,
  routes,
  pageSelected,
}) => {
  console.log('TOOLBAR', pageSelected);
  return (
  <div className="toolbar">
    <ToolbarButton click={canUndo ? onUndo : null}>
      <i className="fa fa-undo" aria-hidden="true" />
    </ToolbarButton>
    <ToolbarButton click={canRedo ? onRedo : null}>
      <i className="fa fa-repeat" aria-hidden="true" />
    </ToolbarButton>
    <ToolbarButton click={() => setZoom('plus')}>
      <i className="fa fa-search-plus" aria-hidden="true" />
    </ToolbarButton>
    <ToolbarButton click={() => setZoom('minus')}>
      <i className="fa fa-search-minus" aria-hidden="true" />
    </ToolbarButton>
    <ToolbarButton click={() => { formTreeData(routes); }}>
      <i className="fa fa-download" aria-hidden="true" />
    </ToolbarButton>
  </div>
  );
};

export default Toolbar;
