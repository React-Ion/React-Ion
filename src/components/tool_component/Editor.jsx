import React, { PropTypes } from 'react';
import Draggable from 'react-draggable';
import { mapComponents } from '../../lib/helpers';
import TextInputModal from '../../containers/tool_component/text/TextInputModal';
import TextListInputModal from '../../containers/tool_component/text/TextListInputModal';
import PreviewModal from '../../containers/tool_component/modals/PreviewModal';
import Toolbar from '../../containers/tool_component/toolbar/Toolbar';
import EditorControls from '../../containers/tool_component/toolbar/EditorControls';
import ZoomPercent from '../../containers/tool_component/inspector/ZoomPercent';
import CurrentComponent from '../../containers/tool_component/inspector/CurrentComponent';
import LinkDisplay from '../../containers/tool_component/inspector/LinkDisplay';
import PreviewDisplay from '../../containers/tool_component/inspector/PreviewDisplay';

import '../../scss/toolbar.scss';
import '../../scss/canvas.scss';
import '../../scss/editor.scss';
import '../../scss/index.scss';

const Editor = ({ routes, selected, pageSelected, zoom }) => {
  const pageRoute = [routes[pageSelected].present];
  console.log(pageRoute);
  return (
    <div className="editor">
      <TextInputModal />
      <TextListInputModal />
      <PreviewModal />
      <Toolbar />
      <EditorControls />
      <PreviewDisplay />
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

Editor.propTypes = {
  routes: PropTypes.array.isRequired,
  selected: PropTypes.number.isRequired,
  pageSelected: PropTypes.number.isRequired,
  zoom: PropTypes.number.isRequired,
};

export default Editor;
// export default store;
