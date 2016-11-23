import React from 'react';
import { formTreeData } from '../../../lib/helpers';
import ToolbarButton from './ToolbarButton';
import {
  signup,
  login,
  logout,
  createProject,
  getProject,
  getAllProjects,
} from '../../../lib/api-methods';
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
    <ToolbarButton click={() => { login('Cheney123', '123'); }}>
      <i className="fa fa-download" aria-hidden="true" />
    </ToolbarButton>
    <ToolbarButton click={() => { getProject(1333); }}>
      <i className="fa fa-download" aria-hidden="true" />
    </ToolbarButton>
    <ToolbarButton click={() => { getAllProjects(); }}>
      <i className="fa fa-download" aria-hidden="true" />
    </ToolbarButton>
  </div>
  );
};

export default Toolbar;
// <ToolbarButton click={() => { signup('Cheney123', '123'); }}>
//   <i className="fa fa-download" aria-hidden="true" />
// </ToolbarButton>
// <ToolbarButton click={() => { logout(); }}>
//   <i className="fa fa-download" aria-hidden="true" />
// </ToolbarButton>
    // <ToolbarButton
    //   click={() => {
    //     createProject({
    //       projectProps: { name: 'random', project_tree: '12312415' },
    //       permissionId: 1,
    //     });
    //   }}
    // >
    //   <i className="fa fa-download" aria-hidden="true" />
    // </ToolbarButton>
