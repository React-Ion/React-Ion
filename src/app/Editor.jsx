import React from 'react';
import Draggable from 'react-draggable';
import { mapComponents } from '../lib/helpers';
import TextInputModal from '../containers/tool_component/text/TextInputModal';
import Toolbar from '../containers/tool_component/toolbar/Toolbar';
import EditorControls from '../containers/tool_component/toolbar/EditorControls';
import ZoomPercent from '../containers/tool_component/inspector/ZoomPercent';
import CurrentComponent from '../containers/tool_component/inspector/CurrentComponent';
import LinkDisplay from '../containers/tool_component/inspector/LinkDisplay';
import '../scss/toolbar.scss';
import '../scss/canvas.scss';
import '../scss/editor.scss';

const Editor = ({ routes, selected, pageSelected, zoom }) => {
  const pageRoute = [routes[pageSelected].present];
  return (
    <div className="editor">
      <TextInputModal />
      <Toolbar />
      <EditorControls />
      <ZoomPercent />
      <CurrentComponent />
      <LinkDisplay />
      <div
        className="canvas-wrapper"
        style={{
          transition: 'all .3s',
          transform: `scale(${zoom})`,
        }}
      >
        <Draggable>
          <div className="canvas">
            {mapComponents(pageRoute, selected)}
          </div>
        </Draggable>
      </div>
    </div>
  );
};

export default Editor;
